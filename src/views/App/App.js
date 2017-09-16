import React, { Component } from 'react'
import FaceRotation from 'components/FaceRotation'
import './app.scss'

class App extends Component {
  render () {
    return (
      <div styleName='App'>
        <FaceRotation />
      </div>
    )
  }
}

export default App
