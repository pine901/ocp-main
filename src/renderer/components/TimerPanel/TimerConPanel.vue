<template>
  <vs-dialog prevent-close square not-close v-model="isTimerShow">
    <vs-row vs-type="flex">
      <vs-col w="4">
        <font-awesome-icon
          style=" font-size: 20vw; height: 50vh; color: #001132 "
          icon="stopwatch"
        />
      </vs-col>
      <vs-col w="5">
        <div>
          <div class="timerShow">
            <div>{{ h }}:{{ m }}:{{ s }}</div>

            <!-- <div v-if="run">
              <vue-countdown-timer
                @start_callback="startCallBack"
                @end_callback="endCallBack"
                :start-time="startTime"
                :end-time="endTime"
                :interval="1000"
                :start-text="'00:00:00'"
                :end-text="'00:00:00'"
                :day-txt="null"
                :minutes-txt="':'"
                :seconds-txt="null"
              >
                <template slot="countdown" slot-scope="scope">
                  <span v-if="scope.props.days != '00'"
                    ><span>{{ scope.props.days }}</span
                    ><i>{{ scope.props.dayTxt }}</i></span
                  >
                  <span
                    ><span>{{ scope.props.hours }}</span
                    ><i>{{ scope.props.hourTxt }}</i></span
                  >
                  <span></span>
                  <span
                    ><span>{{ scope.props.minutes }}</span
                    ><i>{{ scope.props.minutesTxt }}</i></span
                  >
                  <span>{{ scope.props.seconds }}</span
                  ><i>{{ scope.props.secondsTxt }}</i>
                </template>
              </vue-countdown-timer>
            </div> -->
          </div>
          <div class="secondNameShow">
            <vs-row justify="space-around">
              <p class="timeName">HOUR</p>
              <p class="timeName">MINUTE</p>
              <p class="timeName">SECOND</p>
            </vs-row>
          </div>
          <div class="secondShow">
            <vs-row justify="space-between">
              <div :class="status === 'hour' ? ['timeTruePan'] : ['timePan']" @click="selectedHour">
                {{ h }}
              </div>
              <div :class="status === 'min' ? ['timeTruePan'] : ['timePan']" @click="selectedMin">
                {{ m }}
              </div>
              <div :class="status === 'sec' ? ['timeTruePan'] : ['timePan']" @click="selectedSec">
                {{ s }}
              </div>
              <vs-button
                square
                style="background-color: #003357; color: #04a1f9; width: 8.5vw; height: 8.5vh; margin-right:0px; margin-top: 0px"
              >
                <font-awesome-icon style=" font-size: 3vw; " icon="backspace" />
              </vs-button>
            </vs-row>
          </div>
          <div class="timeCon1">
            <vs-row justify="space-between">
              <div class="timeConPan">
                <vs-row justify="space-between">
                  <vs-button
                    @click="edit(item)"
                    v-for="(item, index) in ['1', '2', '3', '4', '5']"
                    :key="index"
                    square
                    style="background-color: #003357; color: #04a1f9; width: 4.5vw; height: 8.5vh; font-size: 2vw; margin-right: 0px; margin-left: 0px; "
                    >{{ item }}</vs-button
                  >
                </vs-row>
              </div>
              <div>
                <vs-button
                  @click="runTime"
                  square
                  style="background-color: #003357; color: #04a1f9; width: 8.5vw; height: 8.5vh; margin-right:0px"
                >
                  <font-awesome-icon style=" font-size: 3vw; " icon="play" />
                </vs-button>
              </div>
            </vs-row>
          </div>
          <div class="timeCon1">
            <vs-row justify="space-between">
              <div class="timeConPan">
                <vs-row justify="space-between">
                  <vs-button
                    @click="edit(item)"
                    v-for="(item, index) in [6, 7, 8, 9, 0]"
                    :key="index"
                    square
                    style="background-color: #003357; color: #04a1f9; width: 4.5vw; height: 8.5vh; font-size: 2vw; margin-right: 0px; margin-left: 0px"
                    >{{ item }}</vs-button
                  >
                </vs-row>
              </div>
              <vs-button
                @click="stopTime"
                square
                style="background-color: #003357; color: #04a1f9; width: 8.5vw; height: 8.5vh; margin-right:0px
"
              >
                <font-awesome-icon style=" font-size: 3vw; " icon="stop" />
              </vs-button>
            </vs-row>
          </div>
        </div>
      </vs-col>
      <vs-col w="3"> </vs-col>
    </vs-row>
    <div class="timerPanClose" v-on:click="clsoeTimerModal">
      <font-awesome-icon style="color: #04a1f9; font-size: 3vw" icon="reply" />
      <div style="font-size: 1vw">Back</div>
    </div>
    <div class="timerTitle">
      Countdown Control Panel
    </div>
  </vs-dialog>
</template>
<script>
export default {
  data() {
    return {
      status: 'second',
      h: '00',
      m: '00',
      s: '00',
      startTime: '',
      endTime: '',
      run: false,
    };
  },
  props: ['isTimerShow', 'setShowTimerModal'],
  methods: {
    clsoeTimerModal() {
      this.setShowTimerModal(false);
    },
    selectedHour() {
      this.status = 'hour';
    },
    selectedMin() {
      this.status = 'min';
    },
    selectedSec() {
      this.status = 'sec';
    },
    startCallBack() {
      console.log();
      const today = new Date();

      this.startTime =
        `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}` +
        ' ' +
        `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
      this.endTime =
        `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}` +
        ' ' +
        `${today.getHours() + parseInt(this.h, 10)}:${today.getMinutes() +
          parseInt(this.m, 10)}:${today.getSeconds() + parseInt(this.s, 10)}`;
    },
    endCallBack(x) {
      console.log(x);
    },
    runTime() {
      this.run = true;
      this.startCallBack();
    },
    edit(item) {
      switch (this.status) {
        case 'hour':
          if (this.h === '00') {
            this.h = `0${item}`;
          } else {
            this.h = this.h + item;
            this.h = this.h[this.h.length - 2] + this.h[this.h.length - 1];
          }
          break;
        case 'min':
          if (this.m === '00') {
            this.m = `0${item}`;
          } else {
            this.m = this.m + item;
            this.m = this.m[this.m.length - 2] + this.m[this.m.length - 1];
          }

          break;
        case 'sec':
          if (this.s === '00') {
            this.s = `0${item}`;
          } else {
            this.s = this.s + item;
            this.s = this.s[this.s.length - 2] + this.s[this.s.length - 1];
          }

          break;
        default:
          break;
      }
    },

    stopTime() {
      this.h = '00';
      this.m = '00';
      this.s = '00';
      this.run = false;
    },
  },
};
</script>
<style>
.timerShow {
  background-color: #111111;
  color: #04a1f9;
  font-size: 5vw;
  font-weight: bold;
  text-align: center;
  width: 26vw;
  border: solid #1b2024 0.1vh;
}
.secondShow {
  color: #04a1f9;
  width: 36vw;
}
.secondNameShow {
  color: #04a1f9;
  width: 26vw;
  padding-left: 0.5vw;
  padding-right: 0.5vw;
}
.timePan {
  background-color: #111111;
  color: #04a1f9;
  width: 7vw;
  font-size: 3vw;
  padding: 0.5vw;
  border: solid #1b2024 0.1vh;
}
.timeTruePan {
  background-color: #111111;
  color: #04a1f9;
  width: 7vw;
  font-size: 3vw;
  padding: 0.5vw;
  border: solid #6696bd 0.1vh;
}
.timeName {
  font-size: 1.3vw;
  color: #04a1f9;
  margin-bottom: 0.5vh;
}
.deleteBtn {
  background-color: #003357;
  color: #04a1f9;
  width: 7.5vw;
  padding: 0.6vw;
}
.timeConPan {
  width: 26vw;
}
.startBtn {
  background-color: #003357;
  color: #04a1f9;
  width: 8.8vw;
  height: 8.5vh;
  margin-top: 0.8vh;
}
.timeCon1 {
  color: #04a1f9;
  width: 36vw;
  margin-top: 3vh;
}
.timerPanClose {
  position: absolute;
  height: 9vh;
  width: 6vw;
  background-color: #003357;
  color: #04a1f9;
  bottom: 43vh;
  right: 0.6vw;
  padding-top: 2vh;
}
.timerTitle {
  position: absolute;
  bottom: 0.3vh;
  right: 1vw;
  font-size: 1.5vw;
  color: #007ea7;
}
</style>
