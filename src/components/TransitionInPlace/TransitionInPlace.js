import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {TweenLite, Power2} from 'gsap'

export default class TransitionInPlace extends PureComponent {
  static propTypes = {
    duration: PropTypes.number, // in milliseconds
    children: PropTypes.node,
    id: PropTypes.number
  }

  static defaultProps = {
    duration: 500
  }

  state = {
    currentChild: undefined,
    prevChildren: []
  }

  componentWillMount () {
    this.setState({
      currentChild: React.Children.only(this.props.children)
    })
  }

  componentWillReceiveProps (nextProps) {
    const forwardNav = nextProps.id > this.props.id
    if (nextProps.id !== this.props.id) {
      this.setState(currentState => {
        return {
          currentChild: React.Children.only(nextProps.children),
          prevChildren: [
            currentState.currentChild,
            ...currentState.prevChildren
          ]
        }
      }, () => {
        this.timer = setTimeout(this.handleRemove, this.props.duration)
        this.animate(forwardNav)
      })
    } else {
      this.setState({currentChild: React.Children.only(nextProps.children)})
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (this.state.currentChild === nextState.currentChild) {
      return false
    }
    return true
  }

  componentWillUnmount () {
    clearTimeout(this.timer)
  }

  animate = (forwardNav) => {
    if (this.el && this.lastEl) {
      const width = this.el.getBoundingClientRect().width
      if (forwardNav) {
        TweenLite.fromTo(this.el, this.props.duration / 1000, {css: {left: `${width}px`}, ease: Power2.easeOut}, {css: {left: '0px'}, ease: Power2.easeOut})
        TweenLite.fromTo(this.lastEl, this.props.duration / 1000, {css: {left: '0px', width: `${width}px`}, ease: Power2.easeOut}, {css: {left: `-${width}px`}, ease: Power2.easeOut})
      } else {
        TweenLite.fromTo(this.el, this.props.duration / 1000, {css: {left: `-${width}px`}, ease: Power2.easeOut}, {css: {left: '0px'}, ease: Power2.easeOut})
        TweenLite.fromTo(this.lastEl, this.props.duration / 1000, {css: {left: '0px'}, ease: Power2.easeOut}, {css: {left: `${width}px`}, ease: Power2.easeOut})
      }
    }
  }

  handleRemove = () => {
    this.setState((currentState) => {
      return {
        prevChildren: currentState.prevChildren.slice(0, -1)
      }
    })
  }

  storeRef = (el) => {
    this.el = el
  }

  storeLastRef = (el) => {
    this.lastEl = el
  }

  render () {
    return (
      <div style={{position: 'relative', overflow: 'hidden', height: '100%'}}>
        <span style={{position: 'absolute'}} ref={this.storeLastRef}>
          {this.state.prevChildren.map((child, i) => {
            return React.cloneElement(child, {key: i})
          })}
        </span>
        <span style={{position: 'relative'}} ref={this.storeRef}>
          {React.cloneElement(this.state.currentChild)}
        </span>
      </div>
    )
  }
}
