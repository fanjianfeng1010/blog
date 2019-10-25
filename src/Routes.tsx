import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Layout } from 'antd'
import ArticleContent from './pages/home/ArticleContent'

const { Header, Content, Footer, Sider } = Layout

const Routes: React.SFC = () => (
  <Layout>
    <Header style={{ padding: '0', width: '100%' }}></Header>
    <Layout>
      <Sider theme="light">Sider</Sider>
      <Content style={{ minWidth: '640px' }}>
        <ArticleContent />
      </Content>
    </Layout>
    <Footer>Footer</Footer>
  </Layout>
)

export default Routes
