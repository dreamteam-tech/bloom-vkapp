const endpoint = process.env.NODE_ENV === 'production' ? 'https://hack.dreamteam.tech' : 'http://localhost:4000';

module.exports = {
  graphqlEndpoint: `${endpoint}/graphql`,
  endpoint
};
