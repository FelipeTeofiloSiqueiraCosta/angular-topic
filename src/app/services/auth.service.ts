import { Injectable } from '@angular/core';

import { User } from '../interfaces/User';
import { clientQl } from '../graphql-client';
import { gql } from 'graphql-request';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userLoggedStatus: boolean = false;

  constructor() {}

  haveSession() {
    const encoded = localStorage.getItem(environment.localStorage_name_session);

    if (encoded) {
      const decoded: User = JSON.parse(atob(encoded));

      if (
        decoded.hasOwnProperty('expiresAt') &&
        decoded.expiresAt > new Date().getTime()
      ) {
        this.userLoggedStatus = true;
      } else {
        this.userLoggedStatus = false;
        localStorage.removeItem(environment.localStorage_name_session);
      }
    }

    return this.userLoggedStatus;
  }

  async createNewUser(user: User, file: { fileName: string; handle: string }) {
    const encodedPassword = btoa(user.password || '');
    const query = gql`
      mutation CreateOwner {
        createOwner(
          data: { name: "${user.name}", email: "${user.email}", password: "${encodedPassword}", picture: {create: {fileName: "${file.fileName}", handle: "${file.handle}"}}, birthday: "${user.birthday}" }
        )
      }
    `;
  }

  async signIn(email: string, password: string) {
    const query = gql`
      query MyQuery {
        owner(where: { email: "${email}" }) {
          password
          name
          id
          permissionToken
          picture
          email
        }
      }
    `;

    const data: { owner: User } = await clientQl.request(query);

    if (btoa(password) === data.owner.password) {
      const user: User = {
        ...data.owner,
        expiresAt: new Date().getTime() + 15 * 60000, //data atual + 15 min
      };

      delete user.password;
      // console.log(user.permissionToken);
      this.setSession(user);
    } else {
    }
  }

  setSession(user: User): string {
    const object = btoa(JSON.stringify(user));
    localStorage.setItem(environment.localStorage_name_session, object);
    return object;
  }
  getSession() {}
}
