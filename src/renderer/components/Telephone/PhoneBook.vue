<template>
  <div class="phoneBookPan">
    <vs-row justify="space-between">
      <div style="font-size: 1.3vw; padding-left: 1vw; text-align: start">
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
  props: ['setSelectedPhone'],
  data() {
    return {
      showContactMoal: false,
      phoneList: [
        {
          id: 1,
          name: 'Aydogan Emsize',
          phoneNumber: 98063728837,
        },
        {
          id: 2,
          name: 'Ahmet',
          phoneNumber: 68766657676,
        },
        {
          id: 3,
          name: 'Ivan Selyutin',
          phoneNumber: 34997832738,
        },
        {
          id: 4,
          name: 'Andrei ',
          phoneNumber: 33766657676,
        },
      ],
      status: false,
    };
  },
  methods: {
    phoneBookModal() {
      this.showContactMoal = true;
    },
    setContactModal(setting) {
      this.showContactMoal = setting;
    },
    selectedPhone(item) {
      this.status = true;
      this.setSelectedPhone(item);
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
