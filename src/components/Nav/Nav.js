import React, {Component} from 'react'
import {MenuIcon, MenuItem} from './components'
import {TweenMax} from 'gsap'
import './nav.scss'

export default class Nav extends Component {
  static propTypes = {}
  state = {
    isOpen: false
  }

  static MenuItems = ['home', 'design', 'develop', 'photo', 'about']

  itemRefs = []

  componentDidUpdate () {
    console.log(this.itemRefs)
  }

  handleToggle = () => {
    if (this.state.isOpen) {
      TweenMax.staggerTo(this.itemRefs, 0.4, {opacity: 0, display: 'none'})
    } else {
      TweenMax.staggerFromTo(this.itemRefs, 0.75, {opacity: 0, transform: 'translate(5px, 0)'}, {opacity: 1, transform: 'translate(0px)', display: 'block'}, 0.05)
    }
    this.setState(state => {
      return {
        isOpen: !state.isOpen
      }
    })
  }

  setRef = (i) => (el) => {
    if (el === null) { return }
    this.itemRefs[i] = el
  }

  render () {
    return (
      <nav>
        <MenuIcon cb={this.handleToggle} open={this.state.isOpen} />
        {Nav.MenuItems.map((item, i) => {
          return <MenuItem cb={this.handleToggle} inputRef={this.setRef(i)} key={i}>{item}</MenuItem>
        })}
      </nav>
    )
  }
}
