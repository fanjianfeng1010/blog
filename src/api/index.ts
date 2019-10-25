import axios, { AxiosRequestConfig } from 'axios'
import Qs from 'qs'
import JWT from 'jsonwebtoken'

const jsonwebtoken = 'NODEBLOG/blog.fanjianfeng1010.com/TOKEN'

const token = JWT.sign({ account: '36226015', roles: ['admin'] }, jsonwebtoken, {
  expiresIn: 60 * 60 * 12
})

axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.withCredentials = true
axios.defaults.transformRequest = (data = {}) => Qs.stringify(data)
axios.interceptors.response.use((result: AxiosRequestConfig) => result.data)
axios.interceptors.request.use(
  function(c: any) {
    const tokenKey = jsonwebtoken
    const token = localStorage.getItem(tokenKey)
    if (!(c.url.includes('getFirstLoginInfo') || c.url.includes('login'))) {
      if (!token) {
        console.log('没有授权')
      }
    }
    c.headers.authorization = token || ''
    return c
  },
  function(error) {
    return Promise.reject(error)
  }
)

export default axios
