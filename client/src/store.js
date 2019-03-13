import Vue from 'vue'
import Vuex from 'vuex'
import { Drag, Drop } from 'vue-drag-drop';


Vue.use(Vuex)
Vue.component('drag', Drag);
Vue.component('drop', Drop);

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
