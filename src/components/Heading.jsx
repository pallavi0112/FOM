import React from 'react'

const Heading = (props) => {
  return (
    <>
    <h2 style={{ textTransform: 'uppercase', letterSpacing:'3px' , fontSize:'2.3rem' , position:'relative'}}>{props.heading}</h2>
    </>
  )
}

export default Heading