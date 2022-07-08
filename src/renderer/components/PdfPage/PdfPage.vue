<template>
  <div>
    <vs-dialog prevent-close class="bigPanel" v-model="isPdfpage" not-close square>
      <vs-row>
        <div class="mp3List">
          <div class="mp3ListName">
            <vs-row justify="space-between" align="center">
              PDF List
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
          <vs-button
            class="pdfViewBtn"
            square
            style="background-color:#0077aa;color: #d6d6a3; width: 13vw; height: 25vh"
          >
            <vs-col>
              <font-awesome-icon
                style="color: #d6d6a3; height:10vh; width: 8vw; "
                icon="file-pdf"
              />
              <div style="font-size: 1.5vw; margin-top: 1.5vh">View Pdf</div>
            </vs-col>
          </vs-button>
        </div>
        <div>
          <font-awesome-icon
            style="color: #737373;opacity: 0.3; height:30vh; width: 14vw; margin-left: 2vw; margin-top: 20vh"
            icon="book-reader"
          />
        </div>
      </vs-row>
      <vs-button
        style="position: absolute;top: 0.3vh; right: 0.5vw; background-color: #003357;height: 10vh; width: 6vw"
        square
        @click="closePdfpage"
      >
        <vs-col>
          <font-awesome-icon style="color: #04a1f9; font-size: 3vw" icon="reply" />
          <div style="font-size: 1vw; color: #04a1f9;">Back</div>
        </vs-col>
      </vs-button>
      <div class="pageBoTitle">PDF Control Panel</div>
    </vs-dialog>
  </div>
</template>
<script>
import moment from 'moment';
import store from '../../store';
export default {
  props: ['isPdfpage', 'setShowPdfpage'],
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
    closePdfpage() {
      this.setShowPdfpage(false);
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
  position: relative;
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
.pdfViewBtn {
  position: absolute;
  top: 30%;
  left: 20%;
}
.pageBoTitle {
  position: absolute;
  bottom: 1vh;
  right: 1vw;
  color: #0075a7;
}
</style>
