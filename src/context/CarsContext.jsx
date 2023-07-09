import { useState, useEffect, createContext } from 'react'

export const CarsContext = createContext({
  catalogueSet: [],
  activeFilter: '',
  setActiveFilter: () => {},
  sortOption: '',
  setSortOption: () => {},
})

export const CarsProvider = ({ children }) => {
  const [cars, setCars] = useState([])
  const [catalogueSet, setCatalogueSet] = useState([])
  const [activeFilter, setActiveFilter] = useState('Todos')
  const [sortOption, setSortOption] = useState('Nada')
  useEffect(() => {
    const getCars = async () => {
      try {
        const response = await fetch(
          'https://challenge.egodesign.dev/api/models'
        )
        if (!response.ok) {
          throw new Error('error status: ' + response.status)
        }
        const data = await response.json()
        setCars(data)
      } catch (error) {
        console.log(error)
      }
    }
    getCars()
  }, [])

  useEffect(() => {
    const filteredCarSet = filterCarsBySegment(cars, activeFilter)
    const sortedCarSet = sortCarsByOrder(filteredCarSet, sortOption)
    setCatalogueSet(sortedCarSet)
  }, [cars, activeFilter, sortOption])

  const filterCarsBySegment = (cars, filterName) => {
    let filteredCars = [...cars]
    if (filterName === 'Todos') {
      return filteredCars
    } else if (filterName === 'Autos') {
      return filteredCars.filter(
        (car) => car.segment === 'Sedan' || car.segment === 'Hatchback'
      )
    } else if (filterName === 'Pickups y Comerciales') {
      return filteredCars.filter(
        (car) => car.segment === 'Pickups y Comerciales'
      )
    } else if (filterName === 'SUVs y Crossovers') {
      return filteredCars.filter((car) => car.segment === 'SUVs')
    } else {
      return []
    }
  }

  const sortCarsByOrder = (cars, orderBy) => {
    let sortedCars = [...cars]
    if (orderBy === 'Nada') {
      return sortedCars.slice().sort((a, b) => a.id - b.id)
    } else if (orderBy === 'De mayor a menor precio') {
      return sortedCars.sort((a, b) => b.price - a.price)
    } else if (orderBy === 'De menor a mayor precio') {
      return sortedCars.sort((a, b) => a.price - b.price)
    } else if (orderBy === 'Mas nuevos primero') {
      return sortedCars.sort((a, b) => b.year - a.year)
    } else if (orderBy === 'Mas viejos primero') {
      return sortedCars.sort((a, b) => a.year - b.year)
    } else {
      return sortedCars
    }
  }

  const value = {
    catalogueSet,
    activeFilter,
    sortOption,
    setActiveFilter,
    setSortOption,
  }
  return <CarsContext.Provider value={value}>{children}</CarsContext.Provider>
}
