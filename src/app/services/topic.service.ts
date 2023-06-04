import { Injectable } from '@angular/core';
import { clientQl } from '../graphql-client';
import { gql } from 'graphql-request';
@Injectable({
  providedIn: 'root',
})
export class TopicService {
  constructor() {}

  async getAllTopics() {
    const query = gql`
      query Topics {
        topics {
          createdAt
          description
          id
          publishedAt
          title
          updatedAt
        }
      }
    `;

    const data = await clientQl.request(query);
    console.log(data);
  }
}
