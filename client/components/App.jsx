import React from 'react'
import { Route } from 'react-router-dom'

// import Start from './Start'
import Game from './Game'
// import Hero from './Hero'
// import Villian from './Villian'
// import Win from './Win'
// import Lose from './Lose'
// import Draw from './Draw'

const App = () => {
  return (
    <div>
      {/* <Route path="/start" component={Start} /> */}
      <Route path="/game" component={Game} />
      {/* <Route path="/game/hero" component={Hero} />
      <Route path="/game/villian" component={Villian} /> */}
      {/* <Route path="/win" component={Win} />
      <Route path="/lose" component={Lose} />
      <Route path="/draw" component={Draw} /> */}
    </div>
  )
}

export default App
