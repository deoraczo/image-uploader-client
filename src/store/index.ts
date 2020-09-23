import Vue from "vue";
import Vuex from "vuex";
import UploaderStore from './modules/uploader';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    uploader: UploaderStore
  }
});
