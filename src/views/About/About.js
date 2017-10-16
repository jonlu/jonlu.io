import React, {Component} from 'react'
import me from './assets/me.jpg'
import './about.scss'
import {TweenMax, Elastic, Power4} from 'gsap'
// import PropTypes from 'prop-types'

export default class About extends Component {
  static propTypes = {}
  state = {}
  hello = []

  componentDidMount () {
    TweenMax.from(this.profile, 0.5, {transform: 'scale(0.5)', ease: Elastic.easeOut.config(1, 0.4)})
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
          <img ref={this.setRef('profile')} styleName='profile-img' src={me} />
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
              I'm Jonathan Lu: CS & Design student, designer, and developer. The idea of excellence in each category wakes me up in the morning. Whether it's starting a project from scratch or picking up a project and running, I help turn ideas into reality at any step along the way. I have a lot to give, and a whole lot more to learn.
              <br />
              <br />
              I also occasionally travel, take photos, blow glass, and make pottery in my free time. The code is not all-consuming.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
