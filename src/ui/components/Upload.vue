<template>
  <div class="card">
    <div class="card_header text--center">
      <h1 class="text--title">Upload your image</h1>
      <h2 class="text--subtitle">File should be Jpeg, Png, ...</h2>
    </div>
    <div class="card_body">
      <div class="upload">
        <div class="upload_drag">
          <img :src="require('@/assets/images/image.svg')" alt />
          <span class="upload--text text--center">Drag&Drop your image here</span>
          <input
            type="file"
            class="upload_input"
            title=" "
            ref="fileInput"
            @change="onFileSelected($event)"
          />
        </div>
        <span class="upload--text text--center">Or</span>
      </div>
    </div>
    <div class="card_footer text--center">
      <button class="btn btn_primary" @click="selectFile()">Choose a file</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";

@Component({})
export default class Upload extends Vue {
  $refs!: {
    fileInput: HTMLImageElement;
  };

  onFileSelected(event: any): void {
    const { target } = event;
    const [file] = target.files;
    if (!this.validateImage(file)) {
      return;
    }
    const formData = new FormData();
    formData.append('file', file);
    this.upload({
        formData
    })
  }

  selectFile(): void {
    this.$refs.fileInput.click();
  }

  validateImage(file: File): boolean {
    const mimeTypes = ["image/png", "image/jpg", "image/jpeg"];
    return mimeTypes.indexOf(file.type) > -1;
  }

  @Action('uploader/upload')
  upload!: (payload: {}) => void;
}
</script>

<style lang="scss">
::-webkit-file-upload-button {
  cursor: pointer;
}
.upload {
  padding-top: 30px;
  padding-bottom: 22px;
  &_drag {
    position: relative;
    padding: 36px 0px;
    border: 1px dashed #97bef4;
    border-radius: 12px;
    background-color: #f6f8fb;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 18px;
    &:hover {
      border-width: 2px;
    }
    span {
      margin-top: 36px;
    }
  }
  &_input {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: transparent;
    top: 0;
    opacity: 0;
    cursor: pointer;
  }
  &--text {
    color: #bdbdbd;
    font-size: 12px;
    letter-spacing: var(--letter-spacing);
    display: block;
  }
}
</style>