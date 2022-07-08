<template>
  <div>
    <!-- <p>Hello MainPage</p> -->
    <!-- <vs-button to="/">back</vs-button> -->
    <div>
      <vs-row vs-type="flex" direction="row" justify="space-between">
        <custom-button
          v-for="(item, index) in 9"
          :key="index"
          :buttonStyle="[
            isActived
              ? { backgroundColor: '#00a8e7', width: width, height: height, margin: '0px' }
              : { backgroundColor: '#003357', width: width, height: height, margin: '0px' },
          ]"
          :iconStyle="[isActived ? '#ffffff' : '#007ea7']"
          :titleStyle="[
            isActived
              ? { textAlign: 'center', paddingTop: '10px', color: '#ffffff' }
              : { textAlign: 'center', paddingTop: '10px', color: '#007ea7' },
          ]"
          icon="user-md"
          title="Hello World"
        ></custom-button>
      </vs-row>
    </div>
    <div style="margin-top: 5px">
      <vs-row>
        <vs-col w="2">
          <vs-row class="mh" align="flex-start" justify="center" direction="column">
            <custom-button
              v-for="(item, index) in 4"
              :key="index"
              :buttonStyle="[
                isActived
                  ? {
                      backgroundColor: '#00a8e7',
                      width: width,
                      height: height,
                      margin: '0px',
                    }
                  : {
                      backgroundColor: '#003357',
                      width: width,
                      height: height,
                      margin: '0px',
                    },
              ]"
              :iconStyle="[isActived ? '#ffffff' : '#007ea7']"
              :titleStyle="[
                isActived
                  ? { textAlign: 'center', paddingTop: '10px', color: '#ffffff' }
                  : { textAlign: 'center', paddingTop: '10px', color: '#007ea7' },
              ]"
              icon="user-md"
              title="Hello World"
            ></custom-button>
          </vs-row>
        </vs-col>
        <vs-col w="10"> hello</vs-col>
      </vs-row>
    </div>
  </div>
</template>
<script>
import CustomButton from '../../common/CustomButton.vue';
// console.log('height=', window.innerHeight);
export default {
  name: 'main-page',
  data() {
    return {
      isActived: false,
      height: window.innerHeight / 5,
      width: window.innerWidth / 10,
    };
  },

  components: {
    CustomButton,
  },
  methods: {},
};
</script>
<style></style>
