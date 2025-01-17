import React, { useState, useEffect } from 'react'
import UniversityAddForm from './UniversityAddForm'
import store from './UniversityStore'

const UniversityList = () => {
  const [ universities, setUniversities ] = useState([])

  useEffect(() => { 
    store.getAll()
    store.emitter.addListener('GET_UNIVERSITIES_SUCCESS', () => {
      setUniversities(store.data)
    })
  }, [])

  return (
    <div>
      {
        universities.map(e => <div key={e.id}>{e.universityName}</div>)
      }
      <UniversityAddForm onAdd={(item) => store.addOne(item)} />
    </div>
  )
}

export default UniversityList