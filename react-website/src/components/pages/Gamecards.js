import React from 'react';
import './Gamecards.css';
import CardItem from './Gamecarditem';

function Cards() {
  return (
    <div className='cards'>
      <h1>GAMES</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='here is were the text goes'
              label='Game'
              path='/'
            />
            <CardItem
              src='images/img-9.jpg'
              text='here is were the text goes'
              label='Game'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;