<template>
  <div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <vs-row justify="center">
      <div class="techTitle">
        <p style="">Nuvoton Setting Page</p>
      </div>
      <vs-button
        @click="closeNuvoton"
        style="height: 8vh; margin-top: 0; border: 0.1vh solid #00b4d8"
        square
        color="#29353D"
      >
        close
      </vs-button>
    </vs-row>
    <div style="margin-top: 6vh; display: flex; justify-content: center; align-items: center;">
      <p style="margin-right: 3vw">Nuvoton Status:</p>
      <vs-button
        :style="
          isNuvoton
            ? { backgroundColor: '#219ebc', width: '7vw', height: '6vh', fontSize: '1.3vw' }
            : {
                width: '7vw',
                height: '6vh',
                fontSize: '1.3vw',
                backgroundColor: '#28363E',
              }
        "
        @click="isNuvoton = !isNuvoton"
        >{{ isNuvoton ? 'Active' : 'Passive' }}</vs-button
      >
    </div>
    <div style="margin-top: 10vh">
      <vs-row>
        <div style="margin-left: 15vw">
          <p
            style="margin-top: 0px; font-size: 1.3vw; margin-bottom: 1vh
"
          >
            Extra Wating Time (Milisecond)
          </p>
          <vs-select style="font-size: 1vw" v-model="val1">
            <vs-option
              v-for="(item, index) in [5000, 10000, 15000, 20000, 25000, 30000, 35000]"
              :key="index"
              :value="item"
              :label="item"
              >{{ item }}</vs-option
            >
          </vs-select>
        </div>
        <div style="margin-left: 25vw;">
          <p style="margin-top: 0px; font-size: 1.3vw; margin-bottom: 1vh">Baud Rate</p>

          <vs-select v-model="val2">
            <vs-option
              v-for="(item, index) in [5000, 10000, 15000, 20000, 25000, 30000, 35000]"
              :key="index"
              :value="item"
              :label="item"
              >{{ item }}</vs-option
            >
          </vs-select>
        </div>
      </vs-row>
    </div>
    <div style="margin-top: 10vh">
      <vs-row justify="center">
        <vs-button style="width: 20vw; height: 8vh; font-size: 1.5vw; background-color: #29353D"
          >Save</vs-button
        >
      </vs-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isNuvoton: false,
      val1: '',
      val2: '',
    };
  },
  methods: {
    closeNuvoton() {
      this.$router.push('/admin');
    },
  },
};
</script>
<style></style>
