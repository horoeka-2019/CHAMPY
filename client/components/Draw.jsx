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
      <div>
        <img className="draw" src="/Images/draw.jpg" />
        <h1 className="resultHeading">Draw!</h1>

      </div>

    </div>
  )
}

export default Draw
