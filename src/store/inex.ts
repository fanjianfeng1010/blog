import { combineReducers } from 'redux'
import { all, fork } from 'redux-saga/effects'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'

import blogsSaga from './blog/sagas'
import { blogReducer } from './blog/reducer'
import { BlogState } from './blog/types'

export interface ApplicationState {
  blogs: BlogState
  router: RouterState
}

export const createRootReducer = (history: History) =>
  combineReducers({
    blogs: blogReducer,
    router: connectRouter(history)
  })

export function* rootSaga() {
  yield all([fork(blogsSaga)])
}
