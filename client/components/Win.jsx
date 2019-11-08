import React from 'react'
import { Link } from 'react-router-dom'

const Win = () => {

  return (

    <div >
      <img className="heroesWin" src="/Images/heroes_win.jpg" />
      <h1 className="resultHeading">You Win!</h1>
      <Link to="/start">
        <button className='startButton'>Play Again</button>
      </Link>
    </div>
  )
}

export default Win
