import React from 'react'
import Gamecarditem from './Gamecarditem'
import './Gamecards.css'

function Gamecards() {
  return (
    <div className='cards'>
      <h1>FEATURED</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <Gamecarditem />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Gamecards