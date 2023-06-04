import { GraphQLClient } from 'graphql-request';
import { environment } from '../environments/environment';

export const clientQl = new GraphQLClient(
  'https://api-sa-east-1.hygraph.com/v2/clic5p2z00tak01us6dti85qf/master',
  {
    headers: {
      Authorization: `Bearer ${environment.token_admin}`,
    },
  }
);
