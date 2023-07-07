import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './Carousel.css'

import { Pagination, Navigation } from 'swiper/modules'

const Carousel = ({ features }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} slider-dot"></span>`
    },
  }
  return (
    <>
      <Swiper
        pagination={pagination}
        navigation
        slidesPerView={'auto'}
        centeredSlides
        spaceBetween={20}
        modules={[Pagination, Navigation]}
        className='mySwiper'
        breakpoints={{
          640: {
            slidesPerView: 'auto',
          },
        }}
      >
        {features &&
          features.map((feature, id) => {
            const { name, description, image } = feature
            return (
              <SwiperSlide key={id}>
                <div className='image-container'>
                  <img src={image} alt={`feature-${id}`} />
                </div>
                <div className='features-text'>
                  <div>
                    <p className='name'>{name}</p>
                  </div>
                  <div>
                    <p className='description'>{description}</p>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
      </Swiper>
    </>
  )
}

export default Carousel
