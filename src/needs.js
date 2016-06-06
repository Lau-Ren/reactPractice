import React from 'react'

import Food from './food.js'
import Water from './water.js'

export default class Needs extends React.Component {
  render () {
    return (
      <div id="needs">
        <Food />
        <Water />
      </div>
    );
  }

}
