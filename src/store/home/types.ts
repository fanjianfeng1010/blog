/* import { ResponseAfterIntercept, PersonInfo } from '../../api/type'
// 用户 action 相关类型
export const PERSON_INFO_QUERY = 'PERSON_INFO_QUERY'
export type PERSON_INFO_QUERY = typeof PERSON_INFO_QUERY

export interface getPersonInfoAction<PersonInfo> {
  type: PERSON_INFO_QUERY
  result: ResponseAfterIntercept<PersonInfo>
}

export type PersonAction = getPersonInfoAction<PersonInfo>

// 用户状态相关类型
export interface PersonState {
  LoginStatus: boolean
  personInfo?: PersonInfo
}
 */

export const R = 'R'
