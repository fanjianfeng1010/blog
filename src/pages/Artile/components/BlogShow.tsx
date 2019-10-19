import React from 'react'
import { Blog } from '../../../store/blog/types'
import ArticleContent from '../../Home/components/ArticleContent'

interface Props {
  data: Blog[]
}

const BlogShow: React.SFC<Props> = (props: Props) => {
  let { data } = props
  return (
    <div>{data && data.length !== 0 ? data.map((item) => <ArticleContent data={item} />) : ''}</div>
  )
}

export default BlogShow
