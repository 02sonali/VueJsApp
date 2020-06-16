export default {
  // WEB SOCKET MUTATIONS
  SOCKET_ONOPEN: (state, event) => {
    console.log("SOCKET CONNECTED");
  },
  SOCKET_ONMESSAGE: (state, message) => {
    console.log(message);
    state.dashboard.bars = message.dataArray;
    state.dashboard.servers = message.serverInstances;
  },
  SOCKET_ONERROR: (state, event) => {
    console.error("SOCKET ERROR: ", event);
  },
  SOCKET_ONCLOSE: (state, event) => {
    console.log("SOCKET CLOSED: ", event);
  },

  // CUSTOM MUTATIONS
  updateBars: (state, payload) => {
    state.dashboard.bars.splice(0, state.dashboard.bars.length, ...payload);
  }
};
