import { useStarWars } from '../context/StarWarsContext'

const getItemName = (item) => item.name ?? item.title ?? 'Sin nombre'

const ItemList = () => {
  const { selectedCategory, items, loading, selectItem, goBack } = useStarWars()

  return (
    <div className="item-list">
      <div className="list-header">
        <button className="back-btn" onClick={goBack}>← Regresar</button>
        <h2>{selectedCategory?.name}</h2>
      </div>
      {loading ? (
        <p className="loading">Cargando...</p>
      ) : (
        <div className="items-grid">
          {items.map((item, i) => (
            <button key={i} className="item-btn" onClick={() => selectItem(item)}>
              {getItemName(item)}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default ItemList
