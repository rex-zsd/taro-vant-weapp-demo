import { ADD, MINUS, LOADING, STOP_LOADING } from '../constants/counter'

const INITIAL_STATE = {
  num: 0,
  loading: false
}

export default function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + 1
      }
    case MINUS:
      return {
        ...state,
        num: state.num - 1
      }
    case LOADING:
      return  {
        ...state,
        loading: true
      }
    case STOP_LOADING:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}
