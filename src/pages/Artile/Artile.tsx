import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom'
import { Tabs } from 'antd'
import { History } from 'history'
import { ApplicationState } from '../../store/inex'

import BlogShow from './components/BlogShow'
import { Blog } from '../../store/blog/types'

const { TabPane } = Tabs

type PropFromMap = {
  data: Blog[]
}
type PropFromDispatch = {}
interface State {
  current: string
}
type ComponentProps = PropFromDispatch & RouteComponentProps & PropFromMap
class App extends Component<ComponentProps, State> {
  constructor(props: ComponentProps) {
    super(props)
    this.state = {
      current: this.props.history.location.pathname.split('/article/')[1]
    }
  }
  componentWillReceiveProps() {
    this.setState({
      current: this.props.history.location.pathname.split('/article/')[1]
    })
    console.log('rc-editor-core-editor')
  }

  render() {
    let { data } = this.props
    return (
      <div>
        <Tabs
          activeKey={this.state.current}
          onChange={this.handleChange}
          style={{ background: 'white' }}>
          <TabPane tab="all" key="all">
            all
          </TabPane>
          <TabPane tab="Javascript" key="javascript">
            javascript
          </TabPane>
          <TabPane tab="CSS" key="css">
            css
          </TabPane>
          <TabPane tab="Note" key="notes">
            notes
          </TabPane>
        </Tabs>
        <Switch>
          <Route
            path="/article/all"
            exact
            render={() => {
              console.log(this.props)
              return <BlogShow data={data} />
            }}
          />
          <Route
            path="/article/javascript"
            render={() => (
              <BlogShow data={data.filter((item) => item.category === this.state.current)} />
            )}
          />
          <Route
            path="/article/css"
            render={() => {
              console.log(this.state.current)
              return <BlogShow data={data.filter((item) => item.category === this.state.current)} />
            }}
          />
          <Route
            path="/article/notes"
            render={() => (
              <BlogShow data={data.filter((item) => item.category === this.state.current)} />
            )}
          />
          <Redirect from="/article" to="/article/all" />
        </Switch>
      </div>
    )
  }

  handleChange = (ev: any) => {
    this.setState({
      current: ev
    })
    this.props.history.push(`/article/${ev}`)
  }
}

const mapState = ({ blogs }: ApplicationState) => {
  return {
    data: blogs.data
  }
}

const mapDispatch = {}

export default connect(
  mapState,
  mapDispatch
)(App)
