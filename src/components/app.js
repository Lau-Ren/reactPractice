import React from 'react'

import Needs from './needs.js'
import PetImg from './pet-img.js'

export default React.createClass({

	increaseBlockCount : function (needTypeId) {
		this.props.store.dispatch({
			type: 'ADD_BLOCK',
			state: this.props.blockCounts,
			id: needTypeId
		})

	},

	decreaseBlockCount : function(needTypeId) {
		this.props.store.dispatch({
			type: 'LOSE_BLOCK',
			state: this.props.blockCounts,
			id: needTypeId
		})
	},

	killPet : function () {

	},

	componentDidMount : function () {
	  setInterval( () => {this.decreaseBlockCount(this.props.id)}, 2250)
	},

  render () {
  			console.log(this.props, "me state in store")


    return (
    	<div className="app">
    		<Needs 
    			increaseBlockCount={this.increaseBlockCount}
    			decreaseBlockCount={this.decreaseBlockCount}
    			blockCounts={this.props.state.blocks}


    			/>
    		<PetImg status={this.props.state.status} />	

    	</div>
   	)
  }

})
