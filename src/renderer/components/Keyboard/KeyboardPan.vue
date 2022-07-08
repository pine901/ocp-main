<template>
  <vs-dialog class="keyboardPan" not-close prevent-close v-model="isKeyboard">
    <div class="inputCtr">
      <div>
        <vs-row justify="space-between">
          <vs-button
            @click="add(item)"
            square
            v-for="(item, index) in ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']"
            :key="index"
            style="background-color: #003355; color: #0077aa; height: 5vh; width: 5.1vw; font-size: 1.2vw; margin: 0"
            >{{ item }}</vs-button
          >
        </vs-row>
      </div>
      <div style="margin-top: 1.5vh">
        <vs-row justify="space-between">
          <vs-button
            @click="add(item)"
            square
            v-for="(item, index) in ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']"
            :key="index"
            style="background-color: #003355; color: #0077aa; height: 5vh; width: 5.1vw; font-size: 1.2vw; margin: 0"
            >{{ item }}</vs-button
          >
        </vs-row>
      </div>
      <div style="padding-right: 1.2vw; padding-left: 1.2vw; margin-top: 1.5vh">
        <vs-row justify="space-around">
          <vs-button
            @click="add(item)"
            square
            v-for="(item, index) in ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']"
            :key="index"
            style="background-color: #003355; color: #0077aa; height: 5vh; width: 5.1vw; font-size: 1.2vw; margin:0"
            >{{ item }}</vs-button
          >
        </vs-row>
      </div>
      <div style="padding-right: 8vw; padding-left: 8vw; margin-top: 1.5vh">
        <vs-row justify="space-around">
          <vs-button
            square
            @click="add(item)"
            v-for="(item, index) in ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Backspace']"
            :key="index"
            style="background-color: #003355; color: #0077aa; height: 5vh; width: 5.1vw; font-size: 1.2vw; margin:0"
            >{{ item }}</vs-button
          >
        </vs-row>
      </div>
      <div style="margin-top: 1.5vh">
        <vs-row justify="space-between">
          <vs-button
            @click="add('-')"
            square
            style="background-color: #003355; color: #0077aa; height: 5vh; width: 11vw; font-size: 1.2vw; margin: 0"
            >-</vs-button
          >
          <vs-button
            @click="add(' ')"
            square
            style="background-color: #003355; color: #0077aa; height: 5vh; width: 34vw; font-size: 1.2vw; margin: 0"
          ></vs-button>
          <vs-button
            @click="add('.')"
            square
            style="background-color: #003355; color: #0077aa; height: 5vh; width: 11vw; font-size: 1.2vw; margin: 0"
            >.</vs-button
          >
        </vs-row>
      </div>
    </div>
    <vs-button
      style="position: absolute;top: 0.3vh; right: 0.5vw; background-color: #003357;height: 6vh; width: 4vw"
      square
      @click="keyClose"
    >
      <vs-col>
        <font-awesome-icon style="color: #04a1f9; font-size: 1vw" icon="reply" />
      </vs-col>
    </vs-button>
  </vs-dialog>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    add(item) {
      this.setAddText(item);
    },
    keyClose() {
      this.setKeyboardShow(false);
    },
  },
  props: ['isKeyboard', 'setKeyboardShow', 'setAddText'],
};
</script>
<style>
@import '../../assets/css/custom_keyboard.css';
</style>
