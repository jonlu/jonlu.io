import React, { Component } from 'react'
import Header from 'components/Header'
import './app.scss'

class App extends Component {
  render () {
    return (
      <div styleName='App'>
        <Header />
        <h3>Welcome to a new standard in boilerplates.</h3>
      </div>
    )
  }
}

export default App
