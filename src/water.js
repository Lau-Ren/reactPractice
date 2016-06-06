import React from 'react'
import Block from './block'

export default class Water extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blockCount: 2
    }
  }

  increaseBlockCount() {
    let currBlockCount = this.state.blockCount
    this.setState({blockCount: currBlockCount +1})

  }

  decreaseBlockCount() {
    let currBlockCount = this.state.blockCount
      if(currBlockCount < 0){
        this.setState({blockCount: currBlockCount - 1})
      } else {
        clearInterval()
      }
  }

  componentDidMount () {
    setInterval( () => {this.decreaseBlockCount(this.state.blockCount)}, 3650)
  }



  render () {
    var initialWater = new Array(this.state.blockCount).fill(0)
    return (
          <div className= "a-need water-container" onClick={this.increaseBlockCount.bind(this)} >
            <div>Water</div>
            { initialWater.map( el => <Block type='water'/> ) }
          </div>
        );
  }

}

