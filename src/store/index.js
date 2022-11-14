import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      someState: 0,
    }
  },
  mutations: {
    setSomeState(state, modifer) {
      state.someState += modifer;
    }
  },
  getters: {
    someState(state) {
      return state.someState;
    }
  }
});

export default store;
