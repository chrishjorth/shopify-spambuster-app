import { Map } from 'immutable'

export const getInitialState = () => {
  return Map({})
}

const rootReducer = (state, action) => {
  if (!state) {
    state = getInitialState()
  }
  switch (action.type) {
  }
  return state
}

export default rootReducer
