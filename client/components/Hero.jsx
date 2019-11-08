import React from 'react'
import Villian from './Villian'

class Hero extends React.Component {
  state = {
    heights: {
      height0: 150,
      height1: 150,
      height2: 150,
      height3: 150,
      height4: 150
    },
    choice: 0
  }

  expandDeku = (hero) => {
    this.setState({ heights: {
      height0: 200,
      height1: 150,
      height2: 150,
      height3: 150,
      height4: 150 },
    choice: 1
    })
  }
  expandAllMight = (hero) => {
    this.setState({ heights: {
      height0: 150,
      height1: 200,
      height2: 150,
      height3: 150,
      height4: 150 },
    choice: 2
    })
  }
  expandBakugo = (hero) => {
    this.setState({ heights: {
      height0: 150,
      height1: 150,
      height2: 200,
      height3: 150,
      height4: 150 },
    choice: 3 })
  }
  expandOchaco = (hero) => {
    this.setState({ heights: {
      height0: 150,
      height1: 150,
      height2: 150,
      height3: 200,
      height4: 150 },
    choice: 4 })
  }
  expandTodoroki = (hero) => {
    this.setState({ heights: {
      height0: 150,
      height1: 150,
      height2: 150,
      height3: 150,
      height4: 200 },
    choice: 5
    })
  }

  render () {
    return (
      <div className='test'>
        <div className ='heroesContainer'>
          {/* <h2>Hero's up, on a tuesday</h2> */}

          <div onClick={this.expandDeku} >
            <img src="/Images/Heros/Deku.jpeg" alt="deku" height={this.state.heights.height0} width="Auto"/>
          </div>

          <div onClick={this.expandAllMight}>
            <img src="/Images/Heros/AllMight.jpeg" alt="deku" height={this.state.heights.height1} width="Auto" />
          </div>

          <div onClick={this.expandBakugo}>
            <img src="/Images/Heros/Bakugo.jpeg" alt="deku" height={this.state.heights.height2} width="Auto" />
          </div>

          <div onClick={this.expandOchaco}>
            <img src="/Images/Heros/Ochaco.jpeg" alt="deku" height={this.state.heights.height3} width="Auto" />
          </div>

          <div onClick={this.expandTodoroki}>
            <img src="/Images/Heros/Todoroki.jpeg" alt="deku" height={this.state.heights.height4} width="Auto" />
          </div>

            
       
        </div>
        <Villian
            choice = {this.state.choice}
            determineWinner = {this.props.determineWinner}   />
      </div>

    )
  }
}

export default Hero
