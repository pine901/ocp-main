<template>
  <div id="radioPanel">
    <vs-row justify="space-between">
      <div style="width: 25vw; height: 28vh; backgroundColor: #01172c; border: solid #1b2024">
        <div id="radioTitle">Radio Control Panel</div>
        <vs-row justify="space-between">
          <vs-button
            :style="
              !isMuted
                ? { backgroundColor: '#003357', color: '#007ea7' }
                : { backgroundColor: '#00a8e7', color: '#ffffff' }
            "
            square
            v-on:click="handleMuted"
            class="deactiveClass"
          >
            <font-awesome-icon
              :style="
                !isMuted
                  ? { color: '#007ea7', fontSize: '3vw' }
                  : { color: '#fff', fontSize: '3wv' }
              "
              icon="volume-mute"
            />
          </vs-button>
          <vs-button
            v-on:click="toggle(item)"
            class="deactiveClass"
            :style="
              item.isActived
                ? { backgroundColor: '#00a8e7', color: '#ffffff' }
                : { backgroundColor: '#003357', color: '#007ea7' }
            "
            square
            v-for="(item, index) in channelButton1"
            :key="index"
          >
            <vs-col>
              <div style="font-size: 2vw; font-weight: bold">
                {{ index + 1 }}
              </div>
              <div style="font-size: 1.5vw; font-weight: bold">
                CH
              </div>
            </vs-col>
          </vs-button>
        </vs-row>
        <vs-row justify="space-between">
          <div style="width: 5.8vw">
            <vs-col>
              <div>
                <font-awesome-icon
                  v-on:click="addChannel"
                  style="color: #007ea7"
                  icon="chevron-up"
                  size="2x"
                />
              </div>
              <div style="font-size: 1.8vw; font-weight: bold">
                {{ channel }}
              </div>
              <div>
                <font-awesome-icon
                  v-on:click="minusChannel"
                  style="color: #007ea7"
                  icon="chevron-down"
                  size="2x"
                />
              </div>
            </vs-col>
          </div>
          <vs-button
            v-on:click="toggle(item)"
            class="deactiveClass"
            :style="
              item.isActived
                ? { backgroundColor: '#00a8e7', color: '#ffffff' }
                : {
                    backgroundColor: '#003357',
                    color: '#007ea7',
                  }
            "
            square
            v-for="(item, index) in channelButton2"
            :key="index"
          >
            <vs-col>
              <div style="font-size: 2vw; font-weight: bold">
                {{ item.name }}
              </div>
              <div style="font-size:1.5vw; font-weight: bold">
                CH
              </div>
            </vs-col>
          </vs-button>
        </vs-row>
      </div>
      <div style="height: 28vh">
        <vs-button
          square
          style="height: 13.5vh; width: 9.5vw; background-color: #003357; color: #007ea7;margin-top:0px"
        >
          <vs-col>
            <div v-on:click="isMusicModalShow">
              <div>
                <font-awesome-icon style="color: #007ea7; font-size: 3vw" icon="music" />
              </div>
              <div style="font-size: 1.5vw; margin-top: 1vw">Music</div>
            </div>
          </vs-col>
        </vs-button>
        <vs-button
          square
          @click="showNetworkModal"
          style="height: 13.5vh;margin-top: 1.5vh; width: 9.5vw; background-color: #003357; color: #007ea7;"
        >
          <vs-col>
            <div>
              <font-awesome-icon style="color: #007ea7; font-size: 3vw" icon="ellipsis-h" />
            </div>
            <div style="font-size: 1.5vw; margin-top: 1vw">More</div>
          </vs-col>
        </vs-button>
      </div>
    </vs-row>
    <music-panel :isMusicShow="isMusicPanel" :setShowMusicModal="setShowMusicModal"></music-panel>
    <network :isNetworkShow="showNetModal" :setShowNetModal="setShowNetModal"></network>
  </div>
</template>
<script>
import MusicPanel from '../MusicPanel/MusicPanel.vue';
import Network from '../Network/Network.vue';
export default {
  components: { MusicPanel, Network },
  data() {
    return {
      isMuted: false,
      isActived: true,
      activeClass: 'activeClass',
      deactiveClass: 'deactiveClass',
      channel: 25,
      channelButton1: [
        {
          isActived: false,
          name: 1,
        },
        {
          isActived: false,
          name: 2,
        },
        {
          isActived: false,
          name: 3,
        },
      ],
      channelButton2: [
        {
          isActived: false,
          name: 4,
        },
        {
          isActived: false,
          name: 5,
        },
        {
          isActived: false,
          name: 6,
        },
      ],
      isMusicPanel: false,
      showNetModal: false,
    };
  },
  methods: {
    toggle(item) {
      console.log('item===', item);
      this.channelButton1.map((item) => {
        item.isActived = false;
        return 0;
      });
      this.channelButton2.map((item) => {
        item.isActived = false;
        return 0;
      });
      item.isActived = !item.isActived;
    },
    handleMuted() {
      this.isMuted = !this.isMuted;
    },
    addChannel() {
      if (this.channel === 100) {
        this.channel = 100;
      } else {
        this.channel = this.channel + 1;
      }
    },
    minusChannel() {
      if (this.channel === 0) {
        this.channel = 0;
      } else {
        this.channel = this.channel - 1;
      }
    },
    isMusicModalShow() {
      this.isMusicPanel = true;
    },
    showNetworkModal() {
      this.showNetModal = true;
    },
    setShowMusicModal(setting) {
      this.isMusicPanel = setting;
    },
    setShowNetModal(setting) {
      this.showNetModal = setting;
    },
  },
};
</script>
<style>
#radioPanel {
  position: relative;
  height: 28vh;
  width: 36.5vw;
}
#radioTitle {
  position: absolute;
  bottom: 1vh;
  right: 13vw;
}
.activeClass {
  /* background-color: #003357;
  color: #007ea7; */
  height: 10vh;
  width: 5vw;
}
.deactiveClass {
  background-color: #00a8e7;
  color: #ffffff;
  height: 10vh;
  width: 5vw;
}
</style>
