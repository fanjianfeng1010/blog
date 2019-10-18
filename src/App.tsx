import React from 'react'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import { ConnectedRouter } from 'connected-react-router'
import { History } from 'history'
import { hot } from 'react-hot-loader'
import { ApplicationState } from './store/inex'
import Routes from './Routes'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'

interface MainProps {
  store: Store<ApplicationState>
  history: History
}

const App: React.FC<MainProps> = ({ store, history }) => {
  return (
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    </ConfigProvider>
  )
}
export default hot(module)(App)
