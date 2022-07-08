<template>
  <div class="telephonePage">
    <vs-button
      style="position: absolute;top: 2vh; right: 1vw; background-color: #003357;height: 10vh; width: 6vw"
      square
      @click="PanelClose"
    >
      <vs-col>
        <font-awesome-icon style="color: #04a1f9; font-size: 3vw" icon="reply" />
        <div style="font-size: 1vw; color: #04a1f9;">Back</div>
      </vs-col>
    </vs-button>
    <vs-row>
      <div :class="inputStatus ? [' numberTruePan'] : ['numberPan']">
        <vs-row>
          <div class="numberInputPan" @click="selectedPan">
            <p style="margin-top: 2vh">{{ number }}</p>
          </div>
          <div class="backspace">
            <font-awesome-icon style=" font-size: 3vw; " icon="backspace" @click="removeNumber" />
          </div>
        </vs-row>
      </div>
      <div class="callTimePan">
        <P>
          00:00:00
        </P>
      </div>
      <div class="videoConfeTitle">
        <p>
          Video Conference
        </p>
      </div>
    </vs-row>
    <vs-row>
      <div style=" width: 32vw">
        <vs-row justify="space-between">
          <div class="numberPanBtns">
            <vs-row justify="space-between">
              <vs-button
                @click="addNumber(item)"
                v-for="(item, index) in [
                  '1',
                  '2',
                  '3',
                  '4',
                  '5',
                  '6',
                  '7',
                  '8',
                  '9',
                  '*',
                  '0',
                  '#',
                ]"
                :key="index"
                square
                style="height: 7vh; width: 5vw; background-color: #003357; color: #04a1f9; font-size: 2vw; margin-left: 0px; margin-bottom: 1.2vh"
              >
                {{ item }}
              </vs-button>
            </vs-row>
          </div>
          <div style="margin-top: 2vh">
            <vs-button
              square
              style="height: 10vh; width: 8vw; background-color: #003357; color: #04a1f9; font-size: 2vw; margin-right: 0px"
            >
              <vs-col>
                <font-awesome-icon style="color: #04a1f9; font-size: 3vw" icon="phone" />
                <div style="font-size: 1.3vw; color: #04a1f9;">Answer</div>
              </vs-col>
            </vs-button>
          </div>
          <div class="endCall">
            <vs-button
              square
              style="height: 10vh; width: 8vw; background-color: #003357; color: #04a1f9; font-size: 2vw; margin-right: 0px"
            >
              <vs-col>
                <font-awesome-icon style="color: #04a1f9; font-size: 3vw" icon="phone-slash" />
                <div style="font-size: 1.3vw; color: #04a1f9;">End Call</div>
              </vs-col>
            </vs-button>
          </div>
          <div class="call">
            <vs-button
              square
              style="height: 10vh; width: 8vw; background-color: #003357; color: #04a1f9; font-size: 2vw; margin-right: 0px"
            >
              <vs-col>
                <font-awesome-icon style="color: #04a1f9; font-size: 3vw" icon="phone-volume" />
                <div style="font-size: 1.3vw; color: #04a1f9;">Call</div>
              </vs-col>
            </vs-button>
          </div>
        </vs-row>
      </div>

      <div style="width: 10vw; margin-left: 2vw; margin-top:2vh">
        <vs-row direction="column">
          <vs-button
            square
            @click="addContactModal"
            style="height: 10vh; width: 10.5vw; background-color: #003357; color: #04a1f9; font-size: 2vw; margin-right: 0px; margin-left: 0px"
          >
            <vs-row align="center" justify="space-between" direction="column">
              <font-awesome-icon style="color: #04a1f9; font-size: 2.5vw" icon="user-plus" />
              <div class="btn">
                Add
              </div>
            </vs-row>
          </vs-button>
          <vs-button
            square
            style="height: 22.5vh; width: 10.5vw; background-color: #003357; color: #04a1f9; font-size: 2vw; margin-right: 0px; margin-left: 0px"
          >
            <vs-row align="center" justify="space-between" direction="column">
              <font-awesome-icon style="color: #04a1f9; font-size: 3.5vw" icon="video" />
              <div class="btn">
                Video Conference
              </div>
              <div class="btn">
                Call
              </div>
            </vs-row>
          </vs-button>
        </vs-row>
      </div>
      <div class="videoShowPan">
        <font-awesome-icon style="color: #002222; font-size: 8vw; margin-top: 12vh" icon="video" />
        <p style="position: absolute; top: 40vh; right: 40vw;font-size:1vw">SIP PHONE: PASSIVE</p>
      </div>
    </vs-row>
    <vs-row>
      <div class="phoneBook">
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
        <component :is="selected" :setSelectedPhone="setSelectedPhone"></component>
      </div>
      <div class="skypeCall">
        <vs-row justify="space-between">
          <div class="oneselfVideo">
            <font-awesome-icon
              style="color: #002222; font-size: 5vw; margin-top: 12vh"
              icon="video"
            />
          </div>
          <div>
            <vs-button
              square
              style="height:40vh; width: 19vw; background-color: #003357; margin-top: 0px"
            >
              <vs-col>
                <font-awesome-icon style="color: #04a1f9; font-size: 4vw; " icon="globe" />
                <div style="font-size: 1.5vw; margin-top: 2vh">
                  Skype
                </div>
                <div style="font-size: 1.5vw;">
                  Call
                </div>
              </vs-col>
            </vs-button>
          </div>
        </vs-row>
      </div>
    </vs-row>
    <contact-modal
      :isContactModal="showContactMoal"
      :setContactModal="setContactModal"
    ></contact-modal>
    <div class="phoneTitle">
      Phone Control Panel
    </div>
  </div>
</template>
<script>
import PhoneBook from './PhoneBook.vue';
import CallHistory from './CallHistory.vue';
import ContactModal from './ContactModal.vue';
export default {
  data() {
    return {
      tabs: ['PhoneBook', 'CallHistory'],
      selected: 'PhoneBook',
      number: '',
      showContactMoal: false,
      inputStatus: false,
    };
  },
  components: {
    PhoneBook,
    CallHistory,
    ContactModal,
  },
  methods: {
    PanelClose() {
      console.log('hello');
      this.$router.push('/mainPage');
    },
    addNumber(item) {
      this.number = this.number + item;
    },
    removeNumber() {
      console.log('remove=', this.number.length);
      this.number = this.number.slice(0, -1);
    },
    addContactModal() {
      this.showContactMoal = true;
    },
    setContactModal(setting) {
      this.showContactMoal = setting;
    },
    selectedPan() {
      this.inputStatus = true;
    },
    setSelectedPhone(val) {
      this.number = val.phoneNumber;
    },
  },
};
</script>
<style>
.telephonePage {
  height: 97vh;
  widows: 99vw;
  background-color: #001122;
  border: solid #2b3258 0.2vh;
}
.phonePanelClose {
  position: absolute;
  height: 8vh;
  width: 6vw;
  background-color: #003357;
  color: #04a1f9;
  top: 2.5vh;
  right: 1.5vw;
  padding-top: 2vh;
}
.numberPan {
  background-color: #001111;
  color: #04a1f9;
  width: 30vw;
  height: 8vh;
  margin-top: 2vh;
  margin-left: 2vw;
  border: solid #2b2b3b 0.2vh;
  font-size: 2vw;
}
.callTimePan {
  background-color: #001111;
  color: #04a1f9;
  height: 8vh;
  margin-top: 2vh;
  margin-left: 2vw;
  border: solid #2b2b3b 0.2vh;
  width: 10vw;
}
.videoConfeTitle {
  background-color: #001111;
  color: #04a1f9;
  height: 8vh;
  margin-top: 2vh;
  margin-left: 2vw;
  border: solid #2b2b3b 0.2vh;
  width: 40vw;
}
.numberPanBtns {
  margin-top: 2vh;
  margin-left: 2vw;

  width: 20vw;
}
.call {
  position: absolute;
  top: 26vh;
  left: 23.5vw;
}
.endCall {
  position: absolute;
  top: 14vh;
  left: 23.5vw;
}
.videoShowPan {
  background-color: #001111;
  width: 40vw;
  height: 42vh;
  margin-left: 2.5vw;
  border: solid #2b2b3b 0.2vh;
  margin-top: 2vh;
}
.btn {
  color: #04a1f9;
  font-size: 1.5vw;
  margin-top: 1 vh;
}
.phoneBook {
  width: 42.5vw;
  height: 40vh;
  margin-left: 2vw;
}
.skypeCall {
  width: 40.3vw;
  height: 40vh;
  margin-left: 2vw;
  margin-top: 1vh;
}
.oneselfVideo {
  height: 40vh;
  width: 20vw;
  background-color: #001111;
  border: solid #2b2b3b 0.2vh;
}
.phoneTitle {
  position: absolute;
  bottom: 2vh;
  right: 1vw;
  font-size: 1vw;
}
.numberInputPan {
  width: 22vw;
  height: 8vh;
}
.numberTruePan {
  background-color: #001111;
  color: #04a1f9;
  width: 30vw;
  height: 8vh;
  margin-top: 2vh;
  margin-left: 2vw;
  border: solid #6767a3 0.2vh;
  font-size: 2vw;
}
.backspace {
  width: 8vw;
  height: 8vh;
  padding-top: 1vh;
}
</style>
