import { Outlet, Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
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
                <a className='nav-link' href='#'>
                  Modelos
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Ficha de modelo
                </a>
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
