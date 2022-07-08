<template>
  <div style="margin-top: 4vh">
    <vs-row justify="space-between">
      <font-awesome-icon
        style="color: #04a1f9; font-size: 3vw; margin-right: 1vw; margin-top: 2vh; "
        :icon="setIcon"
      />
      <div style="font-size: 1.5vw; color: #04a1f9; margin-top: 1vh">
        <div>{{ settingTitle1 }}</div>
        <div>{{ settingTitle2 }}</div>
      </div>
      <div>
        <vs-row align="center" justify="space-around">
          <span>
            <font-awesome-icon
              v-on:click="minusVal"
              style="color: #007ea7; font-size: 3vw"
              icon="chevron-left"
            />
          </span>
          <span style="font-size: 3vw;font-weight: bold; color: #04a1f9"> {{ percent }}% </span>
          <span>
            <font-awesome-icon
              v-on:click="addVal"
              style="color: #007ea7; font-size: 3vw"
              icon="chevron-right"
            />
          </span>
        </vs-row>
      </div>
    </vs-row>
    <div style="margin-right: 6vw; margin-left: 6vw; margin-top: 3vh">
      <div style="border-bottom: solid #4b7edf 0.3vh"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['percent', 'settingTitle1', 'settingTitle2', 'setIcon'],
  methods: {
    addVal() {
      if (this.percent === 100) {
        this.percent = 100;
      } else {
        this.percent = this.percent + 1;
      }
    },
    minusVal() {
      if (this.percent === 0) {
        this.percent = 0;
      } else {
        this.percent = this.percent - 1;
      }
    },
  },
};
</script>
<style></style>
