import { VuexModule, Action, Mutation, Module } from 'vuex-module-decorators';

@Module({
    namespaced: true
})

export default class UploaderStore extends VuexModule {

    private status = "Upload";
    private formData = {};


    @Mutation
    FILL_FORM(formData: {}) {
        this.formData = formData;
        this.status = "Uploading";
    }

    @Action
    upload(payload: {formData: {}}): void {
        this.context.commit('FILL_FORM', payload.formData);
    }

    get getStatus(): string {
        return this.status;
    }

    get getFormData(): {} {
        return this.formData;
    }

}