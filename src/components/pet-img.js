import React from 'react'


export default React.createClass({
  render () {
    return (
      <div id="pet-rock">
      {this.props.status === 'alive' ? <img src="./reactPractice/public/images/petrock-alive.png"/> : <img src="./reactPractice/public/images/petrock-dead.png"/>
      }
      </div>
    );
  }

})
