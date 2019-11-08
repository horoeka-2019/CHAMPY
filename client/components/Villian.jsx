import React from 'react'

class Villian extends React.Component {
  state = {
    heights: {
      height0: 200,
      height1: 200,
      height2: 200,
      height3: 200,
      height4: 200
    },
    vilchoice: 0
  }

  expandShigaraki = (hero) => {
    this.setState({ height0: 300 })
  }
  expandAllforOne = (hero) => {
    this.setState({ height1: 300 })
  }
  expandHimikoToga = (hero) => {
    this.setState({ height2: 300 })
  }
  expandStain = (hero) => {
    this.setState({ height3: 300 })
  }
  expandDabi = (hero) => {
    this.setState({ height4: 300 })
  }

  getRandomNumber = (min, max) => {
    min = Math.ceil(1)
    max = Math.floor(5)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  AssignVillain = () => {
    const random = this.getRandomNumber
      
    this.setState({
      heights: {
        height0: 200,
        height1: 200,
        height2: 200,
        height3: 200,
        height4: 200 },
      vilchoice: random
    })
  }

  render () {
    console.log(this.props)
    return (
      <React.Fragment>
        <h2>Hero's up, on a tuesday</h2>

        <div onClick={this.expandShigaraki} onMouseOver={this.randomNumber}>
          <img src="/Images/Villians/Shigaraki.png" alt="deku" height={this.state.height0} width="Auto" />
        </div>

        <div onClick={this.expandAllforOne}>
          <img src="/Images/Villians/AllforOne.png" alt="deku" height={this.state.height1} width="Auto" />
        </div>

        <div onClick={this.expandHimikoToga}>
          <img src="/Images/Villians/HimikoToga.png" alt="deku" height={this.state.height2} width="Auto" />
        </div>

        <div onClick={this.expandStain}>
          <img src="/Images/Villians/Stain.png" alt="deku" height={this.state.height3} width="Auto" />
        </div>

        <div onClick={this.expandDabi}>
          <img src="/Images/Villians/Dabi.jpeg" alt="deku" height={this.state.height4} width="Auto" />
        </div>
        <button onClick={this.assignVillain}> randy</button>
      </React.Fragment>
    )
  }
}

export default Villian
