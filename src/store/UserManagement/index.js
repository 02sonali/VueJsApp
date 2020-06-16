// import state from "./";
// import actions from "./actions";
// import mutations from "./mutations";
// import getters from "./getters";

// export default {
//   state,
//   actions,
//   mutations,
//   getters
// };
import Vue from "vue";
import Vuex from "vuex";
import Users from "../../data/users.json";

Vue.use(Vuex);
const UserMgt = {
  state: {
    Users: Users.users
  },
  getters: {
    Users: state => {
      return state.Users;
    }
  },
  actions: {
    addUser(context, user) {
      context.commit("addUser", user);
    },
    editUser(context, index, user) {
      context.commit("editUser", index, user);
    },
    deleteUser(context, index) {
      context.commit("deleteUser", index);
    }
  },
  mutations: {
    addUser(state, user) {
      state.Users.push(user);
    },
    editUser(state, index, user) {
      Object.assign(state.Users[index], user);
    },
    deleteUser(state, index) {
      state.Users.splice(index, 1);
    }
  }
};

export default UserMgt;
