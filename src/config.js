const isProd = process.env.NODE_ENV === 'production';
const endpoint = isProd ? 'https://graphql.dreamteam.tech' : 'http://localhost:4000';

module.exports = {
  vkCommunity: {
    "app_id": 6776201,
    "action": "pay-to-group",
    "params": {
      "amount": 1,
      "description": "тестовый платеж",
      "group_id": 175055996
    }
  },
  graphqlEndpoint: `${endpoint}/graphql`,
  endpoint
};
