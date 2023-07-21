import React from 'react'

const ItemListContainer = ({greeting1, greeting2}) => {
  return (
    <div className='cajaGreeting'>
      <h2>{greeting1}</h2>
      <h5>{greeting2}</h5>
    </div>
  )
}

export default ItemListContainer