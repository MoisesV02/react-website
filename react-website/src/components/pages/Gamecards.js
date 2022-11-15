import React from 'react'
import './Gamecards.css'
import CardItem from './Gamecarditem'

const icon = new URL("../../images/SimpleRPG.png", import.meta.url)
const icon2 = new URL("../../images/Background5.png", import.meta.url)

function Gamecards() {
  return (
    <div className='Gamecards'>
      <h1>GAMES</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={icon}
              text='Tutorial: use arrow keys to move, v is select, z is inventory, and ENTER is exit'
              label='Simple RPGs'
              path='/simple-rpgs'
            />
            <CardItem
              src={icon2}
              text=''
              label=''
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Gamecards