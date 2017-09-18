import React, { Component } from 'react'
import FaceRotation from 'components/FaceRotation'
import BgShape from 'components/BgShape'
import './app.scss'

class App extends Component {
  render () {
    return (
      <div styleName='App'>
        <BgShape />
        <FaceRotation />
      </div>
    )
  }
}

export default App
