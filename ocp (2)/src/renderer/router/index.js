import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login-page',
      component: require('@/components/LoginPage').default,
    },
    {
      path: '/mainPage',
      name: 'main-page',
      component: require('@/components/MainPage/MainPage').default,
    },
    {
      path: '/telephone',
      name: 'phone-page',
      component: require('@/components/Telephone/Telephone').default,
    },
    {
      path: '/license',
      name: 'license-page',
      component: require('@/components/License/LicenseSetting').default,
    },
    {
      path: '/sleep',
      name: 'sleep-page',
      component: require('@/components/Sleep/Sleep').default,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
