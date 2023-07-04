import './Card.css'

const Card = ({ model, year, price, thumbnail }) => {
  return (
    <div className='card'>
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
