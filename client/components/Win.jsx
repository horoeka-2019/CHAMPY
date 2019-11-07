import React from 'react'
import { Link } from 'react-router-dom'

const Win = () => {
  console.log('THIS IS THE WIN PAGE')
  return (

    <div >
      <img className="heroesWin" src="/Images/heroes_win.jpg" />
      <h1 className="resultHeading">You Win!</h1>
      <Link to="/start">
        <button>Play Again</button>
      </Link>
    </div>

  )
}

export default Win
