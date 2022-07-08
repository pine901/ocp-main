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
      path: '/admin',
      name: 'admin-page',
      component: require('@/components/Admin/AmainPage/AmainPage').default,
    },
    {
      path: '/adminMaintanace',
      name: 'amaintanance-page',
      component: require('@/components/Admin/Maintanance/Amaintanance').default,
    },
    {
      path: '/adminModbus',
      name: 'amodbus-page',
      component: require('@/components/Admin/Modbus/ModbusControl').default,
    },
    {
      path: '/adminNtp',
      name: 'antp-page',
      component: require('@/components/Admin/NTP/Ntp').default,
    },
    {
      path: '/adminNuvoton',
      name: 'anuvoton-page',
      component: require('@/components/Admin/Nuvoton/Nuvoton').default,
    },
    {
      path: '/adminAnalogue',
      name: 'analogue-page',
      component: require('@/components/Admin/Analogue/Analogue').default,
    },
    {
      path: '/adminGas',
      name: 'agas-page',
      component: require('@/components/Admin/GasAlarm/GasAlarm').default,
    },
    {
      path: '/adminIsolation',
      name: 'aisolation-page',
      component: require('@/components/Admin/Isolation/Isolation').default,
    },
    {
      path: '/adminPhone',
      name: 'aphone-page',
      component: require('@/components/Admin/Phone/Phone').default,
    },
    {
      path: '/adminNega',
      name: 'anega-page',
      component: require('@/components/Admin/Negatoscope/Negatoscope').default,
    },
    {
      path: '/adminMessage',
      name: 'amessage-page',
      component: require('@/components/Admin/Message/Message').default,
    },
    {
      path: '/adminPassword',
      name: 'apassword-page',
      component: require('@/components/Admin/Password/Password').default,
    },
    {
      path: '/adminLang',
      name: 'alang-page',
      component: require('@/components/Admin/Language/Language').default,
    },
    {
      path: '/adminPollution',
      name: 'apoluu-page',
      component: require('@/components/Admin/Pollution/Pollution').default,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
