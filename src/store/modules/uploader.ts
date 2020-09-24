import { VuexModule, Action, Mutation, Module } from 'vuex-module-decorators';
import { Image } from '@/domain/Image';

@Module({
    namespaced: true
})

export default class UploaderStore extends VuexModule {

    private status = "Upload";
    private formData = {};
    private image: Image = {
        previewUrl: ''
    };


    @Mutation
    FILL_FORM(formData: {}) {
        this.formData = formData;
        this.status = "Uploading";
    }

    @Mutation
    SET_IMAGE(image: Image) {
        this.image = image;
        this.status = "Uploaded";
    }

    @Mutation
    INIT_STATE() {
        this.image = { previewUrl: ''};
        this.status = "Upload";
        this.formData = {};
    }

    @Action
    upload(payload: {formData: {}}): void {
        this.context.commit('FILL_FORM', payload.formData);
    }

    @Action
    onFinishedLoading(payload: { image: Image } ): void {
        this.context.commit('SET_IMAGE', payload.image);
    }

    @Action
    initState() {
        this.context.commit('INIT_STATE');
    }

    get getStatus(): string {
        return this.status;
    }

    get getFormData(): {} {
        return this.formData;
    }

    get getImage(): Image {
        return this.image;
    }

}