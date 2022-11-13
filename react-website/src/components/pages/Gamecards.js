import React from 'react'

function Gamecards(title,imageUrl,body) {
  return (
    <div className='card-container'>
      <div className='image-container'>
        <img src={imageUrl} alt='test' />
      </div>
      </div>
  )
}

export default Gamecards