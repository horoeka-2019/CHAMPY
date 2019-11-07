import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <React.Fragment>
      <div>
        <img className="startImg" src="/Images/draw.jpg" />
      </div>
      <Link to="/game">
        <input type="submit" className="startButton" value="START"></input>
      </Link>
    </React.Fragment>
  )
}

export default Start
