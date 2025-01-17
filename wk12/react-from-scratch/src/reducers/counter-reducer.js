const INITIAL_STATE = {
  value: 0
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return { ...state, value: state.value + action.payload }
    default:
      return state
  }
}