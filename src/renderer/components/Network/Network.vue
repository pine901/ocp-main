<template>
  <vs-dialog prevent-close v-model="isNetworkShow" not-close square>
    <div style="margin-top: 16vh">
      <vs-row justify="space-around">
        <vs-button
          @click="openPdf"
          square
          style="height: 24vh;margin-top: 1.5vh; width: 12vw; background-color: #003357; color: #007ea7;"
        >
          <vs-col>
            <div>
              <font-awesome-icon style="color: #007ea7; font-size: 3vw" icon="file-pdf" />
            </div>
            <div style="font-size: 1.5vw; margin-top: 1vw">PDF File</div>
          </vs-col>
        </vs-button>
        <vs-button
          square
          style="height: 24vh;margin-top: 1.5vh; width: 12vw; background-color: #003357; color: #007ea7;"
        >
          <vs-col>
            <div>
              <font-awesome-icon style="color: #007ea7; font-size: 3vw" icon="network-wired" />
            </div>
            <div style="font-size: 1.5vw; margin-top: 1vw">Web Browser</div>
          </vs-col>
        </vs-button>
        <vs-button
          square
          style="height: 24vh;margin-top: 1.5vh; width: 12vw; background-color: #003357; color: #007ea7;"
        >
          <vs-col>
            <div>
              <font-awesome-icon style="color: #007ea7; font-size: 3vw" icon="globe" />
            </div>
            <div style="font-size: 1.5vw; margin-top: 1vw">Skype</div>
          </vs-col>
        </vs-button>
        <vs-button
          square
          style="height: 24vh;margin-top: 1.5vh; width: 12vw; background-color: #003357; color: #007ea7;"
        >
          <vs-col>
            <div>
              <font-awesome-icon style="color: #007ea7; font-size: 3vw" icon="user-friends" />
            </div>
            <div style="font-size: 1.5vw; margin-top: 1vw">Teamview</div>
          </vs-col>
        </vs-button>
      </vs-row>
    </div>
    <div class="netTitle">
      Other Page Control Panel
    </div>
    <div>
      <vs-button
        style="position: absolute;top: 0.3vh; right: 0.5vw; background-color: #003357;height: 10vh; width: 6vw"
        square
        @click="NetClose"
      >
        <vs-col>
          <font-awesome-icon style="color: #04a1f9; font-size: 3vw" icon="reply" />
          <div style="font-size: 1vw; color: #04a1f9;">Back</div>
        </vs-col>
      </vs-button>
    </div>
    <pdf-page :isPdfpage="isPdfpage" :setShowPdfpage="setShowPdfpage"></pdf-page>
  </vs-dialog>
</template>
<script>
import PdfPage from '../PdfPage/PdfPage.vue';
export default {
  data() {
    return {
      isPdfpage: false,
    };
  },
  components: { PdfPage },
  props: ['isNetworkShow', 'setShowNetModal'],
  methods: {
    NetClose() {
      this.setShowNetModal(false);
    },
    openPdf() {
      this.isPdfpage = true;
    },
    setShowPdfpage(setting) {
      this.isPdfpage = setting;
    },
  },
};
</script>
<style>
.netTitle {
  font-size: 1.2vw;
  color: #1785df;
  position: absolute;
  bottom: -10vh;
  right: 1vw;
}
</style>
