import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const state = {
  items: [],
  showTasks: "all"
};

export const mutations = {
  FILTER_TASKS: (state, filterType) => (state.showTasks = filterType),
  ADD_TODO_TASK: (state, payload) => state.items.push(payload)
};

export const actions = {
  filterTasks: ({ commit }, payload) => commit("FILTER_TASKS", payload),
  addTodoTask: ({ commit }, payload) => commit("ADD_TODO_TASK", payload)
};

export const getters = {
  showTasks: state => state.showTasks,
  items: state => {
    if (state.showTasks !== "all") {
      const FILTER_TASKS = state.showTasks === "completed" ? true : false;
      return state.items.filter(item => item.isComplete === FILTER_TASKS);
    }

    return state.items;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
