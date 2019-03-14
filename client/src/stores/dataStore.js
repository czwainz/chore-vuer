import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from '../router'

Vue.use(Vuex)

let api = Axios.create({
  baseURL: "//localhost:3000/api/household",
  timeout: 3000,
  withCredentials: true
})

export default ({
  mutations: {
    setHouseholds(state, data) {
      state.households = data
    }

  },
  actions: {
    getHouseholds({ commit, dispatch }) {
      api.get('')
        .then(res => {
          commit('setHouseholds', res.data)
        })
    },
    addHousehold({ commit, dispatch }, payload) {
      api.post('', payload)
        .then(res => {
          debugger
          dispatch('getHouseholds')
        })
    }

  },

})