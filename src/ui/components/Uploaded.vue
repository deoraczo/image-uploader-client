<template>
    <div class="card fadeIn">
        <div class="card_header text--center">
            <button class="btn btn_back" @click="backUpload()">
                <i class="material-icons">keyboard_backspace</i>
            </button>
            <div class="success">
                <i class="material-icons">check_circle</i>
            </div>
            <h1 class="text--title">Uploaded Successfully!</h1>
        </div>
        <div class="card_body">
            <div class="cover">
                <img :src="image.previewUrl" alt="" class="cover--preview">
            </div>
        </div>
        <div class="card_footer">
            <div class="copy">
                <input type="text" class="copy--input" :value="image.previewUrl" ref="inputCopy">
                <button class="btn btn_primary" @click="copy()">Copy Link</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { Image } from '../../domain/Image';

@Component({})
export default class Uploaded extends Vue {

    $refs!: {
        inputCopy: HTMLInputElement
    }

    @Getter('uploader/getImage')
    image!: Image;

    @Action('uploader/initState')
    initState!: () => void;

    copy(): void {
        if(this.image.previewUrl) {
            this.$refs.inputCopy.select();
            document.execCommand('copy');
        }
    }

    backUpload(): void {
        this.initState();
    }
}
</script>

<style lang="scss" scoped>
.success {
    i {
        color: #219653;
        font-size: 35px;
    }
}
.cover {
    padding: 26px 0;
    text-align: center;
    overflow: hidden;
    &--preview {
        height: 220px;
        border-radius: 12px;
    }

}
.copy {
    border: 1px solid #E0E0E0;
    background-color: #F6F8FB;
    border-radius: 8px;
    display: flex;
    &--input {
        flex: 1;
        padding: 0 12px;
        border: none;
        border-radius: inherit;
        font-size: 9px;
        text-overflow: ellipsis;
        color: #4F4F4F;
    }
}
</style>