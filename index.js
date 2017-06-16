import Vue from 'vue'
import Vuex from 'vuex'
import createPersist from 'vuex-localstorage'

import App from './App.vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [createPersist({
    namespace: 'just-links-storage',
  })],
  state: {
    links: []
  },
  mutations: {
    addLink(state, link) {
      state.links.push(link)
    },
    removeLink(state, linkIndex) {
      state.links = state.links
        .filter((_, index) => index !== linkIndex)
    },
  }
})

const app = new Vue({
  el: '#app',
  ...App,
  store,
})
