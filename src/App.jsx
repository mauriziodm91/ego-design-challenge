import { Route, Routes } from 'react-router-dom'
import Navigation from './routes/Navigation'
import Catalogue from './routes/Catalogue'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Catalogue />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
