<template>
  <div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <vs-row justify="center">
      <div class="techTitle">
        <p style="">Ultraviole and Negatoscope Setting</p>
      </div>

      <vs-button
        @click="closeNega"
        style="height: 8vh; margin-top: 0; border: 0.1vh solid #00b4d8"
        square
        color="#29353D"
      >
        close
      </vs-button>
    </vs-row>
    <div style="margin-top: 6vh; display: flex; justify-content: center; align-items: center;">
      <p style="margin-right: 3vw">Status:</p>
      <vs-button
        :style="
          isNtp
            ? { backgroundColor: '#219ebc', width: '7vw', height: '6vh', fontSize: '1.3vw' }
            : { width: '7vw', height: '6vh', fontSize: '1.3vw', backgroundColor: '#28363E' }
        "
        @click="isNtp = !isNtp"
        >{{ isNtp ? 'Active' : 'Passive' }}</vs-button
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isNtp: false,
    };
  },
  methods: {
    closeNega() {
      this.$router.push('/admin');
    },
  },
};
</script>
<style></style>
