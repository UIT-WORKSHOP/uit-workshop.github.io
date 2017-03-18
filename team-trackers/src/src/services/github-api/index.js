import { polyfill } from 'es6-promise';
import 'isomorphic-fetch';

// Polyfill Es6 promises feature
polyfill();

fetch('https://api.github.com/orgs/uit-workshop/repos', {
  headers: {
    // Define explicitly github api version to use
    Accept: 'application/vnd.github.v3+json',
  },
}).then(response => response.json()).then((repos) => {
  console.log(repos);
  return null;
});
