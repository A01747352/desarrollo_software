import { useEffect } from 'react'
import { useStarWars } from '../context/StarWarsContext'

const SKIP_FIELDS = ['url', 'created', 'edited', 'name', 'title']

const ItemModal = () => {
  const { selectedItem, closeModal } = useStarWars()

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') closeModal()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [closeModal])

  if (!selectedItem) return null

  const name = selectedItem.name ?? selectedItem.title ?? ''

  const fields = Object.entries(selectedItem).filter(([key, value]) =>
    !SKIP_FIELDS.includes(key) &&
    !Array.isArray(value) &&
    typeof value !== 'object' &&
    !String(value).startsWith('http')
  )

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal}>✕</button>
        <h2>{name}</h2>
        <div className="modal-fields">
          {fields.map(([key, value]) => (
            <div key={key} className="modal-field">
              <span className="field-label">{key.replace(/_/g, ' ')}</span>
              <span className="field-value">{String(value)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ItemModal
