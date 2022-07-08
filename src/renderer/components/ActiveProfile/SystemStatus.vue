<template>
  <div>
    <vs-row>
      <div class="eventLogs">
        <vs-row>
          <ul style="color:#00aaee">
            <li>Input Voltages</li>
            <li>Temperature: 0.16v</li>
            <li>Humidity: 0.16v</li>
            <li>Pressure: 0.15v</li>
            <li>Pollution: 0.15v</li>
            <li>Output Voltages</li>
            <li>Lambs: 3.0v</li>
            <li>Operation Lamp: 10.0v</li>
            <li>Negatoscope: 3.0v</li>
            <li>Heater: 4.0v</li>
            <li>Humidity: 5.0v</li>
            <li>Humidity: 5.0v</li>
            <li>Humidity: 5.0v</li>
          </ul>
          <div></div>
        </vs-row>
      </div>
      <div class="sysStatus">
        <div style="margin-left: 2vw; margin-top: 2vh">
          <div style="font-size: 1.5vw; text-align: left">
            IO Protection Status:
          </div>
          <div style="font-size: 1.5vw; text-align: left">
            Normal
          </div>
        </div>
        <div>
          <vs-button
            square
            style="background-color: #003355;margin-top: 2vh; margin-left: 2vw; width: 8vw; height: 14vh"
          >
            <vs-col>
              <font-awesome-icon style="color: #04a1f9; font-size: 3vw" icon="sync-alt" />
              <div style="font-size: 1.3vw; color: #04a1f9">
                Reset
              </div>
            </vs-col>
          </vs-button>
        </div>
      </div>
    </vs-row>
  </div>
</template>
<script>
export default {};
</script>
<style>
.eventLogs {
  width: 50vw;
  height: 38vh;
  background-color: #001111;
  border-top: solid #2988ad 0.3vh;
  overflow-y: scroll;
  text-align: left;
}

.sysStatus {
  width: 34vw;
  height: 38vh;
  background-color: #001111;
  border-top: solid #2988ad 0.3vh;
  color: #2988ad;
}
</style>
