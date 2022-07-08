<template>
  <div class="callHistory">
    <vs-row justify="space-between">
      <div style="padding-left: 0.6vw; text-align: start; font-size: 1.5vw">
        <li
          v-for="(item, index) in phoneList"
          :key="index"
          style="cursor: pointer"
          @click="selectedPhone(item)"
        >
          {{ item.name }}
        </li>
      </div>
      <div>
        <vs-button
          square
          style="height: 32vh; width: 8vw; background-color: #003357; color: #04a1f9; font-size: 2vw;"
        >
          <vs-col>
            <font-awesome-icon style="color: #04a1f9; font-size: 4vw" icon="trash-alt" />
            <div style="font-size: 1.5vw; margin-top: 2vh">
              Clean History
            </div>
          </vs-col>
        </vs-button>
      </div>
    </vs-row>
  </div>
</template>
<script>
export default {
  props: ['setSelectedPhone'],

  data() {
    return {
      phoneList: [
        { id: 1, name: 'Aydogan Emsize', phoneNumber: 98063728837 },
        { id: 2, name: 'Andrei ', phoneNumber: 33766657676 },
        { id: 3, name: 'Ahmet', phoneNumber: 68766657676 },
        { id: 4, name: 'Ivan Selyutin', phoneNumber: 34997832738 },
      ],
      status: false,
    };
  },
  methods: {
    selectedPhone(item) {
      this.status = true;
      this.setSelectedPhone(item);
    },
  },
};
</script>
<style>
.callHistory {
  border-top: steelblue solid 0.3vh;
  background-color: #001111;
  width: 42.5vw;
  height: 34vh;
  overflow-y: scroll;
}
</style>
