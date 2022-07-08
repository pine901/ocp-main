<template>
  <div>
    <div style="margin-top: 5vh">
      <vs-row justify="center">
        <vs-button style="width: 18vw; height: 7vh; background-color: #29353D; font-size: 1.5vw"
          >Get Currnet Setting</vs-button
        >
      </vs-row>
    </div>
    <div style="margin-top: 6vh">
      <div>
        <vs-row justify="space-between">
          <span style="font-size:1.5vw">Transmit gain</span>
          <!-- <div style="margin-left: 2vw; margin-right: 2vw"> -->
          <vue-slider
            style="width: 80vw"
            ref="slider"
            aria-label="hello"
            label="hello"
            label-placement="left"
            v-model="sl1"
            :min="0"
            :max="15"
            :interval="1"
            :marks="true"
          ></vue-slider>
          <input type="text" v-bind:value="'A' + sl1" style="width: 3vw" />
        </vs-row>
      </div>
      <div style="margin-top: 6vh">
        <vs-row justify="space-between">
          <span style="font-size:1.5vw">Recieve gain</span>
          <div style="margin-left: 2vw; margin-right: 2vw">
            <vue-slider
              v-model="sl2"
              :min="0"
              :max="15"
              :interval="1"
              style="width: 80vw"
              :marks="true"
            ></vue-slider>
          </div>
          <input type="text" v-bind:value="'B' + sl2" style="width: 3vw" />
        </vs-row>
      </div>
      <!-- </div> -->
      <div style="margin-top: 6vh">
        <vs-row justify="space-between">
          <span style="font-size:1.5vw">OTMP level</span>
          <div style="margin-left: 2vw; margin-right: 2vw">
            <vue-slider
              v-model="sl3"
              :min="0"
              :max="12"
              :interval="1"
              style="width: 80vw"
              :marks="true"
            ></vue-slider>
          </div>
          <input type="text" v-bind:value="'2' + sl3" style="width: 3vw" />
        </vs-row>
      </div>
    </div>
    <div style="margin-top: 6vh">
      <vs-row justify="space-around">
        <vs-button style="width: 20vw; height: 7vh; font-size: 1.5vw; background-color: #29353D"
          >Get Default Settings</vs-button
        >
        <vs-button style="width: 20vw; height: 7vh; font-size: 1.5vw; background-color: #29353D"
          >Save Settings</vs-button
        >
      </vs-row>
    </div>
  </div>
</template>
<script>
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';
// import 'vuetify/dist/vuetify.min.css';

export default {
  components: {
    VueSlider,
  },
  data() {
    return {
      sl1: 7,
      sl2: 7,
      sl3: 2,
    };
  },
};
</script>
<style scoped>
/* @import '~vuetify/dist/vuetify.min.css'; */
</style>
