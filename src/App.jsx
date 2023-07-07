import { Route, Routes } from 'react-router-dom'
import Navigation from './routes/Navigation'
import Catalogue from './routes/Catalogue'
import Details from './routes/Details'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Catalogue />} />
          <Route path='detail/:car' element={<Details />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
