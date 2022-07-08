<template>
  <div style="position: relative">
    <!-- <p>Hello MainPage</p> -->
    <!-- <vs-button to="/">back</vs-button> -->
    <div>
      <vs-row vs-type="flex" direction="row" justify="space-between">
        <vs-button
          square
          v-on:click="toggle(item)"
          v-for="item in mainBtn.mainBtn"
          :key="item.id"
          :style="
            item.isActived
              ? {
                  backgroundColor: '#00a8e7',
                  width: '10vw',
                  height: '18vh',
                  margin: '0px',
                }
              : {
                  backgroundColor: '#003357',
                  width: '10vw',
                  height: '18vh',
                  margin: '0px',
                }
          "
        >
          <vs-col>
            <font-awesome-icon
              :color="item.isActived ? '#ffffff' : '#007ea7'"
              :icon="item.icon"
              style="font-size: 3vw"
            />
            <div
              :style="
                item.isActived
                  ? { textAlign: 'center', paddingTop: '2vh', color: '#ffffff', fontSize: '1.5vw' }
                  : { textAlign: 'center', paddingTop: '2vh', color: '#007ea7', fontSize: '1.5vw' }
              "
            >
              {{
                language === 'English'
                  ? item.title
                  : language === 'Turkish'
                  ? item.tuTitle
                  : item.ruTitle
              }}
            </div>
          </vs-col>
        </vs-button>
      </vs-row>
    </div>
    <div>
      <vs-row vs-type="flex" align="flex-end" justify="space-between">
        <div style=" position: absolute; top: 1vh; margin-top: 0px">
          <vs-row vs-type="flex" align="flex-start" justify="space-between" direction="column">
            <vs-button
              square
              v-on:click="toggle(item)"
              v-for="item in buttonRow"
              :key="item.id"
              :style="
                !item.isPushed && item.isActived
                  ? {
                      backgroundColor: '#00a8e7',
                      width: '10vw',
                      height: '18vh',
                      marginLeft: '0px',
                      marginRight: '0px',
                    }
                  : {
                      backgroundColor: '#003357',
                      width: '10vw',
                      height: '18vh',
                      marginLeft: '0px',
                      MarginRight: '0px',
                    }
              "
            >
              <vs-col>
                <font-awesome-icon
                  :color="!item.isPushed && item.isActived ? '#ffffff' : '#007ea7'"
                  :icon="item.icon"
                  style="font-size: 3vw"
                />
                <div
                  :style="
                    !item.isPushed && item.isActived
                      ? {
                          textAlign: 'center',
                          paddingTop: '2vh',
                          color: '#ffffff',
                          fontSize: '1.5vw',
                        }
                      : {
                          textAlign: 'center',
                          paddingTop: '2vh',
                          color: '#007ea7',
                          fontSize: '1.5vw',
                        }
                  "
                >
                  {{ item.title }}
                </div>
              </vs-col>
            </vs-button>
          </vs-row>
        </div>
        <div style="width: 88vw; position: absolute; top: 1.6vh; left:11vw">
          <vs-row vs-type="flex" justify="space-between">
            <div>
              <date-panel></date-panel>
            </div>
            <div>
              <timer-panel></timer-panel>
            </div>
          </vs-row>
          <div style="margin-top: 1.4vh">
            <vs-row justify="space-between">
              <template>
                <temperature-panel></temperature-panel>
              </template>
              <template>
                <humidity-panel></humidity-panel>
              </template>
              <template>
                <gas-panel></gas-panel>
              </template>
            </vs-row>
          </div>
          <div style="margin-top: 1.4vh">
            <vs-row vs-type="flex" justify="space-between">
              <div>
                <pressure-panel></pressure-panel>
              </div>
              <div>
                <pollution-panel></pollution-panel>
              </div>
              <div>
                <radion-control-panel></radion-control-panel>
              </div>
            </vs-row>
          </div>
        </div>
      </vs-row>
    </div>
    <air-conditioner :isShow="airConModal" :setShowAir="setShowAir"></air-conditioner>
    <settings :isShowSettings="settingModal" :setShowSetting="setShowSetting"></settings>
    <active-profile
      :isActiveProfileShow="activeModal"
      :setShowActive="setShowActive"
    ></active-profile>
    <logout :isLogOut="showLogModal" :setShowLogout="setShowLogout"></logout>
  </div>
</template>
<script>
import moment from 'moment';
import CustomButton from '../../common/CustomButton.vue';
import store from '../../store';
import ActiveProfile from '../ActiveProfile/ActiveProfile.vue';
import AirConditioner from '../AirConditioner/AirConditioner.vue';
import Logout from '../Logout/Logout.vue';
import Settings from '../Settings/Settings.vue';
import DatePanel from './DatePanel.vue';
import GasPanel from './GasPanel.vue';
import HumidityPanel from './HumidityPanel.vue';
import PollutionPanel from './PollutionPanel.vue';
import PressurePanel from './PressurePanel.vue';
import RadionControlPanel from './RadionControlPanel.vue';
import TemperaturePanel from './TemperaturePanel.vue';
import TimerPanel from './TimerPanel.vue';
import mainBtn from '../../common/titleData';
export default {
  name: 'main-page',
  data() {
    return {
      isActived: false,
      buttonRow: [
        {
          title: 'Air conditioning',
          icon: 'air-freshener',
          isActived: false,
          isPushed: true,
          id: 'air',
        },
        {
          title: 'Status Info',
          icon: 'file-alt',
          isActived: false,
          isPushed: true,
          id: 'info',
        },
        {
          title: 'Settings',
          icon: 'tools',
          isActived: false,
          isPushed: true,

          id: 'settings',
        },
        {
          title: 'Logout',
          icon: 'power-off',
          isActived: true,
          isPushed: true,

          id: 'logout',
        },
      ],
      // buttonCol: [
      //   {
      //     title: 'Lamp1',
      //     tuTitle: 'Lamba1',
      //     ruTitle: 'лампа1',
      //     icon: 'lightbulb',
      //     isActived: false,
      //     id: 'lam1',
      //   },
      //   {
      //     title: 'Lamp2',
      //     tuTitle: 'Lamba2',
      //     ruTitle: 'лампа2',

      //     icon: 'lightbulb',
      //     isActived: true,
      //     id: 'lam2',
      //   },
      //   {
      //     title: 'Lamp3',
      //     tuTitle: 'Lamba3',
      //     ruTitle: 'лампа3',

      //     icon: 'lightbulb',
      //     isActived: false,
      //     id: 'lam3',
      //   },
      //   {
      //     title: 'Op.Lamp',
      //     tuTitle: 'Op.Lamba',
      //     ruTitle: 'Оп.Лампа',
      //     icon: 'laptop-medical',
      //     isActived: true,
      //     id: 'oplam',
      //   },
      //   {
      //     title: 'UV',
      //     tuTitle: 'UV',
      //     ruTitle: 'ЮВ',
      //     icon: 'sun',
      //     isActived: false,
      //     id: 'uv',
      //   },
      //   {
      //     title: 'Negatoscope',
      //     tuTitle: 'Negatoskop',
      //     ruTitle: 'Негатоскоп',
      //     icon: 'lungs',
      //     isActived: false,
      //     id: 'negato',
      //   },
      //   {
      //     title: 'Door Lamp',
      //     ruTitle: 'Дверная лампа',
      //     tuTitle: 'Door Lamba',
      //     icon: 'traffic-light',
      //     isActived: false,
      //     id: 'doorlam',
      //   },
      //   {
      //     title: 'Alarm',
      //     tuTitle: 'Alarm',
      //     ruTitle: 'Тревога',
      //     icon: 'bell',
      //     isActived: false,
      //     id: 'alarm',
      //   },
      //   {
      //     title: 'Telephone',
      //     ruTitle: 'Tелефон',
      //     tuTitle: 'Telefon',
      //     icon: 'phone',
      //     isActived: false,
      //     isPushed: true,

      //     id: 'phone',
      //   },
      // ],
      mainBtn,
      settingModal: false,
      airConModal: false,
      showLogModal: false,
      activeModal: false,
    };
  },
  methods: {
    toggle(item) {
      const date = moment(new Date()).format('YYYY-MM-DD hh:mm:ss');
      // store.dispatch('registerEvent', { date, val: `${item.title} is selected` });

      item.isActived = !item.isActived;
      switch (item.id) {
        case 'logout':
          this.showLogModal = true;

          break;
        case 'air':
          console.log('air====', item.id);
          this.airConModal = true;
          break;
        case 'lam1':
          // const date = moment(today).format('YYYY-MM-DD hh:mm:ss');

          if (item.isActived) {
            store.dispatch('registerEvent', { date, val: `${item.title} is ON` });
            console.log('Lamp1 is on');
          } else {
            store.dispatch('registerEvent', { date, val: `${item.title} is OFF` });
            console.log('Lamp1 is off');
          }
          break;
        case 'phone':
          console.log('phone===');
          this.$router.push('/telephone');
          break;
        case 'settings':
          this.settingModal = true;
          break;
        case 'lam2':
          if (item.isActived) {
            store.dispatch('registerEvent', { date, val: `${item.title} is ON` });
            console.log('Lamp2 is on');
          } else {
            console.log('Lamp2 is off');
            store.dispatch('registerEvent', { date, val: `${item.title} is OFF` });
          }

          break;
        case 'lam3':
          if (item.isActived) {
            store.dispatch('registerEvent', { date, val: `${item.title} is ON` });
            console.log('Lamp3 is on');
          } else {
            store.dispatch('registerEvent', { date, val: `${item.title} is OFF` });
            console.log('Lamp3 is off');
          }

          break;
        case 'info':
          this.activeModal = true;
          break;
        case 'doorlam':
          if (item.isActived) {
            store.dispatch('registerEvent', { date, val: `${item.title} is ON` });
            console.log('Door Lamp is on');
          } else {
            store.dispatch('registerEvent', { date, val: `${item.title} is OFF` });
            console.log('Door Lamp is off');
          }

          break;
        case 'oplam':
          if (item.isActived) {
            store.dispatch('registerEvent', { date, val: `${item.title} is ON` });
            console.log('Op.Lamp is on');
          } else {
            store.dispatch('registerEvent', { date, val: `${item.title} is OFF` });
            console.log('Op.Lamp is off');
          }

          break;
        case 'negato':
          if (item.isActived) {
            store.dispatch('registerEvent', { date, val: `${item.title} is ON` });
            console.log('Negatoscope is on');
          } else {
            console.log('Negatoscope is off');
            store.dispatch('registerEvent', { date, val: `${item.title} is OFF` });
          }

          break;
        case 'uv':
          if (item.isActived) {
            console.log('UV is on');
            store.dispatch('registerEvent', { date, val: `${item.title} is ON` });
          } else {
            store.dispatch('registerEvent', { date, val: `${item.title} is OFF` });
            console.log('UV is off');
          }
          break;
        case 'alarm':
          if (item.isActived) {
            store.dispatch('registerEvent', { date, val: `${item.title} is ON` });
            console.log('Alarm is on');
          } else {
            store.dispatch('registerEvent', { date, val: `${item.title} is OFF` });
            console.log('Alarm is off');
          }
          break;

        default:
          break;
      }
    },
    setShowSetting(setting) {
      this.settingModal = setting;
    },
    setShowAir(setting) {
      this.airConModal = setting;
    },
    setShowActive(setting) {
      this.activeModal = setting;
    },
    setShowLogout(setting) {
      this.showLogModal = setting;
    },
  },

  components: {
    CustomButton,
    DatePanel,
    TimerPanel,
    TemperaturePanel,
    GasPanel,
    PressurePanel,
    RadionControlPanel,
    HumidityPanel,
    PollutionPanel,
    AirConditioner,
    Settings,
    ActiveProfile,
    Logout,
  },
  computed: {
    language() {
      return store.state.Mainpage.lang;
    },
  },
};
</script>
<style></style>
