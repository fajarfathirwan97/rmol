import { createActions, createReducer } from 'reduxsauce'

// INITAL STATE
const INITIAL_STATE = {
  isFetching: true,
  data: [],
  detail: {}
}
// ACTION
const { Types, Creators } = createActions({
  homeRequest: ['message'],
})

export const HomeTypes = Types
export const HomeActions = Creators
export default Creators

const homeRequest = (state, action) => {
  return state = {
    ...state,
    isFetching: true,
  }
}

export const HANDLERS = {
  [Types.HOME_REQUEST]: homeRequest,
}

export const homeReducer = createReducer(INITIAL_STATE, HANDLERS)

