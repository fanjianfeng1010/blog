/* import { PERSON_INFO_QUERY, PersonAction, PersonState } from './types'
import { Action, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'

// 导入 aip文件
import { getInfo } from '../../api/person/person'

type ThunkResult<R> = ThunkAction<R, PersonState, undefined, Action<PersonAction>>

const getPersonInfo = (): ThunkResult<void> => {
  return async (dispatch: Dispatch) => {
    const result = await getInfo()
    dispatch({
      type: PERSON_INFO_QUERY,
      result
    })
  }
}

let action = { getPersonInfo }
export default action
 */
export const R = 'R'
