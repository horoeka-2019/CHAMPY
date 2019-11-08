import React from 'react'
import { Redirect } from 'react-router-dom'

const Draw = () => {
  setTimeout(
    function () {
      location.href = '#/game'
    },
    2000)

  return (
    <div>
      <img className="draw" src="/Images/draw.jpg" />
      <h1 className="resultHeading">Draw!</h1>
    </div>
  )
}

export default Draw
