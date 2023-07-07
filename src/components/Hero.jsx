import Description from './Description'
import './Hero.css'

const Hero = ({ carDetails }) => {
  const descriptionStyles = {
    margin: 0,
    fontSize: '16px',
    lineHeight: '27px',
    letterSpacing: '-0.1px',
  }
  return (
    <section className='hero'>
      {carDetails && (
        <div className='hero-container'>
          <div className='hero-image-container'>
            <img src={carDetails.photo} alt={`${carDetails.name}-photo`} />
          </div>
          <div className='hero-details-container'>
            <p className='model-name'>{carDetails.name}</p>
            <h1 className='title'>{carDetails.title}</h1>
            <Description
              styles={descriptionStyles}
              data={carDetails.description}
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default Hero
