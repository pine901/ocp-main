<template>
  <div id="pressPanel">
    <font-awesome-icon
      id="pressIcon"
      style="color: #007ea7; font-size: 3vw"
      icon="tachometer-alt"
    />

    <div>
      <div style="font-size: 4vw; font-weight:bold;  margin-top: 10vh; color: red ">
        -49
      </div>
    </div>
    <div id="pressTitle">Pressure</div>
  </div>
</template>
<script>
export default {};
</script>
<style>
#pressPanel {
  background-color: #01172c;
  border: solid #1b2024;
  height: 28vh;
  width: 24vw;
}
#pressIcon {
  position: absolute;
  left: 1vw;
  top: 1vh;
}
#pressTitle {
  position: absolute;
  bottom: 1vh;
  right: 65vw;
}
</style>
