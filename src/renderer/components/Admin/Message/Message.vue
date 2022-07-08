<template>
  <div>
    <vs-row justify="center">
      <div class="messageTxt"></div>
    </vs-row>
    <div style="margin-top: 6vh">
      <vs-row justify="space-between">
        <div style="margin-left: 6vw">
          <vs-row>
            <vs-button style="background-color: #29353D; width: 12vw; height: 7vh"
              >Log Save</vs-button
            >
            <vs-button style="background-color: #29353D; width: 12vw; height: 7vh"
              >Watchdog Test</vs-button
            >
            <vs-button style="background-color: #29353D; width: 12vw; height: 7vh"
              >Comm Reset</vs-button
            >
          </vs-row>
        </div>

        <div style="margin-right: 6vw; ">
          <vs-row>
            <vs-button style="background-color: #29353D; width: 12vw; height: 7vh">Clean</vs-button>
            <vs-button style="background-color: #29353D; width: 12vw; height: 7vh"
              >Refresh</vs-button
            >
            <vs-button
              @click="closeMessage"
              style="background-color: #29353D; width: 12vw; height: 7vh"
              >Close</vs-button
            >
          </vs-row>
        </div>
      </vs-row>
    </div>
    <div style="margin-top: 6vh">
      <vs-row justify="space-around">
        <vs-button style="background-color: #29353D; width: 18vw; height: 7vh"
          >Silent Login Test!</vs-button
        >
        <vs-button
          @click="status = !status"
          style="background-color: #29353D; width: 26vw; height: 7vh"
          >Automatic System Reset Status: {{ status ? 'Active' : 'Passive' }}</vs-button
        >
        <div style="margin-top: 2vh">
          <vs-checkbox v-model="option">
            Show Unresolving Message
          </vs-checkbox>
        </div>
      </vs-row>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    closeMessage() {
      this.$router.push('/admin');
    },
  },
  data() {
    return {
      option: false,
      status: false,
    };
  },
};
</script>
<style>
.messageTxt {
  background-color: darkslategray;
  border: 0.1vh solid silver;
  width: 60vw;
  height: 60vh;
}
</style>
