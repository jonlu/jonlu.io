import React, {Component} from 'react'
import me from './assets/me.jpg'
import './about.scss'
import {TweenMax, Power4} from 'gsap'
// import PropTypes from 'prop-types'

export default class About extends Component {
  static propTypes = {}
  state = {}
  hello = []

  componentDidMount () {
    TweenMax.staggerFrom(this.hello, 1, {opacity: 0, transform: 'translateY(30px) rotate(45deg)', ease: Power4.easeOut}, 0.05)
  }

  setRef = (key) => (ref) => {
    this[key] = ref
  }

  setRefArray = (key) => (ref) => {
    this[key].push(ref)
  }

  render () {
    return (
      <div className='page-container'>
        <h1 className='page-header'>About Me</h1>
        <div styleName='content'>
          <img styleName='profile-img' src={me} />
          <div styleName='desc'>
            <h2>
              <span ref={this.setRefArray('hello')}>H</span>
              <span ref={this.setRefArray('hello')}>e</span>
              <span ref={this.setRefArray('hello')}>l</span>
              <span ref={this.setRefArray('hello')}>l</span>
              <span ref={this.setRefArray('hello')}>o</span>
              <span ref={this.setRefArray('hello')}>!</span>
            </h2>
            <p>
              I'm Jonathan Lu: currently a Software Engineer at Squarespace. The idea of excellence in both design and development keeps me inspired. Whether it's starting a project from scratch or architecting a project within an already-integrated system, I help turn ideas into reality at any step along the way.
              <br />
              <br />
              I also love to travel, take photos, blow glass, and make pottery in my free time.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
