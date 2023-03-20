import axios from 'axios'

const address = 'https://port-0-cloudack-6g2llfe1pmto.sel3.cloudtype.app'

export default {
  install(Vue) {
    Vue.prototype.$get = functions.get;
  }
}

export const functions = {
  get: (argv) => {
    return axios.get(`${address}${argv}`);
  }
}