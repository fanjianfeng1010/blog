/* import { Reducer } from 'redux'
import { PersonState, PersonAction, PERSON_INFO_QUERY } from './types'

let init_state: PersonState = {
  personInfo: undefined,
  LoginStatus: false
}

const person: Reducer<PersonState, PersonAction> = (state = init_state, action: PersonAction) => {
  let newState = JSON.parse(JSON.stringify(state)) as PersonState
  switch (action.type) {
    case PERSON_INFO_QUERY:
      let { result } = action
      if (result.code === 0) {
        newState.personInfo = result.data
      }
      break
    default:
      return newState
  }
  return newState
}

export default person
 */

export const R = 'R'
