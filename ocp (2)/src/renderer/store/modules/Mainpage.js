const state = {
  // main: 0,
  showModal: false,
  eventLog: [
    {
      date: '2021-4-30 14:30:15',
      val: 'VAV setting changed',
    },
    {
      date: '2021-4-30 14:30:15',
      val: 'VAV setting changed',
    },
    {
      date: '2021-4-30 14:30:15',
      val: 'VAV setting changed',
    },
  ],
};

const mutations = {
  // DECREMENT_MAIN_COUNTER(state) {
  //   state.main -= 1;
  // },
  // INCREMENT_MAIN_COUNTER(state) {
  //   state.main += 1;
  // },
  showModal() {
    console.log('aired');
    state.showModal = true;
  },
  unshowModal() {
    state.showModal = false;
  },
  REGISTER_EVENT(state, payload) {
    state.eventLog.push(payload);
  },
};

const actions = {
  openModal({ commit }) {
    commit('showModal');
  },
  closeModal({ commit }) {
    commit('unshowModal');
  },
  registerEvent({ commit }, payload) {
    commit('REGISTER_EVENT', payload);
  },
  // someAsyncTask({ commit }) {
  //   // do something async
  //   commit('INCREMENT_MAIN_COUNTER');
  // },
};

export default {
  state,
  mutations,
  actions,
};
