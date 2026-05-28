import { StarWarsProvider, useStarWars } from './context/StarWarsContext'
import Menu from './components/Menu'
import ItemList from './components/ItemList'
import ItemModal from './components/ItemModal'
import './App.css'

const Content = () => {
  const { selectedCategory } = useStarWars()
  return (
    <>
      <h1 className="app-title">Star Wars</h1>
      <p className="app-subtitle">Diego Carreon</p>
      {selectedCategory ? <ItemList /> : <Menu />}
      <ItemModal />
    </>
  )
}

function App() {
  return (
    <StarWarsProvider>
      <Content />
    </StarWarsProvider>
  )
}

export default App
