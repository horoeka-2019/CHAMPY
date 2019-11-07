import React from 'react'

class Hero extends React.Component {
  state = {
    heights: {
      height0: 200,
      height1: 200,
      height2: 200,
      height3: 200,
      height4: 200
    },
    winner: {
      hero0: 0,
      hero1: 0,
      hero2: 0,
      hero3: 0,
      hero4: 0
    }
  }

  expandDeku = (hero) => {
    this.setState({ heights: { height0: 300 } })
  }
  expandAllMight = (hero) => {
    this.setState({ heights: { height1: 300 } })
  }
  expandBakugo = (hero) => {
    this.setState({ heights: { height2: 300 } })
  }
  expandOchaco = (hero) => {
    this.setState({ heights: { height3: 300 } })
  }
  expandTodoroki = (hero) => {
    this.setState({ heights: { height4: 300 } })
  }

  render () {
    return (
      <React.Fragment>
        <h2>Hero's up, on a tuesday</h2>

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

      </React.Fragment>
    )
  }
}

export default Hero
