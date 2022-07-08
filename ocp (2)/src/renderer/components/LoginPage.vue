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

    <div style="padding-top: 2vh; padding-right: 9vw; padding-left: 9vw; height:65vh">
      <vs-row justify="space-around">
        <vs-col w="2">
          <!-- <router-link> -->
          <div style="text-align: center">
            <vs-button
              to="/mainPage"
              style="height: 25vh; width: 12vw; background-color: #003357"
              square
              icon
            >
              <vs-col>
                <font-awesome-icon style="color: #007ea7; font-size: 6vw" icon="user-check" />
                <div style="text-align: center; padding-top: 4vh;font-size: 1.4vw; color: #007ea7">
                  Default profile
                </div>
              </vs-col>
              <!-- <font-awesome-icon :icon="['fas', 'user-md']" /> -->
            </vs-button>
          </div>
          <!-- </router-link> -->
        </vs-col>
        <vs-col w="2">
          <div style="text-align: center">
            <vs-button
              style="height: 25vh; width: 12vw; background-color: #003357"
              square
              size="xl"
              icon
            >
              <vs-col>
                <font-awesome-icon style="color: #007ea7; font-size: 6vw" icon="user-md" />
                <div style="text-align: center; padding-top: 4vh;font-size: 1.4vw; color: #007ea7">
                  Profile-1
                </div>
              </vs-col>
              <!-- <font-awesome-icon :icon="['fas', 'user-md']" /> -->
            </vs-button>
          </div>
        </vs-col>
        <vs-col w="2">
          <div style="text-align: center">
            <vs-button
              style="height: 25vh; width: 12vw; background-color: #003357"
              square
              size="xl"
              icon
            >
              <vs-col>
                <font-awesome-icon style="color: #007ea7; font-size: 6vw" icon="user-md" />
                <div style="text-align: center; padding-top: 4vh;font-size: 1.4vw; color: #007ea7">
                  Profile-2
                </div>
              </vs-col>
              <!-- <font-awesome-icon :icon="['fas', 'user-md']" /> -->
            </vs-button>
          </div>
        </vs-col>
      </vs-row>
      <div style="margin-left: 7vw; margin-right: 8vw; margin-top: 1vh">
        <div style="border-bottom: solid #007ea7; opacity: 0.5"></div>
      </div>

      <div style="text-align: center; padding-top:1vh; padding-bottom: 1vh; font-size: 1.5vw">
        Select profile to login...
      </div>
      <div style="margin-left: 7vw; margin-right: 8vw; margin-bottom: 1vh">
        <div style="border-bottom: solid #007ea7; opacity: 0.5"></div>
      </div>

      <vs-row justify="space-around">
        <vs-col w="2">
          <div style="text-align: center">
            <vs-button
              style="height: 25vh; width: 12vw; background-color: #003357"
              square
              size="xl"
              icon
            >
              <vs-col>
                <font-awesome-icon style="color: #007ea7; font-size: 6vw" icon="user-md" />
                <div style="text-align: center; padding-top: 4vh;font-size: 1.4vw; color: #007ea7">
                  Profile-3
                </div>
              </vs-col>
              <!-- <font-awesome-icon :icon="['fas', 'user-md']" /> -->
            </vs-button>
          </div>
        </vs-col>
        <vs-col w="2">
          <div style="text-align: center">
            <vs-button
              style="height: 25vh; width: 12vw; background-color: #003357"
              square
              size="xl"
              icon
            >
              <vs-col>
                <font-awesome-icon style="color: #007ea7; font-size: 6vw" icon="user-graduate" />
                <div style="text-align: center; padding-top: 4vh;font-size: 1.4vw; color: #007ea7">
                  Thechnical Profile
                </div>
              </vs-col>
              <!-- <font-awesome-icon :icon="['fas', 'user-md']" /> -->
            </vs-button>
          </div>
        </vs-col>
        <vs-col w="2">
          <div style="text-align: center">
            <vs-button
              style="height: 25vh; width: 12vw; background-color: #003357"
              square
              size="xl"
              icon
              @click="licenseModal"
            >
              <vs-col>
                <font-awesome-icon style="color: #007ea7; font-size: 6vw" icon="user-cog" />
                <div style="text-align: center; padding-top: 4vh;font-size: 1.4vw; color: #007ea7">
                  Cleaning Profile
                </div>
              </vs-col>
              <!-- <font-awesome-icon :icon="['fas', 'user-md']" /> -->
            </vs-button>
          </div>
        </vs-col>
      </vs-row>
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
  methods: {
    licenseModal() {
      this.$router.push('/license');
    },
  },
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
</style>
