<template>
  <div>
    <br />

    <vs-row justify="center">
      <div class="techTitle">
        <p style="">Modbus Control Page</p>
      </div>

      <vs-button
        @click="closeModbus"
        style="height: 8vh; margin-top: 0; border: 0.1vh solid #00b4d8"
        square
        color="#29353D"
      >
        close
      </vs-button>
    </vs-row>
    <div style="margin-top: 2vh">
      <vs-row justify="space-around">
        <vs-col w="3"></vs-col>
        <vs-col w="3">
          <vs-row>
            <span style="margin-top: 2vh">
              Status:
            </span>
            <vs-button
              @click="isStatus = !isStatus"
              :style="
                isStatus
                  ? { backgroundColor: '#219ebc', width: '7vw', height: '6vh', fontSize: '1.3vw' }
                  : { width: '7vw', height: '6vh', fontSize: '1.3vw', backgroundColor: '#28363E' }
              "
              >{{ isStatus ? 'Active' : 'Passive' }}</vs-button
            >
          </vs-row>
        </vs-col>
        <vs-col w="3">
          <vs-row justify="flex-end">
            <span style="margin-top: 2vh">
              Log Save:
            </span>
            <vs-button
              @click="isLog = !isLog"
              :style="
                isLog
                  ? { backgroundColor: '#219ebc', width: '7vw', height: '6vh', fontSize: '1.3vw' }
                  : { width: '7vw', height: '6vh', fontSize: '1.3vw', backgroundColor: '#28363E' }
              "
              >{{ isLog ? 'Active' : 'Passive' }}</vs-button
            >
          </vs-row>
        </vs-col>
        <vs-col w="3"></vs-col>
      </vs-row>
    </div>
    <div style="margin-top: 5vh">
      <vs-row>
        <div style="margin-left: 10vw">
          <vs-select label="Modbus Address" v-model="value1">
            <vs-option v-for="(item, index) in 10" :label="item" :key="index" :value="item"
              >{{ item }}
            </vs-option>
          </vs-select>
        </div>
        <div style="margin-left: 40vw">
          <vs-select label="Baud Rate" v-model="value2">
            <vs-option
              v-for="(item, index) in [9600, 14000, 17000, 20000, 240000, 270000]"
              :label="item"
              :key="index"
              :value="item"
              >{{ item }}
            </vs-option>
          </vs-select>
        </div>
      </vs-row>
    </div>
    <div
      style="margin-top: 1vh; font-size: 2vw; border-bottom: solid 0.1vh;margin-right: 20vw; margin-left: 20vw;"
    >
      <p style="margin-bottom:1vh">Modbus Set Sensor Status</p>
    </div>
    <div
      style="margin-right: 20vw; margin-left: 20vw; border-bottom: 0.1vh solid; padding-bottom: 2vh"
    >
      <vs-row justify="space-between">
        <div v-for="(item, index) in modbusBtns" :key="index">
          <p>{{ item.title }}</p>
          <vs-button
            @click="modbusClick(item)"
            relief
            :style="
              item.isActive
                ? { width: '20vw', backgroundColor: '#578C94' }
                : { width: '20vw', backgroundColor: '#28363E' }
            "
          >
            {{ item.isActive ? 'Active' : 'Passive' }}
          </vs-button>
        </div>
      </vs-row>
    </div>
    <p>If you have made any changed on this page, please save</p>
    <div class="saveBtn">
      <vs-button block style="background-color: #28363E">Save</vs-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: '',
      value2: '',
      modbusBtns: [
        {
          id: 1,
          name: 'start',
          title: 'Set Temperature Status',
          isActive: false,
        },
        {
          id: 2,
          name: 'start',
          title: 'Set Humidity Status',
          isActive: false,
        },
        {
          id: 3,
          name: 'start',
          title: 'Set Room Differental Pressure Status',
          isActive: false,
        },
        {
          id: 4,
          name: 'start',
          title: 'Set Hepa Filter Pollution Status',
          isActive: false,
        },
      ],
      isStatus: false,
      isLog: false,
    };
  },
  methods: {
    closeModbus() {
      this.$router.push('/admin');
    },
    modbusClick(item) {
      item.isActive = !item.isActive;
    },
  },
};
</script>
<style>
.saveBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30vw;
  margin-left: 30vw;
}
</style>
