import React from 'react'
import { Link } from 'react-router-dom'

const Win = () => {
  console.log('THIS IS THE WIN PAGE')
  return (

    <div >
      <img className="heroesWin" src="/Images/heroes_win.jpg" />
      <h1 className="resultHeading">You Win!</h1>
    </div>
  )
}

export default Win
