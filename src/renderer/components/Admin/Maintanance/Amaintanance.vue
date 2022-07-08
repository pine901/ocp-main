<template>
  <div class="admin">
    <br />
    <br />
    <vs-row justify="center">
      <div class="techTitle">
        <p style="">Maintanance Time Control Page</p>
      </div>

      <vs-button
        @click="closeMaintanace"
        style="height: 8vh; margin-top: 0; border: 0.1vh solid #00b4d8"
        square
        color="#29353D"
      >
        close
      </vs-button>
    </vs-row>
    <div style="margin-top: 3vh">
      <vs-row justify="center">
        <div v-for="(item, index) in maintananceBtns" :key="index">
          <p :style="!item.isActive ? { color: '#FF1D01' } : null">
            {{ item.title + item.status }}
          </p>
          <vs-button
            relief
            square
            :active="item.isActive"
            @click="handleClick(item)"
            :style="
              item.isActive
                ? { width: '30vw', height: '8vh', marginTop: '1vh', backgroundColor: '#578C94' }
                : { width: '30vw', height: '8vh', marginTop: '1vh', backgroundColor: '#28363E' }
            "
            >{{ item.isActive ? 'Stop' : 'Start' }}</vs-button
          >
          <p>Elapsed Time: 0 hours</p>
        </div>
      </vs-row>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      maintananceBtns: [
        {
          id: 1,
          name: 'start',
          title: 'OCP Maintanance Time: ',
          isActive: false,
          status: 'Passive',
        },
        {
          id: 2,
          name: 'start',
          title: 'Mainboard Maintanance Time:',
          isActive: false,
          status: 'Passive',
        },
        {
          id: 3,
          name: 'start',
          title: 'BBB Card Maintanance Time: ',
          isActive: false,
          status: 'Passive',
        },
        {
          id: 4,
          name: 'start',
          title: '7 Segment Maintanance Time: ',
          isActive: false,
          status: 'Passive',
        },
        {
          id: 5,
          name: 'Start',
          title: 'Phone Card Maintanance Time: ',
          isActive: false,
          status: 'Passive',
        },
        {
          id: 6,
          name: 'Start',
          title: 'Battery Maintanace Time: ',
          isActive: false,
          status: 'Passive',
        },
      ],
    };
  },
  methods: {
    closeMaintanace() {
      this.$router.push('/admin');
    },
    handleClick(item) {
      item.isActive = !item.isActive;
      item.status = item.isActive ? 'Active' : 'Passive';
    },
  },
};
</script>
<style></style>
