<template>
  <div>
    <div style="margin-top: 10vh">
      <vs-row justify="space-around">
        <vs-input label="SIP Phone Server Address [IP]" v-model="val1" @click="InputClick('ip')">
        </vs-input>
        <vs-input label="SIP Phone User Name" v-model="val2" @click="InputClick('user')">
        </vs-input>
        <vs-input label="SIP Phone Password" v-model="val3" @click="InputClick('password')">
        </vs-input>
        <vs-input label="Proxy Address (Optional)" v-model="val4" @click="InputClick('proxy')">
        </vs-input>
      </vs-row>
    </div>
    <div style="margin-top: 15vh">
      <vs-row>
        <div style="margin-left: 10vw">
          <vs-row>
            <p>RTP:</p>
            <vs-button
              @click="isRTP = !isRTP"
              :style="
                isRTP
                  ? { backgroundColor: '#219ebc', width: '7vw', height: '6vh', fontSize: '1.3vw' }
                  : {
                      width: '7vw',
                      height: '6vh',
                      fontSize: '1.3vw',
                      backgroundColor: '#28363E',
                    }
              "
              >{{ isRTP ? 'Active' : 'Passive' }}</vs-button
            >
          </vs-row>
        </div>
        <div style="margin-left: 15vw">
          <vs-select v-model="sel1" label="Audio Lines">
            <vs-option
              v-for="(item, index) in [
                'pulse',
                'HDA Intel PCH:ALC 662 rev 3 Analogue (hw: 0.0)',
                'samplerate',
                'speexrate',
              ]"
              :key="index"
              :label="item"
              :value="item"
              >{{ item }}</vs-option
            >
          </vs-select>
        </div>
        <div style="margin-left: 15vw">
          <vs-select v-model="sel2" label="Codecs">
            <vs-option
              v-for="(item, index) in ['pcmu', 'gsm', 'g729', 'pcma', 'g722']"
              :key="index"
              :label="item"
              :value="item"
              >{{ item }}</vs-option
            >
          </vs-select>
        </div>
      </vs-row>
    </div>
    <div style="margin-top: 8vh">
      <vs-row justify="center">
        <vs-button style="width: 18vw; height: 7vh; background-color: #29353D; font-size: 1.5vw"
          >Settings Save</vs-button
        >
      </vs-row>
    </div>
    <keyboard
      :isKeyboard="iskeyboard"
      :setKeyboardShow="setKeyboardShow"
      :setAddText="setAddText"
    ></keyboard>
  </div>
</template>
<script>
import Keyboard from '../../Keyboard/Keyboard.vue';
export default {
  components: { Keyboard },
  data() {
    return {
      val1: '',
      val2: '',
      val3: '',
      val4: '',
      isRTP: false,
      sel1: '',
      sel2: '',
      iskeyboard: false,
      status: '',
    };
  },
  methods: {
    InputClick(val) {
      this.iskeyboard = true;
      this.status = val;
    },
    setKeyboardShow(val) {
      this.iskeyboard = val;
    },
    setAddText(item) {
      switch (this.status) {
        case 'ip':
          if (item === 'Backspace') {
            this.val1 = this.val1.slice(0, -1);
          } else {
            this.val1 = this.val1 + item;
          }
          break;
        case 'user':
          if (item === 'Backspace') {
            this.val2 = this.val2.slice(0, -1);
          } else {
            this.val2 = this.val2 + item;
          }
          break;
        case 'password':
          if (item === 'Backspace') {
            this.val3 = this.val3.slice(0, -1);
          } else {
            this.val3 = this.val3 + item;
          }
          break;
        case 'proxy':
          if (item === 'Backspace') {
            this.val4 = this.val4.slice(0, -1);
          } else {
            this.val4 = this.val4 + item;
          }
          break;
        // case 'ip':

        //   if (item === 'Backspace') {
        //     this.val1 = this.val1.slice(0, -1);
        //   } else {
        //     this.val1 = this.val1 + item;
        //   }
        //   break;

        default:
          break;
      }
      // if (item === 'Backspace') {
      //   this.val1 = this.val1.slice(0, -1);
      // } else {
      //   this.val1 = this.val1 + item;
      // }
    },
  },
};
</script>
<style>
.vs-input__label {
  padding-bottom: 4vh;
  font-size: 1.3vw;
}
</style>
