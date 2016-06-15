import React from 'react'

import Food from './food.js'
import Water from './water.js'

export default React.createClass({
  render () {
    return (
      <div id="needs">
        <Food
        	id={0}
        	type="Food"
        	increaseBlockCount={this.props.increaseBlockCount}
        	decreaseBlockCount={this.props.decreaseBlockCount} 
        	blockCounts={this.props.blockCounts} />
        <Water 
        	id={1}
        	type="Water"
        	increaseBlockCount={this.props.increaseBlockCount}
        	decreaseBlockCount={this.props.decreaseBlockCount}  
        	blockCounts={this.props.blockCounts} />
        <p>All the needs</p>
      </div>
    );
  }

})
