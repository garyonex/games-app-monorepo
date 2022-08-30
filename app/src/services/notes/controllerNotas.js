import axios from 'axios'
// const baseUrl = 'http://localhost:3001/api/notes' //?para desarrollo
 const baseUrl = '/api/notes' //?para produccion
let token = null
export const setToken = (newToken) => {
  token = `Bearer ${newToken}`
}
export const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then((res) => res.data)
}

export const createNote = (newObject) => {
  const config = {
    headers: {
      Authorization: token,
    },
  }
  const request = axios.post(baseUrl, newObject, config)
  return request.then((res) => res.data)
}

export const updateNote = (id, newObject) => {
  const config = {
    headers: {
      Authorization: token,
    },
  }
  const request = axios.put(`${baseUrl} / ${id}`, newObject, config)
  return request.then((res) => res.data)
}
