import Vue from 'vue'
import Vuex from 'vuex'
import { Drag, Drop } from 'vue-drag-drop';
import authStore from '@/stores/authStore'
import dataStore from '@/stores/dataStore'


Vue.use(Vuex)
Vue.component('drag', Drag);
Vue.component('drop', Drop);

export default new Vuex.Store({
  state: {
    user: {}
  },
  modules: {
    authStore,
    dataStore
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    }

  },
  actions: {

  }
})
