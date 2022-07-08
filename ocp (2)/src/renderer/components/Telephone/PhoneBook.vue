<template>
  <div class="phoneBookPan">
    <vs-row justify="space-between">
      <div style="font-size: 1.3vw; padding-left: 1vw">
        <li>AYDOGAN EMSIZE</li>
        <li>AYDOGAN EMSIZE</li>
        <li>AYDOGAN EMSIZE</li>
        <li>AYDOGAN EMSIZE</li>
        <li>AYDOGAN EMSIZE</li>
        <li>AYDOGAN EMSIZE</li>
        <li>AYDOGAN EMSIZE</li>
        <li>AYDOGAN EMSIZE</li>
        <li>AYDOGAN EMSIZE</li>
        <li>AYDOGAN EMSIZE</li>
        <li>AYDOGAN EMSIZE</li>
        <li>AYDOGAN EMSIZE</li>
      </div>
      <div>
        <vs-button
          @click="phoneBookModal"
          square
          style="height: 32vh; width: 8vw; background-color: #003357; color: #04a1f9; font-size: 2vw;"
        >
          <vs-col>
            <font-awesome-icon style="color: #04a1f9; font-size: 4vw" icon="address-book" />
            <div style="font-size: 1.5vw; margin-top: 2vh">
              Contact Manager
            </div>
          </vs-col>
        </vs-button>
      </div>
    </vs-row>
    <contact-modal
      :isContactModal="showContactMoal"
      :setContactModal="setContactModal"
    ></contact-modal>
  </div>
</template>
<script>
import ContactModal from './ContactModal.vue';
export default {
  components: { ContactModal },
  data() {
    return {
      showContactMoal: false,
    };
  },
  methods: {
    phoneBookModal() {
      this.showContactMoal = true;
    },
    setContactModal(setting) {
      this.showContactMoal = setting;
    },
  },
};
</script>
<style>
.phoneBookPan {
  border-top: steelblue solid 0.3vh;
  background-color: #001111;
  width: 42.5vw;
  height: 34vh;
  overflow-y: scroll;
}
</style>
