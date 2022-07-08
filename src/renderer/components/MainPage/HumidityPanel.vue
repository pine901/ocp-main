<template>
  <div id="humidityPanel">
    <font-awesome-icon id="humirIcon" style="color: #007ea7; font-size: 3vw" icon="tint" />

    <p style="font-size: 3vw; margin-top: 2vh; margin-bottom: 2.5vh;font-weight: bold; color: red">
      2
    </p>
    <div>
      <vs-row align="center" justify="space-around">
        <span>
          <font-awesome-icon
            v-on:click="minusHumidity"
            style="color: #007ea7; font-size: 4vw"
            icon="chevron-left"
          />
        </span>
        <span style="font-size: 4vw;font-weight: bold">
          {{ humidity }}
        </span>
        <span>
          <font-awesome-icon
            v-on:click="addHumidity"
            style="color: #007ea7; font-size: 4vw"
            icon="chevron-right"
          />
        </span>
      </vs-row>
    </div>
    <div id="humirTitle">Humirdity</div>
  </div>
</template>
<script>
import moment from 'moment';
import store from '../../store';
export default {
  data() {
    return {
      humidity: 43,
    };
  },
  methods: {
    addHumidity() {
      if (this.humidity === 100) {
        this.humidity = 100;
      } else {
        this.humidity = this.humidity + 1;
        const date = moment(new Date()).format('YYYY-MM-DD hh:mm:ss');
        store.dispatch('registerEvent', { date, val: 'Humidity is changed' });
      }
    },
    minusHumidity() {
      if (this.humidity === 0) {
        this.humidity = 0;
      } else {
        const date = moment(new Date()).format('YYYY-MM-DD hh:mm:ss');
        store.dispatch('registerEvent', { date, val: 'Humidity is changed' });
        this.humidity = this.humidity - 1;
      }
    },
  },
};
</script>
<style>
#humidityPanel {
  /* background-color: #111111; */
  position: 'relative';
  width: 24vw;
  height: 27vh;
  border: solid #1b2024;
  background-color: #01172c;
}
#humirTitle {
  position: absolute;
  bottom: 1vh;
  right: 39vw;
}
#humirIcon {
  position: absolute;
  top: 1vh;
  left: 27vw;
}
</style>
