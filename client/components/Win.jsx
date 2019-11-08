import React from 'react'
import { Link } from 'react-router-dom'

const Win = () => {

  return (

    <div className="container">
      <img className="heroesWin" src="/Images/heroes_win.jpg" />
      <h1 className="resultHeading">You Win!</h1>
      <Link to="/start">
        <button className='startButton win'>Play Again</button>
      </Link>
    </div>
  )
}

export default Win
