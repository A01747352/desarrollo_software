import { createContext, useContext, useEffect, useState } from 'react'

const StarWarsContext = createContext(null)

export const useStarWars = () => useContext(StarWarsContext)

export const StarWarsProvider = ({ children }) => {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://swapi.py4e.com/api/?format=json')
      .then(r => r.json())
      .then(data => {
        const cats = Object.entries(data).map(([name, url]) => ({ name, url }))
        setCategories(cats)
      })
      .finally(() => setLoading(false))
  }, [])

  const selectCategory = (cat) => {
    setSelectedCategory(cat)
    setLoading(true)
    fetch(`${cat.url}?format=json`)
      .then(r => r.json())
      .then(data => setItems(data.results))
      .finally(() => setLoading(false))
  }

  const selectItem = (item) => setSelectedItem(item)
  const closeModal = () => setSelectedItem(null)
  const goBack = () => {
    setSelectedCategory(null)
    setItems([])
  }

  return (
    <StarWarsContext.Provider value={{
      categories, selectedCategory, items, selectedItem, loading,
      selectCategory, selectItem, closeModal, goBack
    }}>
      {children}
    </StarWarsContext.Provider>
  )
}
