<template>
  <div>
    <br />
    <br />
    <vs-row justify="center">
      <div class="techTitle">
        <p style="">NTP(Network Time Protocol) Setting Page</p>
      </div>

      <vs-button
        @click="closeNtp"
        style="height: 8vh; margin-top: 0; border: 0.1vh solid #00b4d8"
        square
        color="#29353D"
      >
        close
      </vs-button>
    </vs-row>
    <div style="margin-top: 6vh; display: flex; justify-content: center; align-items: center;">
      <p style="margin-right: 3vw">NTP Status:</p>
      <vs-button
        :style="
          isNtp
            ? { backgroundColor: '#219ebc', width: '7vw', height: '6vh', fontSize: '1.3vw' }
            : {
                width: '7vw',
                height: '6vh',
                fontSize: '1.3vw',
                backgroundColor: '#28363E',
              }
        "
        @click="isNtp = !isNtp"
        >{{ isNtp ? 'Active' : 'Passive' }}</vs-button
      >
    </div>
    <div v-if="isNtp">
      <div style="margin-top: 5vh; margin-left: 20vw; margin-right: 10vw">
        <vs-row>
          <div>
            <vs-button @click="clear" style="width: 10vw; height: 7vh; background-color: #29353D">
              Clear
            </vs-button>
          </div>
          <div style="margin-top: 1vh">
            <vs-input label="NTP Server Address (IP)" v-model="val"> </vs-input>
          </div>
          <div>
            <vs-button
              @click="backspace"
              style="width: 10vw; height: 7vh; background-color: #29353D"
            >
              backspace
            </vs-button>
          </div>

          <div class="center con-selects" style="margin-top: 1vh">
            <vs-select v-model="val1" label="MTP GMT Settings">
              <vs-option
                v-for="(item, index) in ['GMT-1', 'GMT-2', 'GMT-3', 'GMT-4']"
                :key="index"
                :label="item"
                :value="item"
              >
                {{ item }}
              </vs-option>
            </vs-select>
          </div>
        </vs-row>
        <vs-row justify="center">
          <div style="width: 20vw; margin-top: 6vh">
            <vs-row justify="center">
              <vs-button
                @click="handleClick(item)"
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
                  ':',
                  '0',
                  '.',
                ]"
                :key="index"
                style="width: 5vw; height: 7vh;font-size: 2vw "
                >{{ item }}</vs-button
              >
            </vs-row>
          </div>
          <div style="margin-top: 20vh">
            <vs-button style="width: 10vw; height: 8vh;font-size: 1.5vw; background-color:#52b69a"
              >Save</vs-button
            >
          </div>
        </vs-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isNtp: false,
      val1: '',
      val: '',
    };
  },
  methods: {
    closeNtp() {
      this.$router.push('/admin');
    },
    handleClick(item) {
      this.val = this.val + item;
    },
    backspace() {
      this.val = this.val.slice(0, -1);
    },
    clear() {
      this.val = '';
    },
  },
};
</script>
<style></style>
