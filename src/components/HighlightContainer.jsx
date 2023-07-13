import Highlights from './Highlights'
import './HighlightContainer.css'
const HighlightContainer = ({ highlights }) => {
  return (
    <section className='highlights-section'>
      <div className='grid-container'>
        {highlights &&
          highlights.map((highlight, id) => {
            const { title, content, image } = highlight
            return (
              <Highlights
                className={id === 1 ? 'second-child' : 'first-child'}
                key={id}
                title={title}
                content={content}
                image={image}
                id={id}
              />
            )
          })}
      </div>
    </section>
  )
}

export default HighlightContainer
