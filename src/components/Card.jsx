import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CarsContext } from '../context/CarsContext'
import './Card.css'

const Card = ({ model, year, price, thumbnail, id }) => {
  const { setSelectedCard } = useContext(CarsContext)
  const navigate = useNavigate()
  const handleNavigate = () => {
    setSelectedCard(id)
    navigate(`detail/${id}`)
  }
  return (
    <div className='card' onClick={handleNavigate}>
      <div className='model-container'>
        <h2 className='car-model'>{model}</h2>
      </div>
      <div className='data-container'>
        <p className='car-data'>{`${year} | $ ${price}`}</p>
      </div>
      <div className='car-photo'>
        <img src={thumbnail} alt={`${model}-thumbnail`} />
      </div>
      <div className='btn'>Ver Modelo</div>
    </div>
  )
}

export default Card
