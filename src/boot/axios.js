import { boot } from 'quasar/wrappers'
import axios, { AxiosInstance } from 'axios'

import { config, envs } from '../helpers/env'

let BASEURL = `${config.BASE_URL}/api`

let api

export default boot(async ({ app, store }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  const BASEURLs = await envs()

  BASEURL = BASEURLs[config.ENV].BASE_URL + '/v1'

  axios.defaults.withCredentials = true

  // axios.defaults.headers.pos  t['Content-Type'] = 'application/x-www-form-urlencoded';
  axios.defaults.headers.post['Content-Type'] = 'application/json'
  // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

  api = axios.create({ baseURL: BASEURL })

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API

  // api.defaults.headers.common.Authorization = 'Bearer ' + store.getters['authModule/getToken']

})

export { api }
