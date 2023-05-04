import React from 'react'

const Cell = ({board,onClick}) => {
   
  return (
      <h5 className='squre'onClick={onClick} >{ board}</h5>
  )
}

export default Cell