import React from 'react'
import Gamecarditem from './Gamecarditem'

function Gamecards() {
  return (
    <div className='cards'>
      <h1>FEATURED</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='card__item'>
            <Gamecarditem />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Gamecards