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
    console.log(5)
    console.log('BEFORE this.villianNum',this.villianNum)
    this.setState({ heights: {
      height0: 200,
      height1: 200,
      height2: 200,
      height3: 200,
      height4: 300 },
    villianNum: 5
    })
    console.log('this.villianNum',this.villianNum)
  }

  evaluateWinner = () => {
    // this.props.determineWinner(this.props.choice, this.props.villianNum)
    console.log('this.props',this.props)
    console.log('this.props.villianNum',this.props.villianNum)
    console.log(this.props.determineWinner(this.props.choice, this.state.villianNum))
  }

  // getRandomNumber = (min, max) => {
  //   min = Math.ceil(1)
  //   max = Math.floor(5)
  //   return Math.floor(Math.random() * (max - min + 1)) + min
  // }

  // AssignVillain = () => {
  //   const random = this.getRandomNumber

  //   this.setState({
  //     heights: {
  //       height0: 200,
  //       height1: 200,
  //       height2: 200,
  //       height3: 200,
  //       height4: 200 },
  //     villianNum: random
  //   })
  // }

  render () {
    console.log(this.props)
    console.log('this',this)
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
