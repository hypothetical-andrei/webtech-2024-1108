const INITIAL_STATE = {
  data: [],
  error: null,
  fetching: false
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_UNIVERSITIES_PENDING':
      return { ...state, fetching: true }
    case 'GET_UNIVERSITIES_FULFILLED':
      return { ...state, fetching: false, data: action.payload }
    case 'GET_UNIVERSITIES_REJECTED':
      return { ...state, fetching: false, error: action.payload }
    default:
      return state
  }
}