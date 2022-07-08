<template>
  <div>
    <br />
    <br />
    <br />
    <div style="font-size: 2vw">Password Page</div>
    <div style="margin-top: 16vh">
      <vs-row justify="center">
        <div style="width:10vw">
          <vs-button
            @click="clear"
            square
            style="background-color: #5390d9; width: 10vw; height: 7vh"
            >Clear</vs-button
          >
          <div style="margin-top: 6vh">
            <vs-button
              @click="exit"
              square
              style="width: 10vw; height: 40vh; background-color: #c9184a; color: #edf6f9; font-size: 2vw"
            >
              Exit
            </vs-button>
          </div>
        </div>
        <div style="width: 30vw;margin-right: 2vw;margin-left: 2vw;">
          <div
            style="margin-top: 1vh; width: 30vw; height: 7vh; background-color: #4a4e69; color: #f2e9e4; font-size: 2vw; border: solid 0.1vh #c9ada7;"
          >
            <p style="margin-top: 2vh">
              {{ value }}
            </p>
          </div>
          <div style="width: 30vw; margin-top: 6vh">
            <vs-row justify="center">
              <vs-button
                @click="handleClick(item)"
                v-for="(item, index) in ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']"
                :key="index"
                style="width: 7vw; height: 8.5vh;font-size: 2vw "
                >{{ item }}</vs-button
              >
            </vs-row>
          </div>
        </div>
        <div style="width: 10vw">
          <vs-button
            square
            style="background-color: #5390d9; width: 10vw; height: 7vh"
            @click="backspace"
            >backspace</vs-button
          >
          <div style="margin-top: 6vh">
            <vs-button
              @click="login"
              square
              style="width: 10vw; height: 40vh; background-color: #52b788; color: #edf6f9; font-size: 2vw"
            >
              Log In
            </vs-button>
          </div>
        </div>
      </vs-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: '',
    };
  },
  methods: {
    handleClick(item) {
      this.value = this.value + item;
    },
    backspace() {
      this.value = this.value.slice(0, -1);
    },
    clear() {
      this.value = '';
    },
    login() {
      if (this.value === '12345') {
        this.$router.push('/admin');
      } else {
        alert('Wrong Password');
      }
    },
    exit() {
      this.$router.push('/mainPage');
    },
  },
};
</script>
<style></style>
