import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import LazyLoad from 'react-lazyload'
import { Layout, Row, Col, Skeleton } from 'antd'
import { fetchRequest } from '../../store/blog/action'
import { ApplicationState } from '../../store/inex'
import { Blog } from '../../store/blog/types'
import ArticleTitle from './components/ArticleTitle'
import QueueAnim from 'rc-queue-anim'
import { Suspense, lazy } from 'react'

const { Sider, Content } = Layout
const Article = lazy(() => import('./components/ArticleContent'))

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
            <Suspense fallback={<Skeleton active />}>
              <QueueAnim delay={300}>
                <LazyLoad debounce={true} height={200} offset={200}>
                  {data && data.length !== 0
                    ? data.map((item) => (
                        <Col key={item.id} xs={24} xl={24}>
                          <Article data={item} />
                        </Col>
                      ))
                    : ''}
                  {data && data.length !== 0
                    ? data.map((item) => (
                        <Col key={item.id} xs={24} xl={24}>
                          <Article data={item} />
                        </Col>
                      ))
                    : ''}
                  {/* TODO: 实现服务器后完成加载更多功能 */}
                </LazyLoad>
              </QueueAnim>
            </Suspense>
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
