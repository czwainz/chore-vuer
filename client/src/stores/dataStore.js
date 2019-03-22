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

let apiKey = "?api_key=191et5ltw1pAORwrsOLBoruA7MRltMtr&"

let _gif = Axios.create({
  baseURL: 'http://api.giphy.com/v1/gifs/',
  timeout: 3000
})

export default ({
  state: {
    households: [],
    activeHouse: {},
    lists: [],
    gifs: []
  },
  mutations: {
    setHouseholds(state, data) {
      state.households = data
    },
    setOneHouse(state, data) {
      state.activeHouse = data
    },
    setLists(state, data) {
      state.lists = data
    },
    setGifs(state, data) {
      state.gifs = data
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
    },
    deleteHousehold({ commit, dispatch }, payload) {
      api.delete('' + payload)
        .then(res => {
          dispatch('getHouseholds')
          router.push({ name: 'households' })
        })
    },
    //LISTS
    getLists({ commit, dispatch }, payload) {
      api.get(payload + '/lists')
        .then(res => {
          commit('setLists', res.data)
        })
    },
    addList({ commit, dispatch }, payload) {
      api.post('lists/', payload)
        .then(res => {
          dispatch('getLists', payload.householdId)
        })
    },
    getGifs({ commit, dispatch }) {
      _gif.get('trending' + apiKey)
        .then(res => {
          commit('setGifs', res.data.data)
        })
    }
  },

})