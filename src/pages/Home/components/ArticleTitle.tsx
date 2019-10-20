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
    { title, category } = data
  return (
    <div style={{ width: '50%', margin: '10% auto', borderBottom: '1px solid #000' }}>
      <Tag
        color={
          category === 'javascript'
            ? 'magenta'
            : category === 'css'
            ? 'red'
            : category === 'react'
            ? 'volcano'
            : 'green'
        }>
        {category}
      </Tag>
      <h3 style={{ display: 'inline-block' }}>{title}</h3>
    </div>
  )
}

export default ArticleTitle
