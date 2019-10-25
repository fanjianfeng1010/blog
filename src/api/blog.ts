import axios from './index'

// 添加新的文章
export const createArticle = (data: any) => axios.post('/article', data)

// 修改文章内容
export const updateArticleById = (id: string, data: any) => axios.put(`/api/articles/${id}`, data)

// 删除指定文章
export const deleteArticleById = (id: string) => axios.delete(`/api/article/${id}`)

// 批量删除文章
export const batchDeleteArticle = (IdDataArray: string[]) =>
  axios.delete('/api/articles', IdDataArray)

// 获取所有文章
export const getArticles = (page: number, limit: number, category?: string, tag?: string) =>
  axios.get('/api/articles', {
    params: {
      page,
      limit,
      category,
      tag
    }
  })

// 获取单篇文章
export const getArticle = (id: string, markdownMode: boolean) =>
  axios.get(`/api/article/${id}`, {
    params: markdownMode
  })
