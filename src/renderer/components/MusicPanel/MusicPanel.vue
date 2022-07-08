<template>
  <div>
    <vs-dialog prevent-close class="bigPanel" v-model="isMusicShow" not-close square>
      <vs-row>
        <div class="mp3List">
          <div class="mp3ListName">
            <vs-row justify="space-between" align="center">
              MP3 List
              <vs-button
                square
                :style="
                  isFresh
                    ? { backgroundColor: '#003355', color: '#0077aa' }
                    : { backgroundColor: '#0077aa', color: 'white' }
                "
                @click="isFresh = !isFresh"
              >
                <vs-row align="center" style="margin-top: 1.3vh; margin-left: 0.5vw">
                  <span>
                    Refresh List
                  </span>
                  <font-awesome-icon
                    style="margin-left: 0.5vw; font-size:1.5vw;;"
                    icon="sync-alt"
                  />
                </vs-row>
              </vs-button>
            </vs-row>
          </div>
          <div class="mp3ListContent"></div>
        </div>
        <div class="radioPanel">
          <div class="channelName">
            Radio Channel
          </div>
          <div class="channelBtns">
            <vs-row justify="space-between">
              <vs-button
                @click="toggle(item)"
                v-for="(item, index) in channelBtn1"
                :style="
                  item.isActived
                    ? {
                        height: '7vh',
                        width: '4vw',
                        backgroundColor: '#0077aa',
                        marginRight: '2vw',
                        marginLeft: '2vw',
                      }
                    : {
                        height: '7vh',
                        width: '4vw',
                        backgroundColor: '#003355',
                        marginRight: '2vw',
                        marginLeft: '2vw',
                      }
                "
                square
                :key="index"
              >
                <vs-col
                  :style="
                    item.isActived
                      ? { color: 'white', fontSize: '1.2vw' }
                      : { color: '#0077aa', fontSize: '1.2vw' }
                  "
                >
                  <div>{{ item.val }}</div>
                  <div>CH</div>
                </vs-col>
              </vs-button>
            </vs-row>
            <vs-row justify="space-between">
              <vs-button
                @click="toggle(item)"
                v-for="(item, index) in channelBtn2"
                :style="
                  item.isActived
                    ? {
                        height: '7vh',
                        width: '4vw',
                        backgroundColor: '#0077aa',
                        marginRight: '2vw',
                        marginLeft: '2vw',
                      }
                    : {
                        height: '7vh',
                        width: '4vw',
                        backgroundColor: '#003355',
                        marginRight: '2vw',
                        marginLeft: '2vw',
                      }
                "
                square
                :key="index"
              >
                <vs-col
                  :style="
                    item.isActived
                      ? { color: 'white', fontSize: '1.2vw' }
                      : { color: '#0077aa', fontSize: '1.2vw' }
                  "
                >
                  <div>{{ item.val }}</div>
                  <div>CH</div>
                </vs-col>
              </vs-button>
            </vs-row>
          </div>
          <div class="channelCtr">
            <vs-row>
              <vs-col w="4" align="flex-start">
                <vs-col>
                  <vs-button style="height: 8vh; width: 7vw; background-color: #003355" square>
                    <vs-col>
                      <font-awesome-icon
                        style="color: #0077aa; font-size: 1.5vw"
                        icon="step-forward"
                      ></font-awesome-icon>
                      <div style="color: #0077aa; font-size: 1.3vw">Next</div>
                    </vs-col>
                  </vs-button>
                  <vs-button style="height: 8vh; width: 7vw; background-color: #003355" square>
                    <vs-col>
                      <font-awesome-icon
                        style="color: #0077aa; font-size: 1.5vw"
                        icon="step-backward"
                      ></font-awesome-icon>
                      <div style="color: #0077aa; font-size: 1.3vw">
                        Previous
                      </div>
                    </vs-col>
                  </vs-button>
                </vs-col>
              </vs-col>
              <vs-col w="4" align="center">
                <vs-button
                  @click="playBtn"
                  :style="
                    isPlayed
                      ? {
                          height: '17vh',
                          width: '7vw',
                          backgroundColor: '#0077aa',
                          marginTop: '0px',
                          color: 'white',
                        }
                      : {
                          height: '17vh',
                          width: '7vw',
                          backgroundColor: '#003355',
                          marginTop: '0px',
                          color: '#0077aa',
                        }
                  "
                  square
                >
                  <vs-col>
                    <font-awesome-icon
                      style=" font-size: 4vw"
                      :icon="isPlayed ? 'stop-circle' : 'play-circle'"
                    ></font-awesome-icon>
                    <div style="font-size: 1.3vw; margin-top: 1vh">
                      {{ isPlayed ? 'Stop' : 'Play' }}
                    </div>
                  </vs-col>
                </vs-button>
              </vs-col>
              <vs-col w="4" align="flex-end">
                <vs-col style="margin-left: 1vw">
                  <vs-button
                    @click="shuffleBtn"
                    :style="
                      isShuffled
                        ? {
                            height: '8vh',
                            width: '7vw',
                            backgroundColor: '#0077aa',
                            marginTop: '0px',
                            color: 'white',
                          }
                        : {
                            height: '8vh',
                            width: '7vw',
                            backgroundColor: '#003355',
                            marginTop: '0px',
                            color: '#0077aa',
                          }
                    "
                    square
                  >
                    <vs-col>
                      <font-awesome-icon
                        style=" font-size: 1.5vw"
                        icon="random"
                      ></font-awesome-icon>
                      <div style=" font-size: 1.3vw">Shuffle</div>
                    </vs-col>
                  </vs-button>
                  <vs-button
                    @click="repeatBtn"
                    :style="
                      isRepeated
                        ? {
                            height: '8vh',
                            width: '7vw',
                            backgroundColor: '#0077aa',
                            marginTop: '0px',
                            color: 'white',
                          }
                        : {
                            height: '8vh',
                            width: '7vw',
                            backgroundColor: '#003355',
                            marginTop: '0px',
                            color: '#0077aa',
                          }
                    "
                    square
                  >
                    <vs-col>
                      <font-awesome-icon style="font-size: 1.5vw" icon="reply"></font-awesome-icon>
                      <div style="font-size: 1.3vw">Repeat</div>
                    </vs-col>
                  </vs-button>
                </vs-col>
              </vs-col>
            </vs-row>
          </div>
          <div class="volumeName">
            Volume Setting
          </div>
          <div class="volumeCtr">
            <div style="margin-top: 3vh">
              <vs-row justify="space-around">
                <div>
                  <vs-row align="center" justify="space-around">
                    <span>
                      <font-awesome-icon
                        v-on:click="minusVolume"
                        style="color: #007ea7; font-size: 4vw"
                        icon="chevron-left"
                      />
                    </span>
                    <span
                      style="font-size: 4vw;font-weight: bold; color: #0077aa; margin-left: 1vw; margin-right: 1vw"
                    >
                      {{ volume }}
                    </span>
                    <span>
                      <font-awesome-icon
                        v-on:click="addVolume"
                        style="color: #007ea7; font-size: 4vw"
                        icon="chevron-right"
                      />
                    </span>
                  </vs-row>
                </div>
                <div>
                  <vs-button
                    @click="muteBtn"
                    :style="
                      isMuted
                        ? {
                            height: '8vh',
                            width: '7vw',
                            backgroundColor: '#0077aa',
                            marginTop: '0px',
                          }
                        : {
                            height: '8vh',
                            width: '7vw',
                            backgroundColor: '#003355',
                            marginTop: '0px',
                          }
                    "
                    square
                  >
                    <vs-col>
                      <font-awesome-icon
                        :style="
                          isMuted
                            ? { color: 'white', fontSize: '1.5vw' }
                            : { color: '#0077aa', fontSize: '1.5vw' }
                        "
                        icon="volume-mute"
                      ></font-awesome-icon>
                    </vs-col>
                  </vs-button>
                </div>
              </vs-row>
            </div>
          </div>
        </div>
        <div>
          <font-awesome-icon
            style="color: #001133; height:30vh; width: 14vw; margin-left: 2vw; margin-top: 20vh"
            icon="icons"
          />
        </div>
      </vs-row>
      <vs-button
        style="position: absolute;top: 0.3vh; right: 0.5vw; background-color: #003357;height: 10vh; width: 6vw"
        square
        @click="closeMusicModal"
      >
        <vs-col>
          <font-awesome-icon style="color: #04a1f9; font-size: 3vw" icon="reply" />
          <div style="font-size: 1vw; color: #04a1f9;">Back</div>
        </vs-col>
      </vs-button>
    </vs-dialog>
  </div>
</template>
<script>
import moment from 'moment';
import store from '../../store';
export default {
  props: ['isMusicShow', 'setShowMusicModal'],
  data() {
    return {
      volume: 32,
      channelBtn1: [
        {
          val: 1,
          isActived: false,
        },
        {
          val: 2,
          isActived: false,
        },
        {
          val: 3,
          isActived: false,
        },
      ],
      channelBtn2: [
        {
          val: 4,
          isActived: false,
        },
        {
          val: 5,
          isActived: false,
        },
        {
          val: 6,
          isActived: false,
        },
      ],
      isMuted: false,
      isShuffled: false,
      isRepeated: false,
      isPlayed: false,
      isFresh: false,
    };
  },
  methods: {
    closeMusicModal() {
      this.setShowMusicModal(false);
    },
    addVolume() {
      if (this.volume === 100) {
        this.volume = 100;
      } else {
        const date = moment(new Date()).format('YYYY-MM-DD hh:mm:ss');
        store.dispatch('registerEvent', {
          date,
          val: 'Volume is changed',
        });

        this.volume = this.volume + 1;
      }
    },
    minusVolume() {
      if (this.volume === 0) {
        this.volume = 0;
      } else {
        this.volume = this.volume - 1;
        const date = moment(new Date()).format('YYYY-MM-DD hh:mm:ss');
        store.dispatch('registerEvent', {
          date,
          val: 'Volume is changed',
        });
      }
    },
    toggle(val) {
      const date = moment(new Date()).format('YYYY-MM-DD hh:mm:ss');
      store.dispatch('registerEvent', {
        date,
        val: 'Channel is changed',
      });
      this.channelBtn1.map((item) => {
        item.isActived = false;
        return 0;
      });
      this.channelBtn2.map((item) => {
        item.isActived = false;
        return 0;
      });
      val.isActived = !val.isActived;
    },
    muteBtn() {
      this.isMuted = !this.isMuted;
      const date = moment(new Date()).format('YYYY-MM-DD hh:mm:ss');
      store.dispatch('registerEvent', {
        date,
        val: 'Volume is muted',
      });
    },
    shuffleBtn() {
      this.isRepeated = false;
      this.isShuffled = !this.isShuffled;
    },
    repeatBtn() {
      this.isShuffled = false;
      this.isRepeated = !this.isRepeated;
    },
    playBtn() {
      this.isPlayed = !this.isPlayed;
    },
  },
};
</script>
<style scoped>
@import '../../assets/css/custom_dialog1.css';
.mp3List {
  width: 40vw;
  height: 75vh;
  margin-right: 2vw;
}
.radioPanel {
  width: 26vw;
  height: 75vh;
}
.mp3ListName {
  width: 40vw;
  height: 8vh;
  background-color: #001111;
  border: solid #33467c 0.2vh;
  font-size: 2.3vw;
  color: #0075a7;
  text-align: start;
  display: table-cell;
  vertical-align: middle;
  padding-left: 1vw;
}
.mp3ListContent {
  margin-top: 1vh;
  width: 40vw;
  height: 65vh;
  background-color: #001111;
  border: solid #33467c 0.2vh;
}
.channelName {
  width: 26vw;
  height: 8vh;
  background-color: #001111;
  border: solid #33467c 0.2vh;
  font-size: 2vw;
  color: #0075a7;
  text-align: start;
  display: table-cell;
  vertical-align: middle;
  padding-left: 1vw;
}
.channelBtns {
  width: 26vw;
  height: 18vh;
  background-color: #001111;
  border: solid #33467c 0.2vh;
  margin-top: 1vh;
}
.channelCtr {
  width: 26vw;
  height: 18vh;
  margin-top: 2vh;
  margin-bottom: 2vh;
}
.volumeName {
  width: 26vw;
  height: 10vh;
  background-color: #001111;
  border: solid #33467c 0.2vh;
  margin-top: 4vh;
  font-size: 2.3vw;
  color: #0075a7;
  text-align: start;
  display: table-cell;
  vertical-align: middle;
  padding-left: 1vw;
}
.volumeCtr {
  width: 26vw;
  height: 14vh;
  background-color: #001111;
  border: solid #33467c 0.2vh;
  margin-top: 0.5vh;
}
</style>
