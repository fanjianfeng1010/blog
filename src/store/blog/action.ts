import { action } from 'typesafe-actions'
import { BlogActionTypes, Blog } from './types'

export const fetchRequest = () => action(BlogActionTypes.FETCH_REQUEST)

// TODO: 当实现后台的时候,设置传入的限制,以及提供更多的参数给 reducer
export const fetchSuccess = (data: Blog[]) => action(BlogActionTypes.FETCH_SUCCESS, data)
export const fetchError = (message: string) => action(BlogActionTypes.FETCH_ERROR, message)
