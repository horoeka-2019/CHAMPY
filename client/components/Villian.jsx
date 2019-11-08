import React from 'react'

class Villian extends React.Component {
  state = {
    height0: 200,
    height1: 200,
    height2: 200,
    height3: 200,
    height4: 200

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

  // randomNumber = () => {
  //   const Randy = Math.randomNumber()

  //   console.log(Randy)
  // }

  render () {
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

      </React.Fragment>
    )
  }
}

export default Villian
