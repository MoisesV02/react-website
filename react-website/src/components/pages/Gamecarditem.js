import React from 'react'
import { Link } from 'react-router-dom'

function Gamecarditem() {
  return (
    <>
    <li className='cards__item'>
      <link className='cards__item__link'>
        <figure className='cards__item_pic_wrap'>
          <img src='/' alt='' />
        </figure>
        <div className='cards__item__info'>
          <h1 className='cards__item__text' />
        </div>
      </link>
    </li>
    </>
  )
}

export default Gamecarditem