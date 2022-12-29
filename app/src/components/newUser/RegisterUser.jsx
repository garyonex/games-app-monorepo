import { useState } from 'react'
import register from '../../services/register/register'
import NewUserForm from './NewUserForm'

const RegisterUser = () => {
  const [newUser, setNewUser] = useState(null)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
    console.log(newUser)
  const handleRegister = async (event) => {
    event.preventDefault()
    try {
      const userRegister = await register({
        username,
        email,
        password,
      })
      setNewUser(userRegister)
      setUsername('')
      setEmail('')
      setPassword('')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <NewUserForm
        username={username}
        email={email}
        password={password}
        handleUsernameChange={({ target }) => setUsername(target.value)}
        handleEmailChange={({ target }) => setEmail(target.value)}
        handlePasswordChange={({ target }) => setPassword(target.value)}
        handleRegister={handleRegister}
      />
    </div>
  )
}

export default RegisterUser
