<template>
  <vs-dialog prevent-close not-close v-model="isProfileShow" square>
    <vs-row>
      <div class="ActiveProfile">
        <vs-col>
          <div class="activeProfileName">
            <p>Active Profile</p>
          </div>
          <div class="activeProfileContent">
            <font-awesome-icon
              style="color: #007ea7; font-size: 8vw; margin-top: 8vh"
              icon="user-md"
            />
            <p style="color: #0072a7">{{ activeProfile }}</p>
          </div>
        </vs-col>
      </div>
      <div class="ProfileList">
        <vs-col>
          <div class="profileListName">
            <p>Profile List</p>
          </div>
          <div class="profileListContent">
            <vs-row>
              <div style="margin-left: 1vw; color: #0077aa; text-align: start">
                <li
                  @click="selectedProfile(item, index)"
                  v-for="(item, index) in profileList"
                  :key="index"
                  style="cursor: pointer"
                >
                  {{ item }}
                </li>
              </div>
              <div></div>
            </vs-row>
          </div>
        </vs-col>
      </div>
      <div class="ProfileName">
        <vs-col>
          <div class="profileNameTitle">
            <p>Profile Name</p>
          </div>
          <div
            :class="isEdit ? ['profileNameTrueTitle1'] : ['profileNameTitle1']"
            @click="isEdit = true"
          >
            <p>{{ text }}</p>
          </div>
          <div class="profileUpdateTitle" @click="updateProfile">
            <font-awesome-icon
              style="color: #007ea7; font-size: 2vw; margin-top: 1vh"
              icon="sync-alt"
            />
            <span style="color: #007ea7; font-size: 1.3vw; cursor: pointer "
              >Update Profile Name</span
            >
          </div>
          <div class="profileNameContent" @click="saveProfile">
            <font-awesome-icon
              style="color: #007ea7; font-size: 6vw; margin-top: 1vh"
              icon="save"
            />
            <div style="color:#007ea7; font-size: 1.5vw; ">
              <div>Save</div>
              <div>Profile Settings</div>
            </div>
          </div>
        </vs-col>
      </div>
      <div class="OtherProfile">
        <vs-select v-model="value" label="Choose Language" style="margin-top: 30vh; color:#0078d7 ">
          <vs-option
            v-for="(item, index) in ['Turkish', 'English', 'Русский']"
            :key="index"
            :label="item"
            :value="item"
            >{{ item }}</vs-option
          >
        </vs-select>

        <div>
          <vs-button
            style="background-color: #003355; width: 14vw; margin-top: 8vh; color: #0077aa"
            @click="changeLang"
          >
            Update Language
          </vs-button>
        </div>
      </div>
    </vs-row>
    <vs-button
      style="position: absolute;top: 0.3vh; right: 0.5vw; background-color: #003357;height: 10vh; width: 6vw"
      square
      @click="ProfileClose"
    >
      <vs-col>
        <font-awesome-icon style="color: #04a1f9; font-size: 3vw" icon="reply" />
        <div style="font-size: 1vw; color: #04a1f9;">Back</div>
      </vs-col>
    </vs-button>
    <div class="keyboard">
      <font-awesome-icon
        @click="showKeyboard"
        style="color: #007ea7; font-size: 4vw;"
        icon="keyboard"
      ></font-awesome-icon>
    </div>
    <div class="profileBoTitle">
      Profile Settings Control Panel
    </div>
    <keyboard-pan
      :isKeyboard="showKey"
      :setKeyboardShow="setKeyboardShow"
      :setAddText="setAddText"
    ></keyboard-pan>
  </vs-dialog>
</template>
<script>
import store from '../../store';
import KeyboardPan from '../Keyboard/KeyboardPan.vue';
export default {
  components: { KeyboardPan },
  props: ['isProfileShow', 'setProfileModal'],
  data() {
    return {
      value: '',
      showKey: false,
      text: '',
      activeProfile: 'Default Profile',
      profileList: ['Default Profile', 'Profile1', 'Profile2', 'Profile3', 'Profile4'],
      isEdit: false,
      selectedId: -1,
    };
  },
  methods: {
    changeLang() {
      store.dispatch('changeLang', this.value);
    },
    ProfileClose() {
      this.setProfileModal(false);
    },
    showKeyboard() {
      this.showKey = true;
    },
    setKeyboardShow(setting) {
      this.showKey = setting;
    },
    setAddText(item) {
      if (item === 'Backspace') {
        this.text = this.text.slice(0, -1);
      } else {
        this.text = this.text + item;
      }
    },
    selectedProfile(item, index) {
      console.log('id=', index);
      this.text = item;
      this.selectedId = index;
    },
    updateProfile() {
      if (this.selectedId !== -1) {
        this.profileList[this.selectedId] = this.text;
        this.text = '';
        this.selectedId = -1;
      } else {
        this.profileList.push(this.text);
        this.text = '';
      }
    },
    saveProfile() {
      this.activeProfile = this.text;
    },
  },
};
</script>
<style scoped>
.ActiveProfile {
  width: 16vw;
  height: 55vh;
  margin-right: 1.5vw;
}
.ProfileList {
  width: 21vw;
  height: 55vh;
  margin-right: 1.5vw;
}
.ProfileName {
  width: 21vw;
  height: 55vh;
  margin-right: 1.5vw;
}
.activeProfileName {
  width: 16vw;
  height: 7vh;
  background-color: #001111;
  color: #1785df;
  border: solid #004769 0.2vh;
}
.activeProfileContent {
  width: 16vw;
  height: 46vh;
  margin-top: 1vh;
  background-color: #003355;
  border: solid #004769 0.2vh;
}
.profileListName {
  width: 21vw;
  height: 7vh;
  color: #1785df;
  background-color: #001111;
  border: solid #004769 0.2vh;
}
.profileListContent {
  width: 21vw;
  height: 46vh;
  margin-top: 1vh;
  background-color: #001111;
  border: solid #004769 0.2vh;
}
.profileNameTitle {
  width: 21vw;
  height: 7vh;
  color: #1785df;

  background-color: #001111;
  border: solid #004769 0.2vh;
}
.profileNameTitle1 {
  width: 21vw;
  height: 7vh;
  background-color: #001111;
  border: solid #004769 0.2vh;
  color: #1785df;
  margin-top: 2vh;
  font-size: 1.4vw;
}
.profileNameTrueTitle1 {
  width: 21vw;
  height: 7vh;
  background-color: #001111;
  border: solid #6daecc 0.2vh;
  color: #1785df;
  margin-top: 2vh;
  font-size: 1.4vw;
}
.profileUpdateTitle {
  width: 21vw;
  height: 7vh;
  background-color: #003355;
  border: solid #004769 0.2vh;
  margin-top: 0.5vh;
  cursor: pointer;
}
.profileNameContent {
  width: 21vw;
  height: 27.8vh;
  background-color: #003355;
  border: solid #004769 0.2vh;
  margin-top: 2vh;
  cursor: pointer;
}
.vs-select__input {
  padding: 0px !important;
  border-radius: 4px !important;
  background-color: rgb(54, 114, 133) !important;
  color: aqua !important;
  width: 14vw !important;
}
.keyboard {
  position: absolute;
  right: 20vw;
  top: 11vh;
}
.profileBoTitle {
  position: absolute;
  right: 1vw;
  bottom: 1vh;
  font-size: 1.2vw;
  color: #1785df;
}
</style>
