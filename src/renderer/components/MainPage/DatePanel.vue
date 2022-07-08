<template>
  <div id="datePanel">
    <font-awesome-icon id="dateIcon" style="color: #007ea7; font-size: 3vw" icon="calendar-alt" />

    <vs-row align="center" justify="space-between">
      <div style="width:40vw; color: #04a1f9">
        <div style="font-size:5.5vw; font-weight: bold; ">
          {{ time }}
        </div>
        <div style="margin-bottom: 0.5vh; font-size: 1.8vw; font-weight: bold">
          {{ date }}
        </div>
      </div>
      <div>
        <vs-button
          @click="showDatePanel"
          square
          style="height: 15vh; width: 8vw; background-color: #003357; color: #007ea7;"
        >
          <font-awesome-icon style="color: #007ea7; font-size: 3vw" icon="history" />
        </vs-button>
      </div>
    </vs-row>
    <date-time-panel
      :isDateShow="isDateConShow"
      :setShowDateModal="setShowDateModal"
    ></date-time-panel>
  </div>
</template>
<script>
import moment from 'moment';
import DateTimePanel from '../DateTimePanel/DateTimePanel.vue';
export default {
  components: { DateTimePanel },
  name: 'template-panel',
  data() {
    return {
      date: '',
      time: '',
      isDateConShow: false,
    };
  },
  created() {
    setInterval(this.getNow, 1000);
  },
  methods: {
    showDatePanel() {
      this.isDateConShow = true;
    },
    setShowDateModal(setting) {
      this.isDateConShow = setting;
    },
    getNow() {
      const today = new Date();
      //       const date = `${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}
      //  ${moment(today).format('dddd')}`;
      const date = moment(today).format('DD.MM.YYYY dddd');

      const time = moment(today).format('hh:mm:ss');
      this.date = date;
      this.time = time;
      // const dateTime = `${date} ${time}`;
      // this.timestamp = dateTime;
    },
  },
};
</script>
<style>
#datePanel {
  position: relative;
  background-color: #111111;
  border: solid #1b2024;
  height: 17vh;
  width: 49.8vw;
}
#dateIcon {
  position: absolute;
  top: 1vh;
  left: 0.5vw;
}
</style>
