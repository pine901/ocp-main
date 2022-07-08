<template>
  <div id="pollutionPanel">
    <font-awesome-icon id="pollutionIcon" style="color: #007ea7; font-size: 3vw" icon="bacterium" />

    <div>
      <div style="font-size: 4vw; font-weight:bold;  margin-top: 10vh ">
        Clean
      </div>
    </div>
    <div id="pollutionTitle">Pollution</div>
  </div>
</template>
<script>
export default {};
</script>
<style>
#pollutionPanel {
  background-color: #01172c;
  border: solid #1b2024;
  height: 28vh;
  width: 24vw;
}
#pollutionIcon {
  position: absolute;
  top: 1vh;
  left: 27vw;
}
#pollutionTitle {
  position: absolute;
  bottom: 1vh;
  right: 39vw;
}
</style>
