<template>
  <div id="gasPanel">
    <div style="margin-top: 2vh">
      <vs-row justify="space-around" align="center">
        <div>
          <span style="font-size: 3vw; color: red; font-weight: bold">O2</span>
          <span>
            <font-awesome-icon style="color: red; font-size: 3vw" icon="long-arrow-alt-down" />
          </span>
        </div>
        <div>
          <span style="font-size: 3vw; color: red; font-weight: bold">A4</span>
          <span>
            <font-awesome-icon style="color: red; font-size: 3vw" icon="long-arrow-alt-down" />
          </span>
        </div>
        <div>
          <span style="font-size: 3vw; color: red; font-weight: bold">A7</span>
          <span>
            <font-awesome-icon style="color: red; font-size: 3vw" icon="long-arrow-alt-down" />
          </span>
        </div>
      </vs-row>
      <div style="margin-top: 2vh">
        <vs-row justify="space-around" align="center">
          <div>
            <span style="font-size: 3vw; color: red; font-weight: bold">NO</span>
            <span>
              <font-awesome-icon style="color: red; font-size: 3vw" icon="long-arrow-alt-down" />
            </span>
          </div>
          <div>
            <span style="font-size: 3vw; font-weight: bold">VA</span>
            <span>
              <font-awesome-icon icon="check" style="font-size: 3vw" />
            </span>
          </div>
          <div style="visibility: hidden">
            <span style="font-size: 3vw; color: red; font-weight: bold">A7</span>
            <span>
              <font-awesome-icon style="color: red; font-size: 3vw" icon="long-arrow-alt-down" />
            </span>
          </div>
        </vs-row>
        <div id="gasTitle">Medical Gas Alarm Panel</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
#gasPanel {
  position: relative;
  background-color: #01172c;
  border: solid #1b2024;
  height: 27vh;
  width: 36vw;
}
#gasTitle {
  position: absolute;
  bottom: 1vh;
  right: 0.5vw;
}
</style>
