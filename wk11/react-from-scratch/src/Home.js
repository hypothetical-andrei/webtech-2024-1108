import React, { useReducer} from 'react'

const countReducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE':
      return { ...state, count: state.count + action.payload}
    default:
      return state
  }
}

const Home = () => {
  const [state, dispatch] = useReducer(countReducer, { count: 0 })

  return (
    <div>
      I am home
      <div>
        Counter is {state.count}
      </div>
      <div>
        <input type="button" value="increase" onClick={(evt) => {
          dispatch({ type: 'INCREASE', payload: 3 })
        }} />
      </div>
    </div>
  )
}

export default Home