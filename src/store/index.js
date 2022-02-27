import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    searchState: '',
    breweryList: [],
    breweryPage: {}
  },
  mutations: {
    updateSearch(state, s) {
      state.searchState = s;
    },
    updateBreweryList(state, arr) {
      state.breweryList = arr;
    },
    updateBreweryPage(state, obj) {
      state.breweryPage = obj;
    }
  },
  actions: {
  },
  modules: {
  }
})
