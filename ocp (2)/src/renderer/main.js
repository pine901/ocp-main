import Vue from 'vue';
import Vuesax from 'Vuesax';

import axios from 'axios';
import Vuex from 'vuex';

// import VueCountdownTimer from 'vuejs-countdown-timer';
import App from './App';
import router from './router';
import store from './store';
// eslint-disable-next-line import/first
import 'vuesax/dist/vuesax.css';
// eslint-disable-next-line import/first
import { library } from '@fortawesome/fontawesome-svg-core';
// eslint-disable-next-line import/first
import {
  faUserSecret,
  faUserMd,
  faUserGraduate,
  faUserCog,
  faBusinessTime,
  faHistory,
  faCaretLeft,
  faCaretRight,
  faStop,
  faTemperatureHigh,
  faChevronRight,
  faChevronLeft,
  faTint,
  faTachometerAlt,
  faBacterium,
  faLongArrowAltDown,
  faCheck,
  faChevronUp,
  faChevronDown,
  faMusic,
  faEllipsisH,
  faStopwatch,
  faAirFreshener,
  faFileAlt,
  faTools,
  faPowerOff,
  faLightbulb,
  faLaptopMedical,
  faSun,
  faLungs,
  faTrafficLight,
  faPhone,
  faBell,
  faCalendarAlt,
  faUserCheck,
  faVolumeMute,
  faReply,
  faBackspace,
  faPlay,
  faUserPlus,
  faVideo,
  faPhoneSlash,
  faPhoneVolume,
  faAddressBook,
  faTrashAlt,
  faGlobe,
  faAngleUp,
  faAngleDown,
  faSyncAlt,
  faSave,
  faKeyboard,
  faUndoAlt,
  faFilePdf,
  faNetworkWired,
  faUserFriends,
  faIcons,
  faStepForward,
  faStepBackward,
  faPlayCircle,
  faRandom,
  faUserMinus,
  faUserEdit,
  faHandMiddleFinger,
  faStopCircle,

  // eslint-disable-next-line import/first
} from '@fortawesome/free-solid-svg-icons';
// eslint-disable-next-line import/first
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// Vue.use(VueCountdownTimer);

library.add(
  faUserSecret,
  faUserMd,
  faUserGraduate,
  faUserCog,
  faBusinessTime,
  faHistory,
  faCaretRight,
  faCaretLeft,
  faStop,
  faTemperatureHigh,
  faChevronRight,
  faChevronLeft,
  faTint,
  faTachometerAlt,
  faBacterium,
  faLongArrowAltDown,
  faCheck,
  faChevronUp,
  faChevronDown,
  faMusic,
  faEllipsisH,
  faStopwatch,
  faAirFreshener,
  faFileAlt,
  faTools,
  faPowerOff,
  faLightbulb,
  faLaptopMedical,
  faSun,
  faLungs,
  faTrafficLight,
  faBell,
  faPhone,
  faCalendarAlt,
  faUserCheck,
  faVolumeMute,
  faReply,
  faBackspace,
  faPlay,
  faUserPlus,
  faVideo,
  faPhoneSlash,
  faPhoneVolume,
  faAddressBook,
  faTrashAlt,
  faGlobe,
  faAngleUp,
  faAngleDown,
  faSyncAlt,
  faSave,
  faKeyboard,
  faUndoAlt,
  faFilePdf,
  faNetworkWired,
  faUserFriends,
  faPowerOff,
  faIcons,
  faStepForward,
  faStepBackward,
  faPlayCircle,
  faRandom,
  faReply,
  faUserMinus,
  faUserEdit,
  faHandMiddleFinger,
  faStopCircle,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.use(Vuex);

Vue.use(Vuesax, {});

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>',
}).$mount('#app');
