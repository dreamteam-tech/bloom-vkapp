const isProd = process.env.NODE_ENV === 'production';
const endpoint = isProd ? 'https://graphql.dreamteam.tech' : 'http://localhost:4000';

module.exports = {
  graphqlEndpoint: `${endpoint}/graphql`,
  endpoint
};
