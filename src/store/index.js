import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeUser: null,
    clock: null,
    workingtime: [],
    managedWorkingtime: null
  },
  mutations: {
    changeActiveUser: (state, user) => state.activeUser = user,
    changeClock: (state, clock) => state.clock = clock,
    changeWorkingtime: (state, workingtime) => state.workingtime = workingtime,
    addWorkingtime: (state, newWorkingtime) => state.workingtime.push(newWorkingtime),
    managedWorkingtime: (state, workingtime) => state.managedWorkingtime = workingtime
  },
  actions: {
    changeActiveUser: ({ commit }, user) => commit('changeActiveUser', user),
    changeClock: ({ commit }, clock) => commit ('changeClock', clock),
    changeWorkingtime: ({ commit }, workingtime) => commit ('changeWorkingtime', workingtime),
    addWorkingtime: ({ commit }, newWorkingtime) => commit ('addWorkingtime', newWorkingtime),
    managedWorkingtime: ({ commit }, workingtime) => commit ('managedWorkingtime', workingtime)
  },
  getters: {
    getUser: state => state.activeUser,
    connectedUser: state => state.activeUser !== null,
    getClock: state => state.clock,
    getWorkingtime: state => state.workingtime,
    managedWorkingtime: state => state.managedWorkingtime
  }
})
