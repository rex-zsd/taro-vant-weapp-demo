import {
  ADD,
  MINUS,
  LOADING,
  STOP_LOADING
} from '../constants/counter'

export const add = () => {
  return {
    type: ADD
  }
}
export const minus = () => {
  return {
    type: MINUS
  }
}
export const loading = () => {
  return {
    type: LOADING
  }
}
export const stopLoading = () => {
  return {
    type: STOP_LOADING
  }
}

// 异步的action
export function asyncAdd () {
  return dispatch => {
    dispatch(loading())
    setTimeout(() => {
      dispatch(add())
      dispatch(stopLoading())
    }, 2000)
  }
}
