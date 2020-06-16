export default {
  addUser(state, user) {
    state.Users.push(user);
  },
  editUser(state, index, user) {
    Object.assign(state.Users[index], user);
  },
  deleteUser(state, index) {
    state.Users.splice(index, 1);
  }
};
