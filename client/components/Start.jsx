import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className="container">
      <div>
        <img className="startImg" src="/Images/draw.jpg" />
      </div>
      <Link to="/game">
        {/* <div className="startWrapper"> */}
        <input type="submit" className="startButton" value="START"></input>
        {/* </div> */}
      </Link>
    </div>
  )
}

export default Start
