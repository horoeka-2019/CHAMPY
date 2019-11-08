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
    villianNum: 0
  }

  expandShigaraki = (hero) => {
    console.log(1)
    this.setState({ heights: {
      height0: 300,
      height1: 200,
      height2: 200,
      height3: 200,
      height4: 200 },
    villianNum: 1
    })
  }
  expandAllforOne = (hero) => {
    this.setState({ heights: {
      height0: 200,
      height1: 300,
      height2: 200,
      height3: 200,
      height4: 200 },
    villianNum: 2
    })
  }
  expandHimikoToga = (hero) => {
    console.log(3)
    this.setState({ heights: {
      height0: 200,
      height1: 200,
      height2: 300,
      height3: 200,
      height4: 200 },
    villianNum: 3 })
  }
  expandStain = (hero) => {
    console.log(4)
    this.setState({ heights: {
      height0: 200,
      height1: 200,
      height2: 200,
      height3: 300,
      height4: 200 },
    villianNum: 4 })
  }
  expandDabi = (hero) => {

    this.setState({ heights: {
      height0: 200,
      height1: 200,
      height2: 200,
      height3: 200,
      height4: 300 },
    villianNum: 5
    })
  }

  evaluateWinner = () => {
    this.props.determineWinner(this.props.choice, this.state.villianNum)
  }

  
    return (
      <React.Fragment>
        <h2>Hero's up, on a tuesday</h2>

        <div onClick={this.expandShigaraki} onMouseOver={this.randomNumber}>
          <img src="/Images/Villians/Shigaraki.png" alt="deku" height={this.state.heights.height0} width="Auto" />
        </div>

        <div onClick={this.expandAllforOne}>
          <img src="/Images/Villians/AllforOne.png" alt="deku" height={this.state.heights.height1} width="Auto" />
        </div>

        <div onClick={this.expandHimikoToga}>
          <img src="/Images/Villians/HimikoToga.png" alt="deku" height={this.state.heights.height2} width="Auto" />
        </div>

        <div onClick={this.expandStain}>
          <img src="/Images/Villians/Stain.png" alt="deku" height={this.state.heights.height3} width="Auto" />
        </div>

        <div onClick={this.expandDabi}>
          <img src="/Images/Villians/Dabi.jpeg" alt="deku" height={this.state.heights.height4} width="Auto" />
        </div>
        <button onClick={this.evaluateWinner}> Confirm Winner</button>
      </React.Fragment>
    )
  }
}

export default Villian
