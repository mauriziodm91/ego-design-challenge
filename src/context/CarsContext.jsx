import { useState, useEffect, createContext } from 'react'

export const CarsContext = createContext({
  cars: [],
  filteredCars: [],
})

export const CarsProvider = ({ children }) => {
  const [cars, setCars] = useState([])
  useEffect(() => {
    const getCars = async () => {
      const response = await fetch('https://challenge.egodesign.dev/api/models')
      const data = await response.json()
      setCars(data)
    }
    getCars()
  }, [])

  const value = { cars }
  return <CarsContext.Provider value={value}>{children}</CarsContext.Provider>
}
