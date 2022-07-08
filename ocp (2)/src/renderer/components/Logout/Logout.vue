<template>
  <vs-dialog prevent-close v-model="isLogOut" square not-close>
    <div class="Logout">
      <vs-row vs-type="flex" align="center" justify="space-around">
        <vs-button
          @click="logout"
          square
          style="background-color: #003355; height: 22vh; width: 12vw"
        >
          <vs-col>
            <font-awesome-icon style=" font-size: 4vw; color: #0077aa" icon="power-off" />
            <div style="color: #0077aa; font-size: 1.5vw; margin-top: 1.5vh">
              Sign Out
            </div>
          </vs-col>
        </vs-button>
        <vs-button
          @click="sleep"
          square
          style="background-color: #003355; height: 22vh; width: 12vw"
        >
          <vs-col>
            <font-awesome-icon style=" font-size: 4vw; color: #0077aa" icon="undo-alt" />
            <div style="color: #0077aa; font-size: 1.5vw; margin-top: 1.5vh">
              Restart
            </div>
          </vs-col>
        </vs-button>
      </vs-row>
    </div>
    <vs-button
      style="position: absolute;top: 0.3vh; right: 0.5vw; background-color: #003357;height: 10vh; width: 6vw"
      square
      @click="LogoutClose"
    >
      <vs-col>
        <font-awesome-icon style="color: #04a1f9; font-size: 3vw" icon="reply" />
        <div style="font-size: 1vw; color: #04a1f9;">Back</div>
      </vs-col>
    </vs-button>
    <div class="logoutBoTitle">
      Exit Control Panel
    </div>
    <div class="logoutTopTitle">
      Press and hold for 0.5 seconds on the button you want to select
    </div>
  </vs-dialog>
</template>

<script>
import moment from 'moment';
import store from '../../store';
export default {
  props: ['isLogOut', 'setShowLogout'],
  methods: {
    LogoutClose() {
      this.setShowLogout(false);
    },
    logout() {
      const date = moment(new Date()).format('YYYY-MM-DD hh:mm:ss');
      store.dispatch('registerEvent', { date, val: 'System is logout' });

      this.$router.push('/');
    },
    sleep() {
      const date = moment(new Date()).format('YYYY-MM-DD hh:mm:ss');
      store.dispatch('registerEvent', { date, val: 'System is sleeped' });
      this.$router.push('/sleep');
    },
  },
};
</script>
<style>
.Logout {
  padding-top: 18vh;
  padding-right: 10vw;
  padding-left: 10vw;
}
.logoutBoTitle {
  position: absolute;
  bottom: -12vh;
  right: 1vw;
  color: #0077aa;
  font-size: 1.2vw;
}
.logoutTopTitle {
  position: absolute;
  top: 1vh;
  left: 1vw;
  color: #0077aa;
  font-size: 1.2vw;
}
</style>
