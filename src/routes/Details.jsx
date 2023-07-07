import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import HighlightContainer from '../components/HighlightContainer'
import './Details.css'
const Details = () => {
  const [carDetails, setCarDetails] = useState(null)
  const { car } = useParams()
  console.log(car)
  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await fetch(
          `https://challenge.egodesign.dev/api/models/${car}`
        )
        if (!response.ok) {
          throw new Error(
            'something wrong happened, status : ' + response.status
          )
        }
        const data = await response.json()
        setCarDetails(data)
      } catch (error) {
        console.log(error)
      }
    }
    getDetails()
  }, [])
  return (
    <main>
      <Hero carDetails={carDetails} />
      <Carousel features={carDetails?.model_features} />
      <HighlightContainer highlights={carDetails?.model_highlights} />
    </main>
  )
}

export default Details
