import { cars } from '../utils/carsCollection'
import NavBar from './components/NavBar'
import Card from './components/Card'
import Filters from './components/Filters'
import './App.css'

const App = () => {
  return (
    <>
      <NavBar />

      <main>
        <section>
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
                  />
                )
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
