import Axios from './index'

// 发送登录请求
export const userLogin = (data: userLoginParams) => Axios.post('/api/login', data)

interface userLoginParams {
  key: string
}
