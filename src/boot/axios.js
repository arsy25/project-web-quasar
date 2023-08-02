import { boot } from 'quasar/wrappers'
import axios from 'axios'

// const baseURL = "http://192.168.251.240:5079/";
// const baseURL = "http://192.168.7.79:5079/";
// const baseURL = "http://192.168.7.121:5079/";
// const baseURL = "http://192.168.1.101:5079/";
 const baseURL = "http://127.0.0.1:5079/";

const api = axios.create({ baseURL : baseURL });

export default boot(({ app }) => {
  app.config.globalProperties.$axios = api;

});

export { api };
