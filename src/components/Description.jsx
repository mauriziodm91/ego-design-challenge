import React, { useState, useEffect } from 'react'
import { dataParser } from '../../utils/dataParser'

const Description = ({ data, styles }) => {
  const [element, setElement] = useState(null)
  useEffect(() => {
    let string
    if (data) {
      string = dataParser(data)
      setElement(string)
    }
  }, [data])

  return (
    <>
      {element &&
        React.createElement(
          element.element,
          { 'data-block-key': element.value, style: { ...styles } },
          element.children
        )}
    </>
  )
}

export default Description
