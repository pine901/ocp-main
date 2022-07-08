<template>
  <div class="tempePanel">
    <font-awesome-icon
      id="tempeIcon"
      style="color: #007ea7; font-size: 3vw"
      icon="temperature-high"
    />

    <p style="font-size: 3vw; margin-top: 2vh; margin-bottom: 2vh;font-weight: bold; color: red">
      1
    </p>
    <div>
      <vs-row align="center" justify="space-around">
        <span>
          <font-awesome-icon
            v-on:click="minusTemperature"
            style="color: #007ea7; font-size: 4vw"
            icon="chevron-left"
          />
        </span>
        <span style="font-size: 4vw;font-weight: bold">
          {{ temperature }}
        </span>
        <span>
          <font-awesome-icon
            v-on:click="addTemperature"
            style="color: #007ea7; font-size: 4vw"
            icon="chevron-right"
          />
        </span>
      </vs-row>
    </div>
    <div id="temperTitle">Temperature</div>
  </div>
</template>
<script>
import moment from 'moment';
import store from '../../store';
export default {
  data() {
    return {
      temperature: 9,
    };
  },
  methods: {
    addTemperature() {
      if (this.temperature === 100) {
        this.temperature = 100;
      } else {
        this.temperature = this.temperature + 1;
        const date = moment(new Date()).format('YYYY-MM-DD hh:mm:ss');
        store.dispatch('registerEvent', { date, val: 'Temmperature is sleeped' });
      }
    },
    minusTemperature() {
      if (this.temperature === 0) {
        this.temperature = 0;
      } else {
        const date = moment(new Date()).format('YYYY-MM-DD hh:mm:ss');
        store.dispatch('registerEvent', { date, val: 'Temmperature is sleeped' });
        this.temperature = this.temperature - 1;
      }
    },
  },
};
</script>
<style>
/* #temperaturePanel {
  /* background-color: #111111; */
/* border: solid #1b2024; */

#temperTitle {
  position: absolute;
  bottom: 1vh;
  right: 65vw;
}
#tempeIcon {
  position: absolute;
  top: 1vh;
  left: 1vw;
}
.tempePanel {
  position: 'relative';
  width: 24vw;
  height: 27vh;
  border: solid #1b2024;
  background-color: #01172c;
}
</style>
