import { useEffect } from 'react'
import { useState } from 'react'
import { createNote, getAll } from '../services/notes/controllerNotas'

function useNotes() {
  const [notes, setNotes] = useState([])
  //TODO llamada a la api
  useEffect(() => {
    getAll() // esto viene desde la llamada a la api
      .then((inicialNotes) => {
        setNotes(inicialNotes)
      })
  }, [])

  const addNote = (noteObject) => {
    // create -> viene desde services
    createNote(noteObject).then((returnedNote) => {
      setNotes(notes.concat(returnedNote))
    })
  }

  return { notes, addNote }
}

export default useNotes
