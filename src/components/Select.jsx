import { useState, useRef, useContext } from 'react'
import { CarsContext } from '../context/CarsContext'
import { MdKeyboardArrowDown } from 'react-icons/md'
import './Select.css'

const options = [
  'Nada',
  'De menor a mayor precio',
  'De mayor a menor precio',
  'Mas nuevos primero',
  'Mas viejos primero',
]

const Select = ({ ContainerProps, InputProps }) => {
  const { setSortOption, sortOption } = useContext(CarsContext)
  const [GetIsOpenSelect, SetIsOpenSelect] = useState(false)
  const InputReference = useRef(sortOption)

  return (
    <div className='select-container' {...ContainerProps}>
      <input
        ref={InputReference}
        readOnly={true}
        className='select-input'
        onClick={(Event) => SetIsOpenSelect(true)}
        onBlur={() => SetIsOpenSelect(false)}
        {...InputProps}
      />

      <span className={GetIsOpenSelect ? 'select-icon active' : 'select-icon'}>
        <MdKeyboardArrowDown />
      </span>
      <span
        className={GetIsOpenSelect ? 'select-options active' : 'select-options'}
      >
        {options.map((Item, Index) => (
          <li
            className='select-option'
            onClick={(Event) => {
              InputReference.current.value = Event.target.outerText
              setSortOption(Event.target.outerText)
              SetIsOpenSelect(false)
            }}
            key={Index}
          >
            {Item}
          </li>
        ))}
      </span>
    </div>
  )
}

export default Select
