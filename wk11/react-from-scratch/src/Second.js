import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'

const counterSelector = state => state.counter.value

const Second = () => {
  const currentCounter = useSelector(counterSelector, shallowEqual)

  return (
    <div>
      I am second
      <div>
        The value of the counter is {currentCounter}
      </div>
    </div>
  )
}

export default Second