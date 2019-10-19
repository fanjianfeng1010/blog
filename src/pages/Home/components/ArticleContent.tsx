import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Typography, Divider, Button } from 'antd'
import { Blog } from '../../../store/blog/types'

const { Title, Paragraph, Text } = Typography

interface Props {
  data: Blog
}

const ArticleContent: React.FC<Props> = (props) => {
  let { data } = props,
    { title, created_at, content, tags } = data
  return (
    <ArticleConent className="expandUp ">
      <Typography>
        <Title>{title}</Title>
        <Title> {tags}</Title>
        <WriteTime>{created_at}</WriteTime>
        <Paragraph
          style={{ fontSize: '18px', fontWeight: 'bold', color: '#fff' }}
          ellipsis={{ rows: 7 }}
          type="secondary">
          {content}
        </Paragraph>
        <Link to="/courese" style={{ display: 'block', textAlign: 'right' }}>
          <Button type="link">阅读原文</Button>
        </Link>
        <Divider />
      </Typography>
    </ArticleConent>
  )
}

export default ArticleContent

const ArticleConent = styled.div`
  width: 100%;
  padding: 10%;
  margin-bottom: 2%;
  background: #bc3428;
  box-shadow: 4px 6px 5px black;
  border-radius: 5px;

  &:nth-of-type(3n + 1) {
    background: #c7372a;
  }
`

const WriteTime = styled(Text)`
  display: block;
  text-align: right;
  font-size: 19px;
  font-style: italic;
  color: #ddd !important;
  font-family: Helvetica;
`
