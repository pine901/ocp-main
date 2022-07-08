<template>
  <div>
    <vs-row>
      <div class="eventLogs">
        <vs-row>
          <ul style="color:#00aaee">
            <li v-for="(item, index) in eventLogs" :key="index">{{ item.date }}>{{ item.val }}</li>
            <!-- <li>2021-4-30 14:30:15 > VAV setting changed</li>
            <li>2021-4-30 14:30:15 > VAV setting changed</li>
            <li>2021-4-30 14:30:15 > VAV setting changed</li>
            <li>2021-4-30 14:30:15 > VAV setting changed</li>
            <li>2021-4-30 14:30:15 > VAV setting changed</li>
            <li>2021-4-30 14:30:15 > VAV setting changed</li>
            <li>2021-4-30 14:30:15 > VAV setting changed</li>
            <li>2021-4-30 14:30:15 > VAV setting changed</li>
            <li>2021-4-30 14:30:15 > VAV setting changed</li>
            <li>2021-4-30 14:30:15 > VAV setting changed</li>
            <li>2021-4-30 14:30:15 > VAV setting changed</li>
            <li>2021-4-30 14:30:15 > VAV setting changed</li>
            <li>2021-4-30 14:30:15 > VAV setting changed</li>
            <li>2021-4-30 14:30:15 > VAV setting changed</li>
            <li>2021-4-30 14:30:15 > VAV setting changed</li>
            <li>2021-4-30 14:30:15 > VAV setting changed</li> -->
          </ul>
          <div></div>
        </vs-row>
      </div>
      <div class="sysStatus">
        <div style="margin-right: 18vw; font-size: 2vw; color:#00b2f9">
          Event log detail
        </div>
      </div>
    </vs-row>
    <div></div>
  </div>
</template>
<script>
import store from '../../store';
export default {
  data() {
    return {
      // computedLogs: this.eventLogs.reverse(),
    };
  },
  methods: {},
  computed: {
    eventLogs() {
      return store.state.Mainpage.eventLog.reverse();
    },
  },
};
</script>
<style>
.eventLogs {
  width: 50vw;
  height: 38vh;
  background-color: #001111;
  border-top: solid #2988ad 0.3vh;
  overflow-y: scroll;
  text-align: left;
  font-size: 1.3vw;
}

.sysStatus {
  width: 34vw;
  height: 38vh;
  background-color: #001111;
  border-top: solid #2988ad 0.3vh;
}
</style>
