import React from 'react'

class Hero extends React.Component {
  state = {
    height0: 200,
    height1: 200,
    height2: 200,
    height3: 200,
    height4: 200

  }

  expandDeku = (hero) => {
    this.setState({ height0: 300 })
  }
  expandAllMight = (hero) => {
    this.setState({ height1: 300 })
  }
  expandBakugo = (hero) => {
    this.setState({ height2: 300 })
  }
  expandOchaco = (hero) => {
    this.setState({ height3: 300 })
  }
  expandTodoroki = (hero) => {
    this.setState({ height4: 300 })
  }

  render () {
    return (
      <React.Fragment>
        <h2>Hero's up, on a tuesday</h2>

        <div onClick={this.expandDeku} >
          <img src="/Images/Heros/Deku.jpeg" alt="deku" height={this.state.height0} width="Auto"/>
        </div>

        <div onClick={this.expandAllMight}>
          <img src="/Images/Heros/AllMight.jpeg" alt="deku" height={this.state.height1} width="Auto" />
        </div>

        <div onClick={this.expandBakugo}>
          <img src="/Images/Heros/Bakugo.jpeg" alt="deku" height={this.state.height2} width="Auto" />
        </div>

        <div onClick={this.expandOchaco}>
          <img src="/Images/Heros/Ochaco.jpeg" alt="deku" height={this.state.height3} width="Auto" />
        </div>

        <div onClick={this.expandTodoroki}>
          <img src="/Images/Heros/Todoroki.jpeg" alt="deku" height={this.state.height4} width="Auto" />
        </div>

      </React.Fragment>
    )
  }
}

export default Hero
