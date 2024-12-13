import React, { useState, useEffect } from 'react'

const Counter = () => {
  const [ counter, setCounter ] = useState(0)
  const [ isEven, setIsEven ] = useState(true)

  useEffect(() => {
    setIsEven(counter % 2 === 0)
  }, [counter])

  useEffect(() => {
    document.title = isEven ? 'even' : 'odd'
  }, [isEven])

  return (
    <div>
      Counter is {counter}
      {
        isEven
        ? (
          <div>
            Counter is currently even
          </div>
        ) : (
          <div>
            Counter is currently odd
          </div>
        )
      }

      <input type='button' value='+' onClick={(evt) => {
        setCounter(counter + 1)
      }} />
    </div>
  )
}

export default Counter