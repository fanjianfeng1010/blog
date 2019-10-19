import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, RouteComponentProps, Link } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import { fetchRequest } from '../store/blog/action'
import { Blog } from '../store/blog/types'
import { ApplicationState } from '../store/inex'
const { SubMenu } = Menu

type NavState = {
  current: string
}
type PropFromMap = {
  loading: boolean
  data: Blog[]
  errors?: string
}
type PropFromDispatch = {
  fetchRequest: typeof fetchRequest
}
type ComponentProps = PropFromDispatch & RouteComponentProps & PropFromMap
class App extends Component<ComponentProps, NavState> {
  constructor(props: ComponentProps) {
    super(props)
    this.state = {
      current: 'home'
    }
  }
  componentDidMount() {
    let { fetchRequest } = this.props
    fetchRequest()
  }

  render() {
    return (
      <header>
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
          <Menu.Item key="home">
            <Link
              to={{
                pathname: '/'
              }}>
              <Icon type="mail" />
              Feng`s Blog
            </Link>
          </Menu.Item>
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Icon type="mail" />
                博客文章
              </span>
            }>
            <Menu.ItemGroup title="分类">
              <Menu.Item key="javascript">
                <Link
                  to={{
                    pathname: '/article/javascript'
                  }}>
                  Javascript
                </Link>
              </Menu.Item>

              <Menu.Item key="css">
                <Link
                  to={{
                    pathname: '/article/css'
                  }}>
                  css
                </Link>
              </Menu.Item>

              <Menu.Item key="notes">
                <Link
                  to={{
                    pathname: '/article/notes'
                  }}>
                  notes
                </Link>
              </Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key="alipay">
            <Link
              to={{
                pathname: '/about'
              }}>
              About
            </Link>
          </Menu.Item>
        </Menu>
      </header>
    )
  }

  handleClick = (e: any) => {
    this.setState({
      current: e.key
    })
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

export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(App)
)
