import React, {Component} from 'react'
// import PropTypes from 'prop-types'
// import {TweenLite} from 'gsap'
import {angle1, angle2, angle3, angle4, angle5, angle6, angle7, angle8, angle9} from './assets'
import throttle from 'lodash/throttle'
import './faceRotation.scss'

export default class FaceRotation extends Component {
  static propTypes = {}

  static Angles = {angle1, angle2, angle3, angle4, angle5, angle6, angle7, angle8, angle9}

  state = {
    client: {
      width: document.body.clientWidth,
      height: document.body.clientHeight
    },
    pos: 5
  }

  componentDidMount () {
    this.el.addEventListener('mousemove', throttle(this.handleRotation, 50))
    window.addEventListener('resize', throttle(this.handleResize, 500))
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

  handleRotation = (se) => {
    let pos = Math.ceil(se.clientX / this.state.client.width * 9)
    pos = (pos === 0) ? 1 : pos
    this.setState({pos})
  }

  render () {
    return (
      <div styleName='home' ref={el => { this.el = el }}>
        <img src={FaceRotation.Angles[`angle${this.state.pos}`]} />
      </div>
    )
  }
}
