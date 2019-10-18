import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, RouteComponentProps, Link } from 'react-router-dom'

import { Menu, Icon } from 'antd'
const { SubMenu } = Menu

type NavState = {
  current: string
}
type PropFromMap = {}
type PropFromDispatch = {}
type ComponentProps = PropFromDispatch & RouteComponentProps & PropFromMap
class App extends Component<ComponentProps, NavState> {
  constructor(props: ComponentProps) {
    super(props)
    this.state = {
      current: 'home'
    }
  }

  render() {
    return (
      <header>
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
          <Menu.Item key="mail">
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
                <Icon type="setting" />
                博客文章
              </span>
            }>
            <Menu.ItemGroup title="分类">
              <Menu.Item key="setting:1">
                <Link
                  to={{
                    pathname: '/article/javascript'
                  }}>
                  Javascript
                </Link>
              </Menu.Item>

              <Menu.Item key="setting:2">
                <Link
                  to={{
                    pathname: '/article/css'
                  }}>
                  Javascript
                </Link>
              </Menu.Item>

              <Menu.Item key="setting:3">
                <Link
                  to={{
                    pathname: '/article/notes'
                  }}>
                  随笔
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
    console.log('click ', e)
    this.setState({
      current: e.key
    })
  }
}

const mapState = (state: any) => {
  return {}
}

const mapDispatch = {}

export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(App)
)
