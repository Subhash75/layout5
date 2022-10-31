import React from 'react'

function ProductBody({rank, title, price, ratings}) {
  return (
    <div className='sub-body'>
      <p>{rank}</p>
      <div>
        <p>{title}</p>
        <p>${price}</p>
      </div>
      <p>{ratings}</p>
    </div>
  )
}

export default ProductBody