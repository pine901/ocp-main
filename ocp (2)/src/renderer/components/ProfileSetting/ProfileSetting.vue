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
            <p style="color: #0072a7">Default Profile</p>
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
              <div style="margin-left: 1vw; color: #0077aa">
                <li>Changing Profile</li>
                <li>Default Profile</li>
                <li>Profile 1</li>
                <li>Profile 2</li>
                <li>Profile 3</li>
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
          <div class="profileNameTitle1"></div>
          <div class="profileUpdateTitle">
            <font-awesome-icon
              style="color: #007ea7; font-size: 2vw; margin-top: 1vh"
              icon="sync-alt"
            />
            <span style="color: #007ea7; font-size: 1.3vw">Update Profile Name</span>
          </div>
          <div class="profileNameContent">
            <font-awesome-icon
              style="color: #007ea7; font-size: 6vw; margin-top: 1vh"
              icon="save"
            />
            <div style="color:#007ea7; font-size: 1.5vw">
              <div>Save</div>
              <div>Profile Settings</div>
            </div>
          </div>
        </vs-col>
      </div>
      <div class="OtherProfile">
        <vs-select
          label="System Languages"
          v-model="value"
          style="margin-top: 30vh; color:#0078d7 "
        >
          <vs-option label="Turkish" value="1">Turkish</vs-option>
          <vs-option label="English" value="2">English</vs-option>
        </vs-select>
        <div>
          <vs-button
            style="background-color: #003355; width: 14vw; margin-top: 8vh; color: #0077aa"
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
        style="color: #007ea7; font-size: 4vw;"
        icon="keyboard"
      ></font-awesome-icon>
    </div>
    <div class="profileBoTitle">
      Profile Settings Control Panel
    </div>
  </vs-dialog>
</template>
<script>
export default {
  props: ['isProfileShow', 'setProfileModal'],
  data() {
    return {
      value: '',
    };
  },
  methods: {
    ProfileClose() {
      this.setProfileModal(false);
    },
  },
};
</script>
<style>
.ActiveProfile {
  width: 18vw;
  height: 55vh;
  margin-right: 1.5vw;
}
.ProfileList {
  width: 23vw;
  height: 55vh;
  margin-right: 1.5vw;
}
.ProfileName {
  width: 23vw;
  height: 55vh;
  margin-right: 1.5vw;
}
.activeProfileName {
  width: 18vw;
  height: 7vh;
  background-color: #001111;
  color: #1785df;
  border: solid #004769 0.2vh;
}
.activeProfileContent {
  width: 18vw;
  height: 46vh;
  margin-top: 1vh;
  background-color: #003355;
  border: solid #004769 0.2vh;
}
.profileListName {
  width: 23vw;
  height: 7vh;
  color: #1785df;
  background-color: #001111;
  border: solid #004769 0.2vh;
}
.profileListContent {
  width: 23vw;
  height: 46vh;
  margin-top: 1vh;
  background-color: #001111;
  border: solid #004769 0.2vh;
}
.profileNameTitle {
  width: 23vw;
  height: 7vh;
  color: #1785df;

  background-color: #001111;
  border: solid #004769 0.2vh;
}
.profileNameTitle1 {
  width: 23vw;
  height: 7vh;
  background-color: #001111;
  border: solid #004769 0.2vh;
  margin-top: 2vh;
}
.profileUpdateTitle {
  width: 23vw;
  height: 7vh;
  background-color: #003355;
  border: solid #004769 0.2vh;
  margin-top: 0.5vh;
}
.profileNameContent {
  width: 23vw;
  height: 27.8vh;
  background-color: #003355;
  border: solid #004769 0.2vh;
  margin-top: 2vh;
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
  right: 14vw;
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
