<template>
  <div class="admin">
    <br />
    <br />

    <div class="upTitle">
      <vs-row justify="center">
        <div class="techTitle">
          <p style="">Admin Page</p>
        </div>

        <vs-button
          @click="closeAdmin"
          style="height: 8vh; margin-top: 0;border: 0.1vh solid #00b4d8"
          square
          color="#29353D"
        >
          close
        </vs-button>
      </vs-row>
      <vs-row justify="space-around">
        <vs-button
          :key="index"
          v-for="(item, index) in adminBtns"
          :style="
            item.isActive
              ? {
                  width: '20vw',
                  height: '8vh',
                  marginTop: '5vh',
                  backgroundColor: '#578C94',
                }
              : {
                  width: '20vw',
                  height: '8vh',
                  marginTop: '5vh',
                  backgroundColor: '#28363E',
                }
          "
          relief
          square
          :active="item.isActive"
          @click="handleClick(item)"
        >
          {{ item.status !== null ? item.name + item.status : item.name }}
        </vs-button>
        <div v-if="isStandBy" style="margin-top:5vh">
          <vs-row>
            <!-- <input
              :value="input"
              class="input"
              @input="onInputChange"
              placeholder="Tap on the virtual keyboard to start"
            /> -->
            <vs-input
              label="SIP Phone Server Address [IP]"
              @input="onInputChange"
              v-model="input"
              @click="inputClick"
            >
            </vs-input>
            <vs-dialog v-model="isKeyboard">
              <vs-row>
                <vs-input
                  label="SIP Phone Server Address [IP]"
                  @input="onInputChange"
                  v-model="input"
                  @click="inputClick"
                >
                </vs-input>

                <SimpleKeyboard @onChange="onChange" @onKeyPress="onKeyPress" :input="input" />
              </vs-row>
            </vs-dialog>

            <!-- <keyboard :options="keyboardOption" class="ui-keyboard-case" v-model="pym"></keyboard> -->

            <p style="margin-left: 1vw">minute(s)</p>
            <vs-button @click="isStanBySet">Save</vs-button>
          </vs-row>
        </div>
      </vs-row>
    </div>
    <!-- <keyboard
      :isKeyboard="isKeyboard"
      :setKeyboardShow="setKeyboardShow"
      :setAddText="setAddText"
    ></keyboard> -->
    <!-- <keyboard :options="keyboardOption" class="ui-keyboard-case" v-model="pym"></keyboard> -->
  </div>
</template>
<script>
// import Keyboard from '../Keyboard/Keyboard.vue';
// import { Keyboard } from 'vue-virtual-keyboard';
import SimpleKeyboard from '../../../common/SimpleKeyboard';
import '../../../common/Key.css';

export default {
  // components: { Keyboard },
  components: { SimpleKeyboard },

  data() {
    return {
      adminBtns: [
        {
          id: 1,
          name: 'Maintanance Times',
          isActive: false,
          status: null,
        },
        {
          id: 2,
          name: 'Gas Alarm Panel',
          isActive: false,
          status: null,
        },
        {
          id: 3,
          name: 'Delete License',
          isActive: false,
          status: null,
        },
        {
          id: 4,
          name: 'Modbus Settings',
          isActive: false,
          status: null,
        },
        {
          id: 5,
          name: 'Pollution Panel Value',
          isActive: false,
          status: null,
        },
        {
          id: 6,
          name: 'Debug Terminal',
          isActive: false,
          status: null,
        },
        {
          id: 7,
          name: 'Isolation Panel',
          isActive: false,
          status: null,
        },
        {
          id: 8,
          name: 'Show UV and Negatoskop',
          isActive: false,
          status: null,
        },
        {
          id: 9,
          name: 'Show Unresolving Message: ',
          isActive: false,
          status: 'Passive',
        },
        {
          id: 10,
          name: 'Show Humidity set Buttons: ',
          isActive: false,
          status: 'Passive',
        },
        {
          id: 11,
          name: 'Phone Settings',
          isActive: false,
          status: null,
        },
        {
          id: 12,
          name: 'NTP(Network Timing Protocol) Settings',
          isActive: false,
          status: null,
        },
        {
          id: 13,
          name: 'Nuvoton(Voice Instruction) Settings',
          isActive: false,
          status: null,
        },
        {
          id: 14,
          name: 'Language Settings',
          isActive: false,
          status: null,
        },
        {
          id: 15,
          name: 'Stand By Settings:',
          isActive: false,
          status: 'Passive',
        },
        {
          id: 16,
          name: 'SSH/FTP: ',
          isActive: false,
          status: 'Passive',
        },
        {
          id: 17,
          name: 'IO Control: ',
          isActive: false,
          status: 'Passive',
        },
        {
          id: 18,
          name: 'Dali Dimer Settings(L1, L2, L3): ',
          isActive: false,
          status: 'Passive',
        },
        {
          id: 19,
          name: 'Analogue Input Type Settings',
          isActive: false,
          status: null,
        },
      ],
      isKeyboard: false,
      val1: '',
      isStandBy: false,
      pym: '',
      keyboardOption: {
        layout: 'international',
        // usePreview: false,
        // stickyShift: false,

        css: {
          container: 'keyboardContainer',
          input: 'ui-keyboard-case',
        },
        // language: 'en',
        // display: {
        //   // overwrite key display
        //   accept: 'Submit',
        //   bksp: 'Delete',
        //   cancel: 'Cancel',
        //   enter: 'Enter',
        //   alt: 'alt',
        // },
      },
      input: '',
    };
  },
  methods: {
    handleClick(item) {
      item.isActive = !item.isActive;
      if (item.status === null) {
        item.status = null;
      } else {
        item.status = item.isActive ? 'Active' : 'Passive';
      }

      // item.status = item.status !== null ? (item.isActive ? 'Active' : 'Passive') : null;
      switch (item.id) {
        case 1:
          this.$router.push('/adminMaintanace');
          break;
        case 4:
          this.$router.push('/adminModbus');
          break;
        case 12:
          this.$router.push('/adminNtp');
          break;
        case 13:
          this.$router.push('/adminNuvoton');
          break;
        case 19:
          this.$router.push('/adminAnalogue');
          break;
        case 2:
          this.$router.push('/adminGas');
          break;
        case 7:
          this.$router.push('/adminIsolation');
          break;
        case 11:
          this.$router.push('/adminPhone');
          break;
        case 8:
          this.$router.push('/adminNega');
          break;
        case 6:
          this.$router.push('/adminMessage');
          break;
        case 14:
          this.$router.push('/adminLang');
          break;
        case 5:
          this.$router.push('/adminPollution');
          break;
        case 15:
          this.isStandBy = !this.isStandBy;
          break;
        case 3:
          window.confirm('Do you sure to license delete?');
          break;
        default:
          break;
      }
    },
    closeAdmin() {
      this.$router.push('/mainPage');
    },
    inputClick() {
      this.isKeyboard = true;
    },
    // setKeyboardShow(val) {
    //   this.isKeyboard = val;
    // },
    // setAddText(item) {
    //   if (item === 'Backspace') {
    //     this.val1 = this.val1.slice(0, -1);
    //   } else {
    //     this.val1 = this.val1 + item;
    //   }
    // },
    isStanBySet() {
      this.isStandBy = false;
    },
    onChange(input) {
      this.input = input;
    },
    onKeyPress(button) {
      console.log('button', button);
    },
    onInputChange(input) {
      this.input = input.target.value;
    },
  },
};
</script>
<style>
input.keyboard-wrapper {
  width: 10vw;
  height: 6vh;
  background-color: white;
  border-radius: 4px;
}
.ui-keyboard-case {
  width: 10vw;
  height: 6vh;
  background-color: white;
  border-radius: 4px;
}

.admin {
  height: 97vh;
  width: 98vw;
  background-color: #071122;
}
.techTitle {
  margin-right: 2vw;
  width: 50vw;
  height: 8vh;
  font-size: 2.5vw;
  color: #dae2e7;
  /* background-color: rgb(7, 43, 23); */
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.1vh solid #00b4d8;
}
</style>
