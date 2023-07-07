import { useContext } from 'react'
import { CarsContext } from '../context/CarsContext'
import Card from './Card'
import Filters from './Filters'
import './CatalogueContainer.css'

const CatalogueContainer = () => {
  const { cars } = useContext(CarsContext)
  return (
    <div className='catalogue-container'>
      <div className='cta-container'>
        <h1>Descubrí todos los modelos</h1>
      </div>
      <Filters />
      <div className='cards-container'>
        {cars.map((car) => {
          const { id, name, year, price, thumbnail } = car
          return (
            <Card
              key={id}
              model={name}
              year={year}
              price={price}
              thumbnail={thumbnail}
              id={id}
            />
          )
        })}
      </div>
    </div>
  )
}

export default CatalogueContainer
