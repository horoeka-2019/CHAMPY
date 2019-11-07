import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <React.Fragment>
      <img></img>
      <Link to="/game">
        <input type="submit" className="startButton" value="start"></input>
      </Link>
    </React.Fragment>
  )
}

export default Start
