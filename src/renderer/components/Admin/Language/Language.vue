<template>
  <div>
    <br />
    <br />
    <br />
    <br />
    <vs-row justify="center">
      <div class="techTitle">
        <p style="">Language Setting Page</p>
      </div>

      <vs-button
        @click="closeLang"
        style="height: 8vh; margin-top: 0; border: 0.1vh solid #00b4d8"
        square
        color="#29353D"
      >
        close
      </vs-button>
    </vs-row>
    <div style="margin-top: 20vh; ">
      <vs-row justify="center">
        <vs-select v-model="val1" label="Choose Language">
          <vs-option
            v-for="(item, index) in ['Turkish', 'English', 'Русский']"
            :key="index"
            :label="item"
            :value="item"
            >{{ item }}</vs-option
          >
        </vs-select>
      </vs-row>
    </div>
    <div style="margin-top: 10vh">
      <vs-row justify="center">
        <vs-button style="width: 10vw; height: 8vh; background-color:#34a0a4" @click="handleLang"
          >Save</vs-button
        >
      </vs-row>
    </div>
  </div>
</template>
<script>
import store from '../../../store';
export default {
  data() {
    return {
      val1: '',
    };
  },
  methods: {
    closeLang() {
      this.$router.push('/admin');
    },
    handleLang() {
      store.dispatch('changeLang', this.val1);
    },
  },
};
</script>
<style></style>
