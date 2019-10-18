import React, { FC } from 'react'

/* import { Link } from 'react-router-dom'
import styled from 'styled-components' */
import { Tag } from 'antd'
import { Blog } from '../../../store/blog/types'

type PropFromMap = {
  data: Blog
}

const ArticleTitle: FC<PropFromMap> = (props) => {
  let { data } = props,
    { title, tags } = data
  return (
    <div style={{ width: '50%', margin: '10% auto', borderBottom: '1px solid #000' }}>
      <Tag
        color={
          tags === 'javascript'
            ? 'magenta'
            : tags === 'css'
            ? 'red'
            : tags === 'react'
            ? 'volcano'
            : 'green'
        }>
        {tags}
      </Tag>
      <h3 style={{ display: 'inline-block' }}>{title}</h3>
    </div>
  )
}

export default ArticleTitle
