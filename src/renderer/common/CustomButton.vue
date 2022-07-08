<template>
  <vs-button :style="buttonStyle" size="large" square icon v-on:click="handleClick(id)">
    <vs-col>
      <font-awesome-icon :color="iconStyle" :icon="icon" size="3x" />
      <div :style="titleStyle">
        {{ title }}
      </div>
    </vs-col>
  </vs-button>
</template>
<script>
import store from '../store';
export default {
  name: 'custom-button',
  data() {
    return {
      //   buttonStyle: {
      //     backgroundColor: '#003357',
      //     width: '100px',
      //     height: '100px',
      //   },
      //   iconStyle: {
      //     color: '#007ea7',
      //   },
      //   titleStyle: {
      //     textAlign: 'center',
      //     paddingTop: '10px',
      //     color: '#007ea7',
      //   },
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    // handleClick: {
    //   type: Function,
    // },
    buttonStyle: {
      type: Array,
      required: true,
    },
    titleStyle: {
      type: Array,
      required: true,
    },
    iconStyle: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleClick(val) {
      switch (val) {
        case 'logout':
          this.$router.push('/');
          break;
        case 'air':
          console.log('air');
          store.dispatch('openModal');
          break;
        case 'lam1':
          console.log('air');
          store.dispatch('closeModal');
          break;
        default:
          break;
      }
      return 0;
    },
  },
};
</script>
<style></style>
