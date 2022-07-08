<template>
  <div>
    <br />
    <br />
    <vs-row justify="center">
      <div class="techTitle">
        <p style="">External Gas Alarm Setting Panel</p>
      </div>

      <vs-button
        @click="closeGasAlarm"
        style="height: 8vh; margin-top: 0; border: 0.1vh solid #00b4d8"
        square
        color="#29353D"
      >
        close
      </vs-button>
    </vs-row>
    <div style="margin-top: 5vh">
      <vs-row justify="space-around">
        <div>
          <vs-button style="width: 10vw; height: 8vh; background-color: #28363E"
            >Refresh List</vs-button
          >
        </div>
        <div>
          <vs-row>
            <span style="margin-top: 3vh">
              Status
            </span>
            <span>
              <vs-button
                @click="isStatus = !isStatus"
                :style="
                  isStatus
                    ? {
                        backgroundColor: '#219ebc',
                        width: '7vw',
                        height: '8vh',
                        fontSize: '1.5vw',
                      }
                    : { width: '7vw', height: '8vh', fontSize: '1.5vw', backgroundColor: '#28363E' }
                "
                >{{ isStatus ? 'Active' : 'Passive' }}</vs-button
              >
            </span>
          </vs-row>
        </div>
        <div>
          <vs-row>
            <span style="margin-top: 3vh">Log Saving</span>
            <vs-button
              @click="isLog = !isLog"
              :style="
                isLog
                  ? { backgroundColor: '#219ebc', width: '7vw', height: '8vh', fontSize: '1.5vw' }
                  : { width: '7vw', height: '8vh', fontSize: '1.5vw', backgroundColor: '#28363E' }
              "
              >{{ isLog ? 'Active' : 'Passive' }}</vs-button
            >
          </vs-row>
        </div>
      </vs-row>
    </div>
    <div style="margin-top: 10vh">
      <vs-row>
        <div style="margin-left: 6vw">
          <vs-select v-model="val1" label="Device Name">
            <vs-option
              v-for="(item, index) in devices"
              :key="index"
              :label="item.name"
              :value="item.name"
            >
              {{ item.name }}
            </vs-option>
          </vs-select>
        </div>
        <div style="margin-left: 14vw">
          <vs-select v-model="val2" label="Device Address">
            <vs-option
              v-for="(item, index) in [240, 241, 242, 243, 244, 245, 246, 247]"
              :key="index"
              :label="item"
              :value="item"
            >
              {{ item }}
            </vs-option>
          </vs-select>
        </div>
        <div style="margin-left: 14vw">
          <vs-select v-model="val3" label="Baud Rate">
            <vs-option
              v-for="(item, index) in [9600, 12000, 13000, 17000, 21000, 25000]"
              :key="index"
              :label="item"
              :value="item"
            >
              {{ item }}
            </vs-option>
          </vs-select>
        </div>
      </vs-row>
    </div>
    <div style="margin-top: 8vh">
      <vs-row justify="center">
        <vs-button style="width: 16vw; height: 8vh; background-color:#28363E ">Save</vs-button>
      </vs-row>
    </div>
    <div style="font-size: 1.5vw">
      <vs-row justify="center">
        <div style="margin-top: 5vh">
          <li style="margin-bottom: 4vh">
            Device Name: <strong style="color: white">{{ this.val1 }}</strong>
          </li>
          <li style="margin-bottom: 4vh">
            Latest Device Address: <strong style="color: white">{{ this.val2 }}</strong>
          </li>
          <li style="margin-bottom: 4vh">
            Latest Baud Rate: <strong style="color: white">{{ this.val3 }}</strong>
          </li>
        </div>
      </vs-row>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    closeGasAlarm() {
      this.$router.push('/admin');
    },
  },
  data() {
    return {
      isStatus: false,
      isLog: false,
      devices: [
        { id: 1, name: 'Algoritma' },
        { id: 2, name: 'Arc Med V01' },
        { id: 3, name: 'Arc Med V02' },
        { id: 4, name: 'EmeSys MG34106 V01' },
        { id: 5, name: 'EmeSys MG34106 V02' },
        { id: 6, name: 'Medikar1' },
        { id: 7, name: 'Medikar2' },
        { id: 8, name: 'Medikar3' },
      ],
      val1: '',
      val2: '',
      val3: '',
    };
  },
};
</script>
<style>
.vs-select__label--label {
  padding-bottom: 4vh !important;
  font-size: 1.5vw !important;
}
</style>
