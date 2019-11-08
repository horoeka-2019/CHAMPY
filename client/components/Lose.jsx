import React from 'react'
import { Link } from 'react-router-dom'

const Lose = () => {
  return (
    <div>
      <img className="villainsWin" src="/Images/villains_win.jpg" />
      <h1 className="resultHeading">Villains Win!</h1>
      <Link to="/start">
        <button className='startButton'>Play Again</button>
      </Link>
    </div>

  )
}

export default Lose
