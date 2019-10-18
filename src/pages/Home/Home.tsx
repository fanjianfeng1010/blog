import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import Article from './components/ArticleContent'
import { Layout, Row, Col } from 'antd'
import { fetchRequest } from '../../store/blog/action'
import { ApplicationState } from '../../store/inex'
import { Blog } from '../../store/blog/types'
import ArticleTitle from './components/ArticleTitle'
import './animate.css'
import './slide.css'

const { Sider, Content } = Layout

type PropFromMap = {
  loading: boolean
  data: Blog[]
  errors?: string
}
type PropFromDispatch = {
  fetchRequest: typeof fetchRequest
}
type ComponentProps = PropFromDispatch & RouteComponentProps & PropFromMap
class App extends Component<ComponentProps> {
  componentDidMount() {
    let { fetchRequest } = this.props
    fetchRequest()
  }

  render() {
    let { data } = this.props
    return (
      <Layout>
        <Sider width={'30%'} breakpoint="md" collapsedWidth="0" trigger={null} theme={'light'}>
          <div>最新文章</div>
          {data && data.length !== 0
            ? data.map((item) => {
                return <ArticleTitle data={item} key={item.id} />
              })
            : ''}
        </Sider>
        <Content>
          <Row gutter={20} style={{ margin: '2%' }}>
            {data && data.length !== 0
              ? data.map((item) => (
                  <Col key={item.id} xs={24} xl={24}>
                    <Article data={item} />
                  </Col>
                ))
              : ''}
          </Row>
        </Content>
      </Layout>
    )
  }
}

const mapState = ({ blogs }: ApplicationState) => {
  return {
    loading: blogs.loading,
    errors: blogs.errors,
    data: blogs.data
  }
}

const mapDispatch = {
  fetchRequest
}

export default connect(
  mapState,
  mapDispatch
)(App)
