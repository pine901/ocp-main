<template>
  <div>
    <vs-row>
      <div>
        <vs-col>
          <font-awesome-icon
            style="color: #04a1f9; font-size: 3vw"
            icon="angle-up"
            @click="addVal"
          />
          <div style="font-size: 3vw; color: #04a1f9; margin-top: 2.3vh; margin-bottom: 2.3vh">
            {{ val1 }}
          </div>
          <font-awesome-icon
            style="color: #04a1f9; font-size: 3vw"
            icon="angle-down"
            @click="minusVal"
          />
          <div style="font-size: 1.2vw; color: #04a1f9">Lower Limit</div>
        </vs-col>
      </div>
      <div>
        <vs-col>
          <font-awesome-icon
            style="color: #04a1f9; font-size: 3vw; margin-top: 1vh"
            :icon="settingIcon"
          />
          <div style="font-size: 1.2vw; color:#04a1f9;">{{ settingTitle }}</div>
          <div style="font-size: 1.2vw; color:#04a1f9;">Alarm</div>
          <div style="font-size: 1.2vw; color:#04a1f9;">Settings</div>
          <vs-button
            square
            :style="
              !isActived
                ? { backgroundColor: '#003357', height: '10vh', width: '6vw' }
                : { backgroundColor: '#0077aa', height: '10vh', width: '6vw' }
            "
            @click="toggle"
          >
            <vs-col vs-type="flex">
              <font-awesome-icon
                :style="
                  !isActived
                    ? { color: '#04a1f9', fontSize: '1.5vw' }
                    : { color: 'white', fontSize: '1.5vw' }
                "
                icon="lightbulb"
              />
              <div
                :style="
                  !isActived
                    ? { fontSize: '1.1vw', color: '#04a1f9' }
                    : { fontSize: '1.1vw', color: 'white' }
                "
              >
                Aud.Warn.
              </div>
              <div
                :style="
                  !isActived
                    ? { fontSize: '1.1vw', color: '#04a1f9' }
                    : { fontSize: '1.1vw', color: 'white' }
                "
              >
                {{ isActived ? 'ON' : 'OFF' }}
              </div>
            </vs-col>
          </vs-button>
        </vs-col>
      </div>
      <div>
        <vs-col>
          <font-awesome-icon
            style="color: #04a1f9; font-size: 3vw"
            icon="angle-up"
            @click="addVal2"
          />
          <div style="font-size: 3vw; color: #04a1f9; margin-top: 2.3vh; margin-bottom: 2.3vh">
            {{ val2 }}
          </div>
          <font-awesome-icon
            style="color: #04a1f9; font-size: 3vw"
            icon="angle-down"
            @click="minusVal2"
          />
          <div style="font-size: 1.2vw; color: #04a1f9">Upper Limit</div>
        </vs-col>
      </div>
    </vs-row>
  </div>
</template>
<script>
export default {
  props: {
    val1: [String, Number],
    val2: [String, Number],
    settingTitle: String,
    settingIcon: String,
  },
  data() {
    return {
      isActived: false,
    };
  },
  methods: {
    addVal() {
      if (this.val1 === 100) {
        this.val1 = 100;
      } else {
        this.val1 = this.val1 + 1;
      }
    },
    minusVal() {
      if (this.val1 === 0) {
        this.val1 = 0;
      } else {
        this.val1 = this.val1 - 1;
      }
    },
    addVal2() {
      if (this.val2 === 100) {
        this.val2 = 100;
      } else {
        this.val2 = this.val2 + 1;
      }
    },
    minusVal2() {
      if (this.val2 === 0) {
        this.val2 = 0;
      } else {
        this.val2 = this.val2 - 1;
      }
    },
    toggle() {
      this.isActived = !this.isActived;
    },
  },
};
</script>
<style></style>
