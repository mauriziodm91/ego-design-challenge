import { useContext } from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import { CarsContext } from '../context/CarsContext'
import './Navigation.css'

const Navigation = () => {
  const { selectedCard } = useContext(CarsContext)
  return (
    <>
      <header className='navigation'>
        <div className='nav-links-container'>
          <div className='logo-container'>
            <Link to='/'>
              <img className='logo' src='/logo.svg' alt='logo' />
            </Link>
          </div>
          <nav className='nav'>
            <ul className='nav-list'>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/' end>
                  Modelos
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to={`/detail/${selectedCard}`}>
                  Ficha de modelo
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className='menu-container'>
          <p>Menu</p>
          <img src='/hamburger.svg' alt='menu-toggle' />
        </div>
      </header>
      <Outlet />
    </>
  )
}

export default Navigation
