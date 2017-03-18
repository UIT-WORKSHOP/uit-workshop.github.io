import memberApi from '../../services/github-api/members';
import mutations, { FETCH_START, FETCH_SUCCESS } from './mutations';

export default {
  namespaced: true,
  state: {
    list: [],
    fetched: false,
    fetching: false,
  },
  mutations,
  actions: {
    getMembers: ({ commit }) => {
      commit(FETCH_START);
      memberApi().then((members) => {
        commit(FETCH_SUCCESS, { members });
      }).catch((err) => {
        console.log('err', err);
      });
    },
  },
};
