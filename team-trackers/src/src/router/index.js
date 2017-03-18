import Vue from 'vue';
import Router from 'vue-router';
import home from '@/scenes/home';
import memberList from '@/scenes/member-list';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/members',
      name: 'memberList',
      component: memberList,
    },
  ],
});
