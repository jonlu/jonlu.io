import React, {Component} from 'react'
// import PropTypes from 'prop-types'
// import {TweenLite} from 'gsap'
import {angle1, angle2, angle3, angle4, angle5, angle6, angle7, angle8, angle9} from './assets'
import throttle from 'lodash/throttle'
import './faceRotation.scss'

export default class FaceRotation extends Component {
  static propTypes = {}

  static Angles = [angle1, angle2, angle3, angle4, angle5, angle6, angle7, angle8, angle9]

  state = {
    client: {
      width: document.body.clientWidth,
      height: document.body.clientHeight
    },
    pos: 5
  }

  componentDidMount () {
    this.el.addEventListener('mousemove', throttle(this.handleHoverRotation, 50))
    this.el.addEventListener('touchmove', throttle(this.handleTouchRotation, 50))
    window.addEventListener('resize', throttle(this.handleResize, 500))
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (this.state.pos === nextState.pos) {
      return false
    }
    return true
  }

  handleResize = (se) => {
    this.setState({
      client: {
        width: document.body.clientWidth,
        height: document.body.clientHeight
      },
      pos: 5
    })
  }

  handleHoverRotation = (se) => {
    this.setPos(se.clientX)
  }

  handleTouchRotation = (se) => {
    if (se.touches.length === 1) {
      this.setPos(se.touches[0].clientX)
    }
  }

  setPos = (x) => {
    let pos = Math.ceil(x / this.state.client.width * 9)
    pos = (pos < 1) ? 1 : pos
    pos = (pos > 9) ? 9 : pos
    this.setState({pos})
  }

  render () {
    return (
      <div styleName='home' ref={el => { this.el = el }}>
        {FaceRotation.Angles.map((angle, i) => {
          return <img
            key={i}
            src={angle}
            style={{display: `${this.state.pos === i + 1 ? 'initial' : 'none'}`}} />
        })}
      </div>
    )
  }
}
