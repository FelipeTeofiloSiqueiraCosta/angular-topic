import { Injectable } from '@angular/core';

import { User } from '../interfaces/user';
import { clientQl } from '../graphql-client';
import { gql } from 'graphql-request';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userLoggedStatus: boolean = false;

  constructor() {}

  haveSession() {
    const encoded = localStorage.getItem('@topic:auth');

    if (encoded) {
      const decoded: User = JSON.parse(atob(encoded));
      console.log(decoded);
      if (
        decoded.hasOwnProperty('expiresAt') &&
        decoded.expiresAt > new Date().getTime()
      ) {
        this.userLoggedStatus = true;
      } else {
        this.userLoggedStatus = false;
      }
    }

    return this.userLoggedStatus;
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
    localStorage.setItem('@topic:auth', object);
    return object;
  }
  getSession() {}
}
