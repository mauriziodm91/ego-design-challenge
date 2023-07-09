import { useContext } from 'react'
import { CarsContext } from '../context/CarsContext'
import Select from './Select'
import './Filters.css'

const filters = ['Todos', 'Autos', 'Pickups y Comerciales', 'SUVs y Crossovers']

const Filters = () => {
  const { activeFilter, setActiveFilter } = useContext(CarsContext)

  const filterChangeHandler = (e) => {
    setActiveFilter(e.target.name)
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
        InputProps={{
          type: 'text',
          placeholder: 'Ordenar por',
        }}
      />
    </div>
  )
}

export default Filters
