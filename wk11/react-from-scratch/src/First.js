import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { counter, university } from './actions'

const universityListSelector = state => state.university.data

const First = () => {
  const dispatch = useDispatch()
  const universityList = useSelector(universityListSelector, shallowEqual)

  useEffect(() => {
    dispatch(university.getUniversities())
  }, [])

  return (
    <div>
      I am first
      <input type="button" value="trigger" onClick={() => {
        dispatch(counter.increaseCounter(5))
      }} />
      {
        universityList.map(e => <div key={e.id}>{e.universityName}</div>)
      }
    </div>
  )
}

export default First