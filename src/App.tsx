import React from 'react'
// 第三方库
import { Store } from 'redux'
import { History } from 'history'
import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'
import zhCN from 'antd/es/locale/zh_CN'
import { ConnectedRouter } from 'connected-react-router'

// 开发插件
import { hot } from 'react-hot-loader'

// 自己写的文件
import Routes from './Routes'
import { ApplicationState } from './store/inex'
import { Globalstyle } from './style'

// Main 组件的属性
interface MainProps {
  store: Store<ApplicationState>
  history: History
}

const App: React.FC<MainProps> = ({ store, history }) => {
  return (
    // 使用 antd 本地化配置
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Globalstyle />
          <Routes />
        </ConnectedRouter>
      </Provider>
    </ConfigProvider>
  )
}
export default hot(module)(App)
