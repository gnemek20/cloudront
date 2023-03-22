import axios from 'axios'

// const address = 'https://port-0-cloudack-6g2llfe1pmto.sel3.cloudtype.app'
const address = 'http://waat.kro.kr:3000'

export default {
  install(Vue) {
    Vue.prototype.$get = functions.get;
    Vue.prototype.$post = functions.post;
  }
}

export const functions = {
  get: (argv) => {
    return axios.get(`${address}${argv}`);
  },

  post: (argv, data) => {
    return axios.post(`${address}${argv}`, data);
  }
}