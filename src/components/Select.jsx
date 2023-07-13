import { useState, useRef } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import './Select.css'

const Select = ({ ContainerProps, InputProps, options, setters }) => {
  const { defaultValue, set } = setters
  const [GetIsOpenSelect, SetIsOpenSelect] = useState(false)
  const InputReference = useRef(defaultValue)

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
              set(Event.target.outerText)
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
