import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'

const counterSelector = state => state.counter.value

const Third = () => {
  const currentCounter = useSelector(counterSelector, shallowEqual)

  return (
    <div>
      I am third
      <div>
        The value of the counter is {currentCounter}
      </div>
    </div>
  )
}

export default Third