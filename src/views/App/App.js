import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Nav from 'components/Nav'
import {Home, Des, Dev} from 'views'
import './app.scss'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/des' component={Des} />
          <Route path='/dev' component={Dev} />
        </Switch>
      </div>
    )
  }
}

export default App
