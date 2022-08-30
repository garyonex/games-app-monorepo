import { useRef, useState } from 'react'
import Togglable from './Togglable'

export default function NoteForm({ addNote, handleLogout }) {
  const [newNote, setNewNote] = useState('')
  const [newContent, setContent] = useState('')
  const togglabelRef = useRef()
  const handleChange = (event) => {
    setNewNote(event.target.value)
  }
  const handleChangeContent = (event) => {
    setContent(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault() // evita que siga su comportamient natural

    const noteObject = {
      title: newNote,
      content: newContent,
    }
    addNote(noteObject)
    setNewNote('')
    setContent('')
    togglabelRef.current.toggleVisibility()
  }
  
  console.log(togglabelRef)
  return (
    <Togglable buttonLabel='New note' ref={togglabelRef}>
      <h1>Create new note</h1>
      {/* //? TITULO DE LA NOTA */}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            name='title'
            id=''
            placeholder='Title'
            onChange={handleChange}
            value={newNote}
            required
          />
        </div>
        <div>
        {/* //?CONTENIDO DE LA NOTA */}
          <input
            type='text'
            name='content'
            id=''
            placeholder='Content'
            onChange={handleChangeContent}
            value={newContent}
            required
          />
        </div>
        <button>Crear una nota</button>
      </form>
      <div>
        <button onClick={handleLogout}>LOGOUT</button>
      </div>
    </Togglable>
  )
}
