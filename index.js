import React from 'react'
import ReactDom from 'react-dom'

class Place extends React.Component {
  render () {
    return (
      <h1>World</h1>
    )
  }
}

ReactDom.render(
  <Place />, document.getElementById('section')
)
