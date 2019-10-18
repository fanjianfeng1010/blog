export interface Blog extends ApiResponse {
  id: number
  title: string
  summary: string
  content: string
  tags: string
  created_at: string
  updated_at: string
  user: {
    id: number
    username: string
    authority: {
      id: number
      name: string
    }
  }
}

export interface Dataresponse {
  code: number
  msg: string
  data: Blog[]
}

// This type is basically shorthand for `{ [key: string]: any }`. Feel free to replace `any` with
// the expected return type of your API response.
export type ApiResponse = Record<string, any>

// Use `enum`s for better autocompletion of action type names. These will
// be compiled away leaving only the final value in your compiled code.
//
// Define however naming conventions you'd like for your action types, but
// personally, I use the `@@context/ACTION_TYPE` convention, to follow the convention
// of Redux's `@@INIT` action.
export enum BlogActionTypes {
  FETCH_REQUEST = '@@blog/FETCH_REQUEST',
  FETCH_SUCCESS = '@@blog/FETCH_SUCCESS',
  FETCH_ERROR = '@@blog/FETCH_ERROR'
}

// Declare state types with `readonly` modifier to get compile time immutability.
// https://github.com/piotrwitek/react-redux-typescript-guide#state-with-type-level-immutability
export interface BlogState {
  readonly loading: boolean
  readonly data: Blog[]
  readonly errors?: string
}
