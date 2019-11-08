import React from 'react'
import Hero from './Hero'

const Game = (props) => {
  const determineWinner = (heroChoice, villanChoice) => {
    if (heroChoice === 1 && villanChoice === 1) {
      setTimeout(() => { location.href = '#/draw' }, 2000)
    }
    if (heroChoice === 1 && villanChoice === 2) {
      setTimeout(() => { location.href = '#/win' }, 2000)
    }
    if (heroChoice === 1 && villanChoice === 3) {
      setTimeout(() => { location.href = '#/lose' }, 2000)
    }
    if (heroChoice === 1 && villanChoice === 4) {
      setTimeout(() => { location.href = '#/win' }, 2000)
    }
    if (heroChoice === 1 && villanChoice === 5) {
      setTimeout(() => { location.href = '#/lose' }, 2000)
    }
    if (heroChoice === 2 && villanChoice === 1) {
      setTimeout(() => { location.href = '#/lose' }, 2000)
    }
    if (heroChoice === 2 && villanChoice === 2) {
      setTimeout(() => { location.href = '#/draw' }, 2000)
    }
    if (heroChoice === 2 && villanChoice === 3) {
      setTimeout(() => { location.href = '#/win' }, 2000)
    }
    if (heroChoice === 2 && villanChoice === 4) {
      setTimeout(() => { location.href = '#/lose' }, 2000)
    }
    if (heroChoice === 2 && villanChoice === 5) {
      setTimeout(() => { location.href = '#/win' }, 2000)
    }
    if (heroChoice === 3 && villanChoice === 1) {
      setTimeout(() => { location.href = '#/win' }, 2000)
    }
    if (heroChoice === 3 && villanChoice === 2) {
      setTimeout(() => { location.href = '#/lose' }, 2000)
    }
    if (heroChoice === 3 && villanChoice === 3) {
      setTimeout(() => { location.href = '#/draw' }, 2000)
    }
    if (heroChoice === 3 && villanChoice === 4) {
      setTimeout(() => { location.href = '#/win' }, 2000)
    }
    if (heroChoice === 3 && villanChoice === 5) {
      setTimeout(() => { location.href = '#/lose' }, 2000)
    }
    if (heroChoice === 4 && villanChoice === 1) {
      setTimeout(() => { location.href = '#/lose' }, 2000)
    }
    if (heroChoice === 4 && villanChoice === 2) {
      setTimeout(() => { location.href = '#/win' }, 2000)
    }
    if (heroChoice === 4 && villanChoice === 3) {
      setTimeout(() => { location.href = '#/lose' }, 2000)
    }
    if (heroChoice === 4 && villanChoice === 4) {
      setTimeout(() => { location.href = '#/draw' }, 2000)
    }
    if (heroChoice === 4 && villanChoice === 5) {
      setTimeout(() => { location.href = '#/win' }, 2000)
    }
    if (heroChoice === 5 && villanChoice === 1) {
      setTimeout(() => { location.href = '#/win' }, 2000)
    }
    if (heroChoice === 5 && villanChoice === 2) {
      setTimeout(() => { location.href = '#/lose' }, 2000)
    }
    if (heroChoice === 5 && villanChoice === 3) {
      setTimeout(() => { location.href = '#/win' }, 2000)
    }
    if (heroChoice === 5 && villanChoice === 4) {
      setTimeout(() => { location.href = '#/lose' }, 2000)
    }
    if (heroChoice === 5 && villanChoice === 5) {
      setTimeout(() => { location.href = '#/draw' }, 2000)
    }
  }

  return (
    <React.Fragment>
      <div className="gameBackground">
        <div >
          {/* <h1 className="bubble">Im here boi </h1> */}
            <Hero determineWinner={determineWinner} />
        </div>
      </div>

    </React.Fragment>
  )
}

export default Game
