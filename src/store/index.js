import Vue from "vue";
import Vuex from "vuex";

import config from "../config";

import initState from "./init";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

import UserMgt from "./UserManagement";

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: config.ENV === "DEV",
  state: { ...initState, ...UserMgt.state },
  getters: { ...getters, ...UserMgt.getters },
  actions: { ...actions, ...UserMgt.actions },
  mutations: { ...mutations, ...UserMgt.mutations }
});

export default store;
