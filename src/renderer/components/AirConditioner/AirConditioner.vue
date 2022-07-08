<template>
  <vs-dialog not-close blur prevent-close square v-model="isShow">
    <template>
      <vs-row vs-type="flex">
        <vs-col w="11">
          <div class="airConPanel">
            <vs-row justify="space-between">
              <vs-button
                v-on:click="airConPanelBtnClick(item)"
                class="airConButton"
                v-for="item in airPanelBtn"
                square
                :key="item.key"
                :style="
                  item.status
                    ? {
                        backgroundColor: '#00a8e7',
                        marginLeft: '0px',
                        marginRight: '0px',
                      }
                    : {
                        backgroundColor: '#003357',
                        marginLeft: '0px',
                        MarginRight: '0px',
                      }
                "
              >
                <vs-row align="center" justify="space-around" direction="column">
                  <div
                    :style="
                      !item.status
                        ? {
                            color: '#007ea7',
                            fontSize: '1.3vw',
                            textAlign: 'center',
                            marginTop: '2vh',
                            height: '10vh',
                          }
                        : {
                            color: '#ffffff',
                            fontSize: '1.3vw',
                            textAlign: 'center',
                            marginTop: '2vh',
                            height: '10vh',
                          }
                    "
                  >
                    {{ item.title }}
                  </div>

                  <div
                    :style="
                      !item.status
                        ? {
                            bottom: '2vh',
                            textAlign: 'center',
                            borderTop: 'solid #1b2024',
                            padding: '2vh',
                            color: '#007ea7',
                          }
                        : {
                            bottom: '2vh',
                            textAlign: 'center',
                            borderTop: 'solid #ffffff',
                            padding: '2vh',
                            color: '#ffffff',
                          }
                    "
                  >
                    {{ item.status ? 'ON' : 'OFF' }}
                  </div>
                </vs-row>
              </vs-button>
            </vs-row>
          </div>
        </vs-col>
        <vs-col w="1"> </vs-col>
      </vs-row>
      <div class="controller">
        <vs-row justify="space-around">
          <span>
            <font-awesome-icon
              v-on:click="minusVav"
              style="color: #007ea7; font-size: 4vw"
              icon="chevron-left"
            />
          </span>
          <span style="font-size: 4vw;font-weight: bold"> {{ vav }}% </span>
          <span>
            <font-awesome-icon
              v-on:click="addVav"
              style="color: #007ea7; font-size: 4vw"
              icon="chevron-right"
            />
          </span>
        </vs-row>
      </div>
      <div class="airPanelTitle">
        VAV
      </div>
      <div class="airPanClose" v-on:click="closeAir">
        <font-awesome-icon style="color: #007ea7; font-size: 3vw" icon="reply" />
        <div style="font-size: 1vw">back</div>
      </div>
      <div class="airTitle">
        Air Conditioning Control Panel
      </div>
    </template>
  </vs-dialog>
</template>
<script>
import moment from 'moment';
import store from '../../store';
// import store from '../../store';
const today = new Date();
export default {
  name: 'aircon-panel',
  data() {
    return {
      airPanelBtn: [
        { key: '1', title: 'SHUT OFF', status: false },
        { key: '2', title: 'ANESTETIC GAS EVACUATION', status: false },
        { key: '3', title: 'IN PROGRESS', status: true },
        { key: '4', title: 'HEATER', status: false },
      ],
      vav: 40,
    };
  },
  computed: {},

  methods: {
    airConPanelBtnClick(item) {
      const date = moment(today).format('YYYY-MM-DD hh:mm:ss');
      item.status = !item.status;
      store.dispatch('registerEvent', { date, val: `${item.title} is changed` });
    },
    addVav() {
      const date = moment(today).format('YYYY-MM-DD hh:mm:ss');
      if (this.vav === 100) {
        this.vav = 100;
      } else {
        store.dispatch('registerEvent', { date, val: 'VAV is increased' });
        this.vav = this.vav + 1;
      }
    },
    minusVav() {
      const date = moment(today).format('YYYY-MM-DD hh:mm:ss');
      if (this.vav === 0) {
        this.vav = 0;
      } else {
        this.vav = this.vav - 1;
        store.dispatch('registerEvent', { date, val: 'VAV is decreased' });
      }
    },
    closeAir() {
      this.setShowAir(false);
    },
  },

  props: ['isShow', 'setShowAir'],
  //   computed: {
  //     ...mapState({
  //       show: 'modalShow',
  //     }),
  //   },
};
</script>
<style>
/* .vs-dialog {
  margin-bottom: 1vh !important;
  margin-right: 0.5vw !important;
  background-color: #01172c !important;
  width: 88vw !important;
  height: 58.7vh !important;
  max-width: 100vw !important;
  border: solid #01172c !important;
}
.vs-dialog-content {
  padding-bottom: 0px !important;
} */
@import '../../assets/css/custom_dialog.css';
.airConButton {
  height: 20vh;
  width: 12vw;
  position: relative;
}
.controller {
  position: relative;
  background-color: #003357;
  color: #007ea7;
  margin-top: 8vh;
  width: 34vw;
  height: 19;
  padding-top: 7vh;
  padding-bottom: 7vh;
}
.airPanelTitle {
  position: absolute;
  bottom: 3vh;
  right: 54vw;
  color: #007ea7;
  font-size: 1.3vw;
}
.airPanClose {
  position: absolute;
  height: 9vh;
  width: 6vw;
  background-color: #003357;
  color: #007ea7;
  bottom: 43vh;
  right: 0.6vw;
  padding-top: 2vh;
}
.airTitle {
  position: absolute;
  bottom: 1vh;
  right: 1vw;
  font-size: 1vw;
  color: #007ea7;
}
</style>
