import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/users' //?para desarrollo

// const baseUrl = '/api/users'

const register = async () => {
  const { data } = await axios.post(baseUrl)
  console.log(data)
}
export default register
