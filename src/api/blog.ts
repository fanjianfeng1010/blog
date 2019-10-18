import axios from './index'
import { DataResponse } from './types'

// 请求博客内容
export const getArtile = (limit = 4): Promise<DataResponse> => {
  return axios.get('/api/blog.json', {
    params: {
      limit
    }
  })
}
