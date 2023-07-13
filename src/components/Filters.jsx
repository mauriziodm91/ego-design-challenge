import { useContext, useState, useEffect } from 'react'
import { CarsContext } from '../context/CarsContext'
import Select from './Select'
import './Filters.css'

const filters = ['Todos', 'Autos', 'Pickups y Comerciales', 'SUVs y Crossovers']
const order = [
  'Nada',
  'De menor a mayor precio',
  'De mayor a menor precio',
  'Mas nuevos primero',
  'Mas viejos primero',
]

const Filters = () => {
  const { activeFilter, setActiveFilter, sortOption, setSortOption } =
    useContext(CarsContext)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 720)
    }
    window.addEventListener('resize', handleResize)
    handleResize() // Check initial window size

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const filterChangeHandler = (e) => {
    setActiveFilter(e.target.name)
  }

  if (isMobile) {
    return (
      <div className='filters-container'>
        <Select
          options={filters}
          setters={{ defaultValue: activeFilter, set: setActiveFilter }}
          InputProps={{
            type: 'text',
            placeholder: 'Filtrar por',
          }}
        />

        <Select
          options={order}
          setters={{ defaultValue: sortOption, set: setSortOption }}
          InputProps={{
            type: 'text',
            placeholder: 'Ordenar por',
          }}
        />
      </div>
    )
  }

  return (
    <div className='filters-container'>
      <div className='filter-options'>
        <div className='filter-title'>
          <p>Filtrar por</p>
        </div>
        <div className='filter-list'>
          {filters.map((filter, id) => (
            <button
              name={filter}
              className={`filter-item ${
                activeFilter === filter ? 'active' : ''
              }`}
              key={id}
              onClick={filterChangeHandler}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      <Select
        options={order}
        setters={{ defaultValue: sortOption, set: setSortOption }}
        InputProps={{
          type: 'text',
          placeholder: 'Ordenar por',
        }}
      />
    </div>
  )
}

export default Filters
