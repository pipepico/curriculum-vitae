import React, { useState } from 'react'

const HelloWorld = () => {
  const [active, setActive] = useState(true)

  const handleClick = () => {
    setActive(!active)
  }

  return(
    <>
      <button onClick={handleClick}>Hide</button>
      {
        active &&
        <h1>Hi sth</h1>
      }
    </>
  )
}

export default HelloWorld