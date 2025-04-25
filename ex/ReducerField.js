const INITIAL_STATE = { value: '' }

export default function fieldReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'VALUE_CHANGED':
      return { ...state, value: action.payload }
    default:
      return state
  }
}