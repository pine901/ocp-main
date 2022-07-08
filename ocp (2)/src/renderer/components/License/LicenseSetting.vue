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
            <div class="key"></div>
            <div class="code"></div>
            <div style="margin-top: 2vh">
              <vs-row justify="space-around">
                <vs-button
                  square
                  v-for="(item, index) in ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']"
                  :key="index"
                  style="height: 10vh; width: 5.8vw; background-color: #003355; color: #0085a2; font-size: 1.5vw; margin-left: 1vw; margin-right: 1vw"
                >
                  {{ item }}
                </vs-button>
              </vs-row>
            </div>
          </vs-row>
        </div>
      </div>
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
  // methods: {
  //   mainPage() {
  //     this.$router.push('mainPage');
  //   },

  // components: {
  //   "vs-button": VsButton,
  // },
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
</style>
