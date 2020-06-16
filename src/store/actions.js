import api from "../api";

export default {
  socket_connect: function(context) {
    console.log("actions:socket_connect: ", context);
  },
  fetchBars: async function(context) {
    const resp = await api.get("/feed");
    if (resp.message) {
      console.error(resp.message);
    } else if (resp.data) {
      context.commit("updateBars", resp.data);
    }
  }
};
