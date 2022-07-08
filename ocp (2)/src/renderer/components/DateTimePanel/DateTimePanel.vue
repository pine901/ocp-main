<template>
  <vs-dialog square not-close prevent-close v-model="isDateShow">
    <vs-row vs-type="flex">
      <vs-col w="2"> </vs-col>
      <vs-col w="8">
        <div>
          <div class="dateShow">
            {{ date }}
          </div>
          <div class="dateNameShow">
            <vs-row justify="space-around">
              <p class="dateName">DAY</p>
              <p class="dateName">MONTH</p>
              <p class="dateName">YEAR</p>
              <p class="dateName">HOUR</p>
              <p class="dateName">MINUTE</p>
            </vs-row>
          </div>
          <div class="dateValShow">
            <vs-row justify="space-between">
              <div class="datePan" @click="selectPan('day')">
                <p style="margin-top: 2vh">{{ day }}</p>
              </div>
              <div class="datePan" @click="selectPan('month')">
                <p style="margin-top: 2vh">{{ month }}</p>
              </div>
              <div class="datePan" @click="selectPan('year')">
                <p style="margin-top: 2vh">{{ year }}</p>
              </div>
              <div class="datePan" @click="selectPan('hour')">
                <p style="margin-top: 2vh">{{ hour }}</p>
              </div>
              <div class="datePan" @click="selectPan('min')">
                <p style="margin-top: 2vh">{{ min }}</p>
              </div>
              <vs-button
                square
                style="background-color: #003357; color: #04a1f9; width: 8.5vw; height: 8vh; margin-right:0px; margin-top: 0px"
                @click="backspace"
              >
                <font-awesome-icon style=" font-size: 3vw; " icon="backspace" />
              </vs-button>
            </vs-row>
          </div>

          <div class="dateBtns">
            <vs-row justify="space-between">
              <div>
                <div class="dateCon1">
                  <div class="dateConPan">
                    <vs-row justify="space-between">
                      <vs-button
                        @click="editDate(item)"
                        v-for="(item, index) in ['1', '2', '3', '4', '5']"
                        :key="index"
                        square
                        style="background-color: #003357; color: #04a1f9; width: 4.5vw; height: 8.5vh; font-size: 2vw; margin-right: 0px; margin-left: 0px; "
                        >{{ item }}</vs-button
                      >
                    </vs-row>
                  </div>
                  <div></div>
                </div>
                <div class="dateCon2">
                  <div class="dateConPan">
                    <vs-row justify="space-between">
                      <vs-button
                        @click="editDate(item)"
                        v-for="(item, index) in ['6', '7', '8', '9', '0']"
                        :key="index"
                        square
                        style="background-color: #003357; color: #04a1f9; width: 4.5vw; height: 8.5vh; font-size: 2vw; margin-right: 0px; margin-left: 0px"
                        >{{ item }}</vs-button
                      >
                    </vs-row>
                  </div>
                </div>
              </div>
              <div>
                <vs-button
                  square
                  style="width: 8.5vw; height: 23vh; background-color: #003357; margin-right: 0px"
                >
                  <font-awesome-icon
                    style="color: #007ea7; font-size: 3vw;  color: #04a1f9"
                    icon="history"
                  />
                </vs-button>
              </div>
            </vs-row>
          </div>
        </div>
      </vs-col>
      <vs-col w="2"> </vs-col>
    </vs-row>
    <div class="datePanClose" @click="closeDateModal">
      <font-awesome-icon style="color: #04a1f9; font-size: 3vw" icon="reply" />
      <div style="font-size: 1vw">Back</div>
    </div>
    <div class="dateTitle">
      Date/Time Control Panel
    </div>
  </vs-dialog>
</template>
<script>
import moment from 'moment';
import store from '../../store';
const today = new Date();
export default {
  data() {
    return {
      day: moment(today).format('DD'),
      month: moment(today).format('MM'),
      year: moment(today).format('YYYY'),
      hour: moment(today).format('hh'),
      min: moment(today).format('mm'),
      date: moment(today).format('DD.MM.YYYY hh:mm:ss'),
      status: 'min',
    };
  },
  props: ['isDateShow', 'setShowDateModal'],
  methods: {
    closeDateModal() {
      this.setShowDateModal(false);
    },
    selectPan(val) {
      this.status = val;
    },
    editDate(item) {
      const date = moment(new Date()).format('YYYY-MM-DD hh:mm:ss');

      store.dispatch('registerEvent', { date, val: 'Date is changed' });
      switch (this.status) {
        case 'year':
          if (this.year.length > 3) {
            this.year = this.year + item;
            this.year =
              this.year[this.year.length - 4] +
              this.year[this.year.length - 3] +
              this.year[this.year.length - 2] +
              this.year[this.year.length - 1];
          } else {
            this.year = this.year + item;
          }

          break;
        case 'month':
          if (this.month.length > 1) {
            this.month = this.month + item;
            this.month = this.month[this.month.length - 2] + this.month[this.month.length - 1];
          } else {
            this.month = this.month + item;
          }

          break;
        case 'day':
          if (this.day.length > 1) {
            this.day = this.day + item;
            this.day = this.day[this.day.length - 2] + this.day[this.day.length - 1];
          } else {
            this.day = this.day + item;
          }
          break;
        case 'min':
          if (this.min.length > 1) {
            this.min = this.min + item;
            this.min = this.min[this.min.length - 2] + this.min[this.min.length - 1];
          } else {
            this.min = this.min + item;
          }
          break;
        case 'hour':
          if (this.hour.length > 1) {
            this.hour = this.hour + item;

            this.hour = this.hour[this.hour.length - 2] + this.hour[this.hour.length - 1];
          } else {
            this.hour = this.hour + item;
          }
          break;
        default:
          break;
      }
    },
    backspace() {
      switch (this.status) {
        case 'year':
          this.year = this.year.slice(0, -1);
          break;
        case 'hour':
          this.hour = this.hour.slice(0, -1);
          break;
        case 'month':
          this.month = this.month.slice(0, -1);
          break;
        case 'min':
          this.min = this.min.slice(0, -1);
          break;
        case 'day':
          this.day = this.day.slice(0, -1);
          break;

        default:
          break;
      }
    },
  },
};
</script>
<style>
.dateShow {
  background-color: #111111;
  color: #04a1f9;
  font-size: 3.5vw;
  font-weight: bold;
  text-align: center;
  width: 43vw;
  border: solid #1b2024 0.1vh;
}

.dateTitle {
  position: absolute;
  bottom: 0.3vh;
  right: 1vw;
  font-size: 1.5vw;
  color: #007ea7;
}
.dateNameShow {
  color: #04a1f9;
  width: 43vw;
  padding-left: 0.5vw;
  padding-right: 0.5vw;
}
.dateValShow {
  color: #04a1f9;
  width: 54vw;
}
.datePan {
  background-color: #111111;
  color: #04a1f9;
  width: 7vw;
  height: 8vh;
  font-size: 1.8vw;
  border: solid #1b2024 0.1vh;
}
.datePanClose {
  position: absolute;
  height: 9vh;
  width: 6vw;
  background-color: #003357;
  color: #04a1f9;
  bottom: 44vh;
  right: 0.6vw;
  padding-top: 2vh;
}
.dateBtns {
  width: 54vw;
  margin-top: 4vh;
}
.dateCon1 {
  width: 43vw;
}
.dateCon2 {
  width: 43vw;
  margin-top: 4vh;
}
.dateConPans {
  width: 54vw;
}
</style>
