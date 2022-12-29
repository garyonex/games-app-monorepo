import { useParams } from 'react-router-dom'
import useNotes from '../hooks/useNotes'

function NoteDetails() {
  const { notes } = useNotes()
  const { noteId } = useParams()
  const note = notes.find((note) => note.id === noteId)
  if (!note) return null

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <small>{note.user.username}</small>
    </div>
  )
}

export default NoteDetails
