import Description from './Description'
const Highlights = ({ title, content, image, id, className }) => {
  return (
    <div className={className}>
      <div className='highlight-content'>
        <h2>{title}</h2>
        <Description data={content} />
      </div>
      <div className='highlight-image-container'>
        <img src={image} alt={`highlight-photo-${id}`} />
      </div>
    </div>
  )
}

export default Highlights
