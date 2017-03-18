const api = 'https://api.github.com';

export default {
  org: `${api}/orgs/uit-workshop`,
  members: `${api}/orgs/uit-workshop/members`,
  // Put the token here is not cool at all :3 Need to find a way
  token: 'db45dabe1d5ec583744c821789e44956df05801e',
  type: {
    json: 'application/vnd.github.v3+json',
  },
};
