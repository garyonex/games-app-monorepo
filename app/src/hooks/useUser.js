import { useEffect, useState } from 'react'
import login from '../services/login/login'
import { setToken } from '../services/notes/controllerNotas'

export const useUser = () => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      setToken(user.token)
    }
  }, [])

  const logout = () => {
    setUser(null)
    setToken(user.token)
    window.localStorage.removeItem('loggedNoteAppUser')
  }
  const loginHook = async ({ username, password }) => {
    const user = await login({
      username,
      password,
    })
    window.localStorage.setItem('loggedNoteAppUser', JSON.stringify(user))
    setToken(user.token)
    setUser(user)
  }
  return { user, logout, loginHook }
}
