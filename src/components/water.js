import React from 'react'
import Block from './block'

export default React.createClass({
 
  componentDidMount: function () {

    setInterval( () => this.props.decreaseBlockCount(this.props.id), 2650)
  },

  render () {
    var initialWater = new Array(this.props.blockCounts[this.props.id]).fill(0)
    return (
          <div className= "a-need water-container" >
            <div>Water</div>
            <button onClick={() => this.props.increaseBlockCount(this.props.id) } >Water</button>
            { initialWater.map( el => <Block type='water'/> ) }
          </div>
        );
  }

})

