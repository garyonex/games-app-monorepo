import Notas from './Notas.jsx'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import RegisterUser from './components/newUser/RegisterUser.jsx'
import Login from './components/Login.jsx'
import NoteDetails from './components/NoteDetails.jsx'
import NavBar from './components/navBar/NavBar.jsx'

function App() {
  return (
    <div className='App container'>
      <h1>GamesApp</h1>
      <NavBar />
      <Routes>
        <Route path='/'>home</Route>
        <Route path='/notes/:noteId' element={<NoteDetails />}></Route>
        <Route path='/notes' element={<Notas />}>
          Notas
        </Route>
        <Route path='/login' element={<Login />}>
          Users
        </Route>
        <Route path='/register' element={<RegisterUser />}></Route>
      </Routes>
    </div>
  )
}

export default App
