import { useState } from 'react'
import { UnaNota } from './components/UnaNota'
import Notification from './components/Notification'
import NoteForm from './components/NoteForm'
import useNotes from './hooks/useNotes'
import { useUser } from './hooks/useUser'
import Mensaje from './Mensaje'
import { Link } from 'react-router-dom'

const Notas = (props) => {
  const { notes, addNote } = useNotes()
  const { user, logout } = useUser()
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  console.log(setErrorMessage)

  // LIMPIAR EL LOCALSTORAGE
  const handleLogout = () => {
    logout()
  }

  const [showAll, setShowAll] = useState(true)

  const hanbldeShowAll = () => {
    setShowAll(() => !showAll)
  }

  return (
    <div>
      <h1>Notas</h1>

      <Notification message={errorMessage} />
      {user ? (
        <NoteForm addNote={addNote} handleLogout={handleLogout} />
      ) : (
        <div>
          <Mensaje message='logueate' />
          <Link to='/login'>LOGIN</Link>
        </div>
      )}

      {loading ? 'Cargando ...' : ''}

      <div>
        {notes
          .filter((note) => {
            if (showAll === true) return true
            return note.important === true
          })
          .map((note) => (
            // siempre se utiliza un id parra que sea precisa la info
            <UnaNota key={note.id} {...note} />
          ))}
      </div>
      <button onClick={hanbldeShowAll}>
        {showAll ? 'Mostrar importante' : 'Mostrart todos'}
      </button>
    </div>
  )
}

export default Notas
