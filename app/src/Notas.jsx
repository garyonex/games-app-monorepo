import { useEffect, useState } from 'react'
import { UnaNota } from './components/UnaNota'
import { getAll, createNote } from './services/notes/controllerNotas'
import login from './services/login/login'
import Notification from './components/Notification'
import { setToken } from './services/notes/controllerNotas'
import LoginForm from './components/LoginForm'
import NoteForm from './components/NoteForm'

const Notas = (props) => {
  const [notes, setNotes] = useState([])
  
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  //TODO llamada a la api
  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
      getAll() // desde donde viene la api
        .then((notes) => {
          setNotes(notes)
          setLoading(false)
        })
    }, 2000)
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      setToken(user.token)
    }
  }, [])

  // LIMPIAR EL LOCALSTORAGE
  const handleLogout = () => {
    setUser(null)
    setToken(user.token)
    window.localStorage.removeItem('loggedNoteAppUser')
  }

  const [showAll, setShowAll] = useState(true)

  const addNote = (noteObject) => {
    // create -> viene desde services
    createNote(noteObject).then((returnedNote) => {
      setNotes(notes.concat(returnedNote))
    })
  }
  const hanbldeShowAll = () => {
    setShowAll(() => !showAll)
  }

  //TODO -->  RELACIONADO CON FORMULARIO LOGIN USERS //
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const handleLogin = async (event) => {
    //con esto controlamos lo que hara el form
    event.preventDefault()
    try {
      const user = await login({
        username,
        password,
      })
      window.localStorage.setItem('loggedNoteAppUser', JSON.stringify(user))
      // console.log(user)
      setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (error) {
      setErrorMessage('Error en login')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }
  return (
    <div>
      <h1>Notas</h1>

      <Notification message={errorMessage} />
      {user ? (
        <NoteForm
          addNote={addNote}
         
          handleLogout={handleLogout}
        />
      ) : (
        <LoginForm
          username={username}
          password={password}
          handleUsernameChange={({ target }) => setUsername(target.value)}
          handlePasswordChange={({ target }) => setPassword(target.value)}
          handleSubmit={handleLogin}
        />
      )}

      {loading ? 'Cargando ...' : ''}

      <ul>
        {notes
          .filter((note) => {
            if (showAll === true) return true
            return note.important === true
          })
          .map((note) => (
            // siempre se utiliza un id parra que sea precisa la info
            <UnaNota key={note.id} {...note} />
          ))}
      </ul>
      <button onClick={hanbldeShowAll}>
        {showAll ? 'Mostrar importante' : 'Mostrart todos'}
      </button>
    </div>
  )
}

export default Notas
