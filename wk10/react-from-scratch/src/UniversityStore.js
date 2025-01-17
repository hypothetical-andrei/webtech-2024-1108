import { EventEmitter }  from 'fbemitter'
const SERVER = 'http://localhost:8080'

class UniversityStore {
  constructor () {
    this.data = []
    this.emitter = new EventEmitter()
  }

  async getAll () {
    try {
      const response = await fetch(`${SERVER}/universities`)
      if (!response.ok) {
        throw response
      }
      const data = await response.json()
      this.data = data
      this.emitter.emit('GET_UNIVERSITIES_SUCCESS')
    } catch (err) {
      console.warn(err)
      this.emitter.emit('GET_UNIVERSITIES_ERROR')
    }
  }

  async addOne (item) {
    try {
      const response = await fetch(`${SERVER}/universities`, {
        method: 'post',
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (!response.ok) {
        throw response
      }
      this.getAll()
    } catch (err) {
      console.warn(err)
      this.emitter.emit('ADD_UNIVERSITY_ERROR')
    }
  }
}

const store = new UniversityStore()

export default store