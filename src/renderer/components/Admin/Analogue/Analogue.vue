<template>
  <div>
    <br />
    <br />
    <br />
    <br />
    <vs-row justify="center">
      <div class="techTitle">
        <p style="">Analogue Entry Type Setting</p>
      </div>

      <vs-button
        @click="closeAnanlogue"
        style="height: 8vh; margin-top: 0; border: 0.1vh solid #00b4d8"
        square
        color="#29353D"
      >
        close
      </vs-button>
    </vs-row>
    <div class="analog-select" style="margin-right: 25vw; margin-left: 25vw; font-size: 1.5vw">
      <vs-row justify="space-between">
        <div>
          <!-- 
          <vs-radio v-model="picked" val="1">
            Option A
          </vs-radio>
          <vs-radio v-model="picked" val="2" style="margin-top: 2vh">
            Option B
          </vs-radio> -->
          <p>Temperature</p>

          <input type="radio" name="one" value="One" v-model="picked" />
          <label for="one">Option A </label>

          <br />
          <br />
          <input type="radio" id="two" value="Two" v-model="picked" />
          <label for="two">Option B</label>
          <br />
        </div>
        <div style="margin-right: 4vw">
          <p>Hepa Filter</p>
          <input type="radio" id="one" value="One" v-model="picked1" />
          <label for="one">Option A</label>
          <br />
          <br />
          <input type="radio" id="two" value="Two" v-model="picked1" />
          <label for="two">Option B</label>
          <br />
        </div>
      </vs-row>
      <div style="margin-top: 4vh"></div>
      <vs-row justify="space-between">
        <div>
          <p>Humidity</p>
          <input type="radio" id="one" value="One" v-model="picked2" />
          <label for="one">Option A</label>
          <br />
          <br />
          <input type="radio" id="two" value="Two" v-model="picked2" />
          <label for="two">Option B</label>
          <br />
        </div>
        <div>
          <p>Room Diffrential Pressure</p>
          <input type="radio" id="one" value="One" v-model="picked3" />
          <label for="one">Option A</label>
          <br />
          <br />
          <input type="radio" id="two" value="Two" v-model="picked3" />
          <label for="two">Option B</label>
          <br />
        </div>
      </vs-row>
    </div>
    <div
      style="font-size: 1.5vw; display: flex; justify-content: center; align-item: center; margin-top: 5vh"
    >
      <vs-button style="width: 10vw; height: 8vh; background-color: #28363E">Save</vs-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      picked: 'One',
      picked1: 'One',
      picked2: 'One',
      picked3: 'One',
    };
  },
  methods: {
    closeAnanlogue() {
      this.$router.push('/admin');
    },
  },
};
</script>
<style>
.analog-select input {
  height: 3vh;
}
/* .analog-select label {
  display: inline-block;
  width: 90%;
  text-align: left;
} */
</style>
