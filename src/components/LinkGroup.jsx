import React from 'react'

const LinkGroup = ({ data, separator }) => (
  <>
    <div className='link-group'>
      <ul>
        {data.map((linkElement) => {
          return (
            <li key={linkElement}>
              <a href='#'>{linkElement}</a>
            </li>
          )
        })}
      </ul>
    </div>
    {separator && <hr />}
  </>
)

export default LinkGroup
