import './App.css'
import { BiTask } from 'react-icons/bi'
import ListaTareas from './components/ListaTareas'

function App() {
  return (
    <div className='App'>
      <h1>Lista de tareas <BiTask /></h1>
      <ListaTareas  />
    </div>
  )
}

export default App
