import { useContext, useState } from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import { CarsContext } from '../context/CarsContext'
import Dropdown from '../components/Dropdown'
import './Navigation.css'

const Navigation = () => {
  const { selectedCard } = useContext(CarsContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

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
        <div className='menu-container' onClick={handleMenu}>
          <p>Menu</p>
          <img src='/hamburger.svg' alt='menu-toggle' />
        </div>
        {isMenuOpen && <Dropdown toggleMenu={handleMenu} />}
      </header>
      <Outlet />
    </>
  )
}

export default Navigation
