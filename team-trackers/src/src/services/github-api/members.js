import config from './config';

console.log(config);
export default () => (
  fetch(config.members, {
    headers: {
      Accept: config.type.json,
      Authorization: `token ${config.token}`,
    },
  })
  .then(response => response.json())
);
