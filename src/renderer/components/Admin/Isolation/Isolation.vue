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
        <p style="">Isolation Error Control Panel</p>
      </div>

      <vs-button
        @click="closeIsolation"
        style="height: 8vh; margin-top: 0; border: 0.1vh solid #00b4d8"
        square
        color="#29353D"
      >
        close
      </vs-button>
    </vs-row>
    <div style="margin-top: 8vh">
      <vs-row justify="center">
        <vs-select v-model="val1" label="Isolation Panel Site">
          <vs-option
            v-for="(item, index) in ['Pasif', 'Asset_RAI21', 'Asset_RAI_51', 'Bender']"
            :key="index"
            :label="item"
            :value="item"
            >{{ item }}</vs-option
          >
        </vs-select>
      </vs-row>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    closeIsolation() {
      this.$router.push('/admin');
    },
  },
  data() {
    return {
      val1: '',
    };
  },
};
</script>
<style></style>
