<template>
  <div id="timerPanel">
    <font-awesome-icon id="timerIcon" style="color: #007ea7" icon="stopwatch" size="2x" />

    <vs-row align="center" justify="space-between">
      <div style="width:23vw; color: #04a1f9">
        <div style="font-size: 45px; font-weight: bold; padding-left: 4vw;">
          00:00:00
        </div>
      </div>
      <div style="width: 9vw; height: 15vh; margin-right: 0.4vw">
        <vs-row>
          <div style="width: 4vw; margin-right: 0.5vw">
            <div>
              <vs-button
                v-on:click="showTimerModalBtn"
                square
                style="height:7vh; width: 4vw; background-color: #003357"
              >
                <font-awesome-icon style="color: #007ea7" icon="caret-right" size="2x" />
              </vs-button>
            </div>
            <div>
              <vs-button
                v-on:click="showTimerModalBtn"
                square
                style="height:7vh; width: 4vw; background-color: #003357"
              >
                <font-awesome-icon style="color: #007ea7" icon="caret-left" size="2x" />
              </vs-button>
            </div>
          </div>
          <div style="width: 4vw; ">
            <vs-button square style="height: 15vh; background-color: #003357">
              <font-awesome-icon style="color: #007ea7" icon="stop" size="2x" />
            </vs-button>
          </div>
        </vs-row>
      </div>
    </vs-row>
    <timer-panel :isTimerShow="isTimerShow" :setShowTimerModal="setShowTimerModal"></timer-panel>
  </div>
</template>
<script>
import TimerPanel from '../TimerPanel/TimerConPanel.vue';
export default {
  data() {
    return {
      isTimerShow: false,
    };
  },
  components: {
    TimerPanel,
  },
  methods: {
    showTimerModalBtn() {
      this.isTimerShow = true;
    },
    setShowTimerModal(setting) {
      this.isTimerShow = setting;
    },
  },
};
</script>
<style>
#timerPanel {
  position: relative;
  width: 36vw;
  height: 17vh;
  background-color: #111111;
  border: solid #1b2024;
}
#timerIcon {
  position: absolute;
  top: 5px;
  left: 5px;
}
</style>
