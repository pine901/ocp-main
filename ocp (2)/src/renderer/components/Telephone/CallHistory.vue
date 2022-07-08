<template>
  <div class="callHistory">
    <vs-row justify="space-between">
      <div style="padding-left: 1vw">
        Good Morning
      </div>
      <div>
        <vs-button
          square
          style="height: 32vh; width: 8vw; background-color: #003357; color: #04a1f9; font-size: 2vw;"
        >
          <vs-col>
            <font-awesome-icon style="color: #04a1f9; font-size: 4vw" icon="trash-alt" />
            <div style="font-size: 1.5vw; margin-top: 2vh">
              Clean History
            </div>
          </vs-col>
        </vs-button>
      </div>
    </vs-row>
  </div>
</template>
<script>
export default {};
</script>
<style>
.callHistory {
  border-top: steelblue solid 0.3vh;
  background-color: #001111;
  width: 42.5vw;
  height: 34vh;
  overflow-y: scroll;
}
</style>
