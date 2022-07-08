<template>
  <div>
    <div class="time">
      <p style="margin-bottom: 2vh">
        {{ todayTime }}
      </p>
    </div>
    <div class="date">
      <p style="margin-top: 2vh;margin-bottom: 2vh">
        {{ todayDate }}
      </p>
    </div>
    <div class="iconBack">
      <font-awesome-icon
        icon="hand-middle-finger"
        style="font-size: 8vw; color: #002430"
      ></font-awesome-icon>
    </div>
  </div>
</template>
<script>
import moment from 'moment';
export default {
  data() {
    return {
      todayTime: '',
      todayDate: '',
    };
  },
  methods: {
    getNow() {
      const today = new Date();
      const date = moment(today).format('DD. MM. YYYY dddd');

      const time = moment(today).format('hh:mm:ss');
      this.todayDate = date;
      this.todayTime = time;
    },
  },
  created() {
    setInterval(this.getNow, 1000);
  },
};
</script>
<style>
.time {
  font-size: 12vw;
  font-weight: 800;
  color: #02a6e7;
}
.date {
  font-size: 6vw;
  font-weight: 600;
  color: #02a6e7;
}
</style>
