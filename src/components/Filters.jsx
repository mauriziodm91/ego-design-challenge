import './Filters.css'

const Filters = () => {
  const filters = [
    'Todos',
    'Autos',
    'Pickups y Comerciales',
    'SUVs y Crossovers',
  ]

  return (
    <div className='filters-container'>
      <div className='filter-options'>
        <div className='filter-title'>
          <p>Filtrar por</p>
        </div>
        <div className='filter-list'>
          {filters.map((filter, id) => (
            <button
              name={filter.toLowerCase()}
              className='filter-item'
              key={id}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      <div className='select-container'>ordenar por</div>
    </div>
  )
}

export default Filters
