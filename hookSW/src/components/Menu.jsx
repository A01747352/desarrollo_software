import { useStarWars } from '../context/StarWarsContext'

const Menu = () => {
  const { categories, loading, selectCategory } = useStarWars()

  if (loading) return <p className="loading">Cargando...</p>

  return (
    <div className="menu">
      {categories.map(cat => (
        <button
          key={cat.name}
          className="category-btn"
          onClick={() => selectCategory(cat)}
        >
          {cat.name}
        </button>
      ))}
    </div>
  )
}

export default Menu
