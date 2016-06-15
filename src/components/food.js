import React from 'react'
import Block from './block'

export default React.createClass({
 
  componentDidMount: function () {
    setInterval( () => this.props.decreaseBlockCount(this.props.id), 2000)
  },

  // componentDidUnmount () {
  //   clearInterval()
  // }

  render() {
    var initialFood = new Array(this.props.blockCounts[this.props.id]).fill(0)

    return (
      <div className= "a-need food-container"  >
        <div>Food</div>
        <button onClick={() => this.props.increaseBlockCount(this.props.id) } >Feed</button>
        { initialFood.map( el => <Block type='food'/> ) }
      </div>
    );
  }

})

