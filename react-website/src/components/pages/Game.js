import React from 'react'
import '../../App.css'
import Gamecards from './Gamecards'
// import picture from '../../images/RetroGame.jpg'

const image = new URL("../../images/RetroGame.jpg", import.meta.url)

export default function Game() {
    return (
        <Gamecards></Gamecards>
    )
}