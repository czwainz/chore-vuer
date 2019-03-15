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
  state: {
    households: [],
    activeHouse: {}
  },
  mutations: {
    setHouseholds(state, data) {
      state.households = data
    },
    setOneHouse(state, data) {
      state.activeHouse = data
    }
  },
  actions: {
    getHouseholds({ commit, dispatch, rootState }) {
      api.get('')
        .then(res => {
          commit('setHouseholds', res.data)
        })
    },
    getOneHousehold({ commit, dispatch }, householdId) {
      api.get('' + householdId)
        .then(res => {
          commit('setOneHouse', res.data)
        })
    },
    addHousehold({ commit, dispatch }, payload) {
      api.post('', payload)
        .then(res => {
          dispatch('getHouseholds')
        })
    },
    editHousehold({ commit, dispatch }, payload) {
      api.put('' + payload.householdId, payload)
        .then(res => {
          dispatch('getHouseholds')
        })
    }

  },

})