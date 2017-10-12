import React, { Component } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Nav from 'components/Nav'
import {Home, Design, Develop, Photo, About} from 'views'
import './app.scss'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Redirect from='/home' to='/' />
          <Route path='/design' component={Design} />
          <Route path='/develop' component={Develop} />
          <Route path='/photo' component={Photo} />
          <Route path='/about' component={About} />
        </Switch>
      </div>
    )
  }
}

export default App
