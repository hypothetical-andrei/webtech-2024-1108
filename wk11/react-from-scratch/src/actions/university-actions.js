export const GET_UNIVERSITIES = 'GET_UNIVERSITIES' 

export function getUniversities () {
  return {
    type: GET_UNIVERSITIES,
    payload: async () => {
      const response = await fetch('http://localhost:8080/universities')
      const data = await response.json()
      return data
    }
  }
}