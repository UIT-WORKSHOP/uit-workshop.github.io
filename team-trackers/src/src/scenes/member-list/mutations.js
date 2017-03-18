/*  eslint no-param-reassign: ["error", { "props": false }]*/
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';

export default {
  [FETCH_START]: (state) => {
    state.fetching = true;
  },
  [FETCH_SUCCESS]: (state, payload) => {
    state.list = payload.members;
    state.fetching = false;
    state.fetched = true;
  },
};
