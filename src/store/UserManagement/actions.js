export default {
  addUser(context, user) {
    context.commit("addUser", user);
  },
  editUser(context, index, user) {
    context.commit("editUser", index, user);
  },
  deleteUser(context, index) {
    context.commit("deleteUser", index);
  }
};
