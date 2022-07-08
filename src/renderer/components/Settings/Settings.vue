<template>
  <vs-dialog prevent-close square not-close v-model="isShowSettings">
    <vs-row>
      <div class="setting1">
        <vs-col>
          <div class="settingPiece">
            <setting
              settingIcon="temperature-high"
              settingTitle="Temperature"
              :val1="18"
              :val2="40"
            ></setting>
          </div>
          <div class="settingPiece">
            <setting
              settingIcon="tachometer-alt"
              settingTitle="Pressure"
              :val1="-5"
              :val2="15"
            ></setting>
          </div>
        </vs-col>
      </div>
      <div class="setting1">
        <vs-col>
          <div class="settingPiece">
            <setting settingIcon="tint" settingTitle="Humidity" :val1="40" :val2="80"></setting>
          </div>
          <div class="settingPiece">
            <setting
              settingIcon="bacterium"
              settingTitle="Pollution"
              :val1="0"
              :val2="250"
            ></setting>
          </div>
        </vs-col>
      </div>
      <div class="setting3">
        <vs-col>
          <setting-horizontal
            :percent="30"
            settingTitle1="Lighting"
            settingTitle2="Lambs"
            setIcon="lightbulb"
          ></setting-horizontal>
          <setting-horizontal
            :percent="80"
            settingTitle1="Operation"
            settingTitle2="Lamp"
            setIcon="laptop-medical"
          ></setting-horizontal>
          <setting-horizontal
            :percent="34"
            settingTitle1="Negatoscope"
            settingTitle2="Setting"
            setIcon="lungs"
          ></setting-horizontal>
        </vs-col>
        <div class="setting3Title">
          Dimmer Settings
        </div>
      </div>
      <div class="setting4">
        <vs-col>
          <vs-button
            @click="profileModal"
            square
            style="margin-top: 10vh; height: 20vh; width: 12vw; background-color: #003357"
          >
            <vs-col vs-type="flex">
              <font-awesome-icon style="color: #04a1f9; font-size: 3vw" icon="user-cog" />
              <div style="font-size: 1.5vw; color:#04a1f9; margin-top: 1vh">Profile Setting</div>
            </vs-col>
          </vs-button>
          <vs-button
            @click="toggle"
            square
            :style="
              !isActived
                ? {
                    marginTop: '2vh',
                    height: '20vh',
                    width: '12vw',
                    backgroundColor: '#003357',
                    color: '#04a1f9',
                  }
                : {
                    marginTop: '2vh',
                    height: '20vh',
                    width: '12vw',
                    backgroundColor: '#0077aa',
                    color: 'white',
                  }
            "
          >
            <vs-col vs-type="flex">
              <font-awesome-icon style="font-size: 3vw" icon="lightbulb" />
              <div style="font-size: 1.5vw; margin-top: 1vh">Medical Gas Alarm</div>
            </vs-col>
          </vs-button>
        </vs-col>
      </div>
    </vs-row>
    <vs-button
      style="position: absolute;top: 0.3vh; right: 0.5vw; background-color: #003357;height: 10vh; width: 6vw"
      square
      @click="SettingClose"
    >
      <vs-col>
        <font-awesome-icon style="color: #04a1f9; font-size: 3vw" icon="reply" />
        <div style="font-size: 1vw; color: #04a1f9;">Back</div>
      </vs-col>
    </vs-button>
    <div class="settingTitle">
      Setting Control Panel
    </div>
    <profile-setting
      :isProfileShow="showProfileModal"
      :setProfileModal="setProfileModal"
    ></profile-setting>
  </vs-dialog>
</template>
<script>
import moment from 'moment';
import Setting from './Setting.vue';
import SettingHorizontal from './SettingHorizontal.vue';
import ProfileSetting from '../ProfileSetting/ProfileSetting.vue';
import store from '../../store';
export default {
  data() {
    return {
      showProfileModal: false,
      isActived: false,
    };
  },
  components: { Setting, SettingHorizontal, ProfileSetting },
  props: ['isShowSettings', 'setShowSetting'],
  methods: {
    SettingClose() {
      this.setShowSetting(false);
    },
    profileModal() {
      this.showProfileModal = true;
    },
    setProfileModal(setting) {
      this.showProfileModal = setting;
    },
    toggle() {
      const date = moment(new Date()).format('YYYY-MM-DD hh:mm:ss');
      store.dispatch('registerEvent', {
        date,
        val: 'Setting is sleeped',
      });

      this.isActived = !this.isActived;
    },
  },
};
</script>
<style>
.setting1 {
  height: 55vh;
  margin-bottom: 0px;
  width: 20vw;
  /* background-color: tan; */
  margin-right: 2vw;
}
.setting3 {
  height: 55vh;
  width: 24vw;
  /* background-color: tan; */
  margin-right: 2vw;
  margin-bottom: 0px;
  border: solid #4b7edf 0.2vh;
}
/* .vs-dialog__content.notFooter {
  margin-bottom: 0px !important;
} */

.settingPiece {
  height: 26.5vh;
  margin-bottom: 1.8vh;
  width: 20vw;
  /* background-color: teal; */
  border: solid #4b7edf 0.2vh;
}
.setting3Title {
  position: absolute;
  bottom: 1.6vh;
  right: 18vw;
  font-size: 1.3vw;
  color: #04a1f9;
}
.settingTitle {
  position: absolute;
  bottom: 0.1vh;
  right: 0.3vw;
  font-size: 1.1vw;
  color: #04a1f9;
}
</style>
