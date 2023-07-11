import LinkGroup from './LinkGroup'
import './Dropdown.css'
const menuElements = {
  firstGroup: [
    'Modelos',
    'Servicios y Accesorios',
    'Financiación',
    'Reviews y Comunidad',
  ],
  secondGroup: [
    'Toyota Mobility Service',
    'Toyota Gazoo Racing',
    'Toyota Híbridos',
  ],
  thirdGroup: ['Concesionarios', 'Test Drive', 'Contacto'],
  fourthGroup: [
    'Actividades',
    'Servicios al Cliente',
    'Ventas Especiales',
    'Innovación',
    'Prensa',
    'Acerca de...',
  ],
}

const Dropdown = ({ toggleMenu }) => {
  return (
    <div className='dropdown-container'>
      <div className='close-section'>
        <p onClick={toggleMenu}>Cerrar &#10006;</p>
      </div>
      <div className='white-section'>
        {menuElements?.firstGroup && (
          <LinkGroup data={menuElements.firstGroup} separator={true} />
        )}
        {menuElements?.secondGroup && (
          <LinkGroup data={menuElements.secondGroup} separator={true} />
        )}
        {menuElements?.thirdGroup && (
          <LinkGroup data={menuElements.thirdGroup} />
        )}
      </div>
      <div className='gray-section'>
        {menuElements?.fourthGroup && (
          <LinkGroup data={menuElements.fourthGroup} />
        )}
      </div>
    </div>
  )
}

export default Dropdown
