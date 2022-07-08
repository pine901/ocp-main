<template>
  <div>
    <br />
    <br />

    <vs-row justify="center">
      <div class="techTitle">
        <p style="">Phone Setting Panel</p>
      </div>

      <vs-button
        @click="closePhone"
        style="height: 8vh; margin-top: 0; border: 0.1vh solid #00b4d8"
        square
        color="#29353D"
      >
        close
      </vs-button>
    </vs-row>
    <div style="border-bottom: 0.1vh solid">
      <vs-row>
        <p>SIP Status:</p>
        <vs-button
          @click="isStatus = !isStatus"
          :style="
            isStatus
              ? { backgroundColor: '#219ebc', width: '7vw', height: '6vh', fontSize: '1.3vw' }
              : {
                  width: '7vw',
                  height: '6vh',
                  fontSize: '1.3vw',
                  backgroundColor: '#28363E',
                }
          "
          >{{ isStatus ? 'Active' : 'Passive' }}</vs-button
        >
      </vs-row>
    </div>
    <div>
      <component :is="isStatus ? 'Active' : 'Passive'"></component>
    </div>
  </div>
</template>
<script>
import Active from './Active/Active.vue';
import Passive from './Passive/Passive.vue';
export default {
  methods: {
    closePhone() {
      this.$router.push('/admin');
    },
  },
  data() {
    return {
      isStatus: true,
    };
  },
  components: {
    Active,
    Passive,
  },
};
</script>
<style></style>
