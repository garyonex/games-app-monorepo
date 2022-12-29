import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../hooks/useUser'
import LoginForm from './LoginForm'

function Login() {
  const navigate = useNavigate()
  const { user, loginHook } = useUser()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [errorMessage, setErrorMessage] = useState(null)

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      loginHook({ username, password })
      setUsername('')
      setPassword('')
      navigate('/notes')
    } catch (error) {
      setErrorMessage('Error login')
      setTimeout(() => {
        setErrorMessage(null)
      }, 2000)
    }
    if (errorMessage) {
      return <p>{errorMessage}</p>
    }
    if (user) {
      return <h1>user is logged</h1>
    }
  }
  return (
    <LoginForm
      username={username}
      password={password}
      handleUsernameChange={({ target }) => setUsername(target.value)}
      handlePasswordChange={({ target }) => setPassword(target.value)}
      handleSubmit={handleLogin}
    />
  )
}

export default Login
