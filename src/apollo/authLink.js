import { ApolloLink } from 'apollo-link';
import { loadUser, setAuthHeaders } from '../utils';

export const authLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => {
    const user = loadUser();
    if (null === user) {
      return headers;
    }

    return {
      headers: setAuthHeaders(headers, user.accessToken)
    };
  });

  return forward(operation);
});
