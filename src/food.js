import React from 'react'
import Block from './block'

export default class Food extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blockCount: 1
    }
  }

  increaseBlockCount() {
    let currBlockCount = this.state.blockCount
    this.setState({blockCount: currBlockCount +1})

  }

  decreaseBlockCount() {
    let currBlockCount = this.state.blockCount
      if(currBlockCount > 0){
        this.setState({blockCount: currBlockCount - 1})
      } else {
        clearInterval()
      }

  }

  componentDidMount () {
    setInterval( () => {this.decreaseBlockCount(this.state.blockCount)}, 4250)
  }

  // componentDidUnmount () {
  //   clearInterval()
  // }

  render() {
    var initialFood = new Array(this.state.blockCount).fill(0)

    return (
      <div className= "a-need food-container" onClick={this.increaseBlockCount.bind(this)} >
        <div>Food</div>
        { initialFood.map( el => <Block type='food'/> ) }
      </div>
    );
  }

}

