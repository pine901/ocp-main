<template>
  <vs-dialog prevent-close v-model="isActiveProfileShow" not-close square>
    <div class="activeTitle">
      Active Profile: Default Profile
    </div>
    <div class="statusPan">
      <vs-row>
        <vs-button
          square
          style="margin-left: 0px; background-color: #003357;"
          v-for="tab in tabs"
          :key="tab"
          @click="selected = tab"
        >
          {{ tab }}
        </vs-button>
      </vs-row>
      <component :is="selected"></component>
    </div>
    <vs-button
      style="position: absolute;top: 0.3vh; right: 0.5vw; background-color: #003357;height: 10vh; width: 6vw"
      square
      @click="ActiveClose"
    >
      <vs-col>
        <font-awesome-icon style="color: #04a1f9; font-size: 3vw" icon="reply" />
        <div style="font-size: 1vw; color: #04a1f9;">Back</div>
      </vs-col>
    </vs-button>
    <vs-button
      style="position: absolute;top: 0.3vh; left: 0.5vw; background-color: #003357;height: 9vh; width: 5vw"
      square
    >
      <vs-col>
        <font-awesome-icon style="color: #04a1f9; font-size: 2.5vw" icon="undo-alt" />
        <div style="font-size: 1vw; color: #04a1f9;">Refresh</div>
      </vs-col>
    </vs-button>
    <div class="ActiveBoTitle">
      Event Log and System Status Control Panel
    </div>
  </vs-dialog>
</template>
<script>
import EventLogs from './EventLogs.vue';
import SystemStatus from './SystemStatus.vue';
export default {
  props: ['isActiveProfileShow', 'setShowActive'],
  data() {
    return {
      tabs: ['EventLogs', 'SystemStatus'],
      selected: 'EventLogs',
    };
  },
  components: { EventLogs, SystemStatus },
  methods: {
    ActiveClose() {
      this.setShowActive(false);
    },
  },
};
</script>
<style>
.activeTitle {
  font-size: 3.5vw;
  font-weight: bold;
  color: #00aaee;
}
.ActiveBoTitle {
  position: absolute;
  bottom: 0.1vh;
  right: 1vw;
  font-size: 1.2vw;
  color: #00aaee;
}
.statusPan {
  margin-top: 2vh;
}
</style>
