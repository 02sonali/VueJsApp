import axios from "axios";
import config from "../config";

const agent = axios.create({
  baseURL: config.API_URL,
  timeout: config.API_TIMEOUT_LIMIT,
  headers: { "X-sent-from": "VUE-FRONTEND" }
});
const api = {};
api.get = function(path) {
  return agent
    .get(path)
    .then(response => response)
    .catch(err => err);
};

export default api;
