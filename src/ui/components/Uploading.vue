<template>
  <div class="card fadeIn">
    <div class="card_header">
      <h1 class="text--title">Uploading...</h1>
    </div>
    <div class="card_body">
      <div class="progressBar">
        <div class="bar bar--loading"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import delay from "@/utils/utils";
import { Getter, Action } from "vuex-class";
import { lazyInject } from "@/ioc/container";
import { UploadService } from "../../services/UploaderService";
import { TYPES } from "../../ioc/types";
import { Image } from "../../domain/Image";

@Component({})
export default class Uploading extends Vue {
  @lazyInject(TYPES.UPLOAD_SERVICE)
  private uploadService!: UploadService;
  private image!: Image;

  @Getter("uploader/getFormData")
  formData!: {};

  async mounted() {
    await delay(3000);
    this.uploadService.uploadFile(this.formData)
      .then(image => {
        this.onFinishedLoading({
            image
        })
      })
      .catch(err => {
        console.log(err);
      });
  }

  @Action('uploader/onFinishedLoading')
  onFinishedLoading!: (payload: { image: Image }) => void;


}
</script>

<style lang="scss" scoped>
.card_body {
  padding-top: 14px;
}
.progressBar {
  background-color: #f2f2f2;
  position: relative;
  width: 100%;
  height: 6px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  .bar {
    position: absolute;
    height: 100%;
    width: 100px;
    border-radius: inherit;
    background-color: var(--color-primary);
    &--loading {
      animation: loading 2s infinite;
    }
  }
}

@keyframes loading {
  to {
    left: 100%;
  }
  from {
    left: 0;
  }
}
</style>