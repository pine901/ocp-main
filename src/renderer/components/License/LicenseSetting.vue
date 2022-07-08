<template>
  <div id="app">
    <!-- <vs-button square :active="active == 0" @click="active = 0">
    Home
    </vs-button> -->
    <vs-row>
      <div style="height: 13vh;">
        <div
          style="font-size: 3.5vw; text-align: center; font-weight: bold; margin-top: 3vh; padding-left: 10vw"
        >
          OCP-21 OPERATING ROOM CONTROL PANEL
        </div>
      </div>
    </vs-row>
    <div style="margin-left: 4vw; margin-right: 4vw">
      <div style="border-bottom: solid #007ea7; opacity: 0.5"></div>
    </div>
    <div class="licenseContent">
      <div class="licenseTitle">
        <p style="font-size: 1.5vw; font-weight: bold; margin-bottom: 1vh">
          Please Contact "Aktif Muhendicle" for Installation
        </p>
        <p style="font-size: 2vw; font-weight: bold; margin-top: 1vh">
          Phone: +90 (2016) 314 93 20
        </p>
        <div>
          <vs-row justify="space-around">
            <p>CUSTOMER KEY</p>
            <p>PRODUCT CODE</p>
          </vs-row>
          <vs-row justify="space-around">
            <div class="key" @click="selectPan('key')">
              <p style="margin-top: 2vh">ABCD-N34H-TY29-860H-2M56</p>
            </div>
            <div :class="status === 'code' ? ['trueCode'] : ['code']" @click="selectPan('code')">
              <p style="margin-top: 2vh">{{ license }}</p>
            </div>
            <div style="margin-top: 2vh">
              <vs-row justify="space-around">
                <vs-button
                  @click="add(item)"
                  square
                  v-for="(item, index) in ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']"
                  :key="index"
                  style="height: 10vh; width: 5.8vw; background-color: #003355; color: #0085a2; font-size: 1.5vw; margin-left: 1vw; margin-right: 1vw"
                >
                  {{ item }}
                </vs-button>
              </vs-row>
            </div>
            <div style="margin-top: 2vh">
              <vs-row justify="space-around">
                <vs-button
                  @click="clear"
                  square
                  style="height: 10vh; width: 14vw; background-color: #003355; color: #0085a2; font-size: 1.5vw; margin-right: 1vw"
                >
                  CLEAR
                </vs-button>
                <vs-button
                  square
                  @click="add(item)"
                  v-for="(item, index) in ['A', 'B', 'C', 'D', 'E', 'F']"
                  :key="index"
                  style="height: 10vh; width: 5.8vw; background-color: #003355; color: #0085a2; font-size: 1.5vw; margin-left: 1vw; margin-right: 1vw"
                >
                  {{ item }}
                </vs-button>
                <vs-button
                  @click="save"
                  square
                  style="height: 10vh; width: 14vw; background-color: #003355; color: #0085a2; font-size: 1.5vw; margin-left: 1vw"
                >
                  SAVE
                </vs-button>
              </vs-row>
            </div>
          </vs-row>
        </div>
      </div>
      <div class="liscenseBoTitle">Installation Control Panel</div>
    </div>

    <div style="margin-left: 4vw; margin-right: 4vw; margin-top: 0.5vh">
      <div style="border-bottom: solid #007ea7; opacity: 0.5"></div>
    </div>
    <div style="height: 15vh">
      <vs-row align="center" justify="space-between">
        <vs-col w="4">
          <img id="asset" src="~@/assets/asset.png" alt="asset" height="80vh" />
        </vs-col>
        <vs-col w="4">
          <div style="font-size: 1.5vw">
            This is Ivan's Project! This is made in Electron-vue. Deadline is 2021.8.20.
          </div></vs-col
        >
        <vs-col w="4">
          <img id="akitif" src="~@/assets/aktif.png" alt="akitif" height="80vh" />
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
// import { VsButton } from "vuesax";
export default {
  name: 'login-page',
  data() {
    return {
      status: 'key',
      key: '',
      license: '',
    };
  },
  methods: {
    selectPan(val) {
      this.status = val;
    },
    add(item) {
      if (this.status === 'key') {
        this.key = this.key + item;
      } else {
        this.license = this.license + item;
      }
    },
    save() {
      // if (this.license === '12345') {
      //   this.$router.push('/admin');
      // } else {
      //   alert('Wrong Password');
      // }
      console.log('save');
    },
    clear() {
      if (this.status === 'key') {
        this.key = '';
      } else {
        this.license = '';
      }
    },
  },
};
</script>

<style>
/* CSS */
#app {
  color: #007ea7;
}
.licenseContent {
  width: 90.5vw;
  margin-top: 2vh;
  margin-bottom: 2vh;
  height: 62vh;
  margin-left: 4vw;
  border: #172c38 solid 0.2vh;
  background-color: #001829;
}
.key {
  width: 30vw;
  height: 7vh;
  background-color: #00171f;
  border: #172c38 solid 0.2vh;
}
.code {
  width: 30vw;
  height: 7vh;
  background-color: #00171f;
  border: #172c38 solid 0.2vh;
}
.trueCode {
  width: 30vw;
  height: 7vh;
  background-color: #00171f;
  border: #66a2c5 solid 0.2vh;
}
.liscenseBoTitle {
  position: absolute;
  bottom: 21vh;
  right: 6vw;
  font-size: 1.5vw;
  color: #007ea7;
}
</style>
