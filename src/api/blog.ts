import axios from './index'
import { DataResponse } from './types'

// 请求博客内容
export const getArtile = (): Promise<DataResponse> => {
  return axios.get('/api/articles')
}
