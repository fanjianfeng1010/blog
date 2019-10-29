import Axios from './index'

// 发送登录请求
export const userLogin = (data: userLoginParams) => {
  console.log(data)
  return Axios.post('/api/login', data)
}

interface userLoginParams {
  key: string
}
