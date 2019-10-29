import axios, { AxiosRequestConfig } from 'axios'
import Qs from 'qs'
import { APP_TOKEN_KEY } from '../config/default.config'

axios.defaults.baseURL = 'http://49.234.190.126:2300'
axios.defaults.withCredentials = true
axios.defaults.transformRequest = (data = {}) => {
  return Qs.stringify(data)
}
axios.interceptors.response.use((result: AxiosRequestConfig) => result.data)
axios.interceptors.request.use(
  function(config: any) {
    const token = localStorage.getItem(APP_TOKEN_KEY)

    if (!(config.url.includes('getFirstLoginInfo') || config.url.includes('login'))) {
      if (!token) {
        console.log('没有授权')
      }
    }
    /*  if (config.method === 'delete') {
      config.headers['Content-Type'] = ''
     }*/

    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    config.headers.authorization = token || ''
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

/**
 * 配置request请求时的默认参数
 */
axios.interceptors.response.use(function(response) {
  return response
})

export default axios
