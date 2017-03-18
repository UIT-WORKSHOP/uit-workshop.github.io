import Vuex from 'vuex';
import Vue from 'vue';
import members from './scenes/member-list/store';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
  },
  modules: {
    members,
  },
});

export default store;
