import React, {Component} from 'react'
import FaceRotation from 'components/FaceRotation'
import BgShape from 'components/BgShape'
import {Name} from './components'
// import PropTypes ferom 'prop-types'

export default class Home extends Component {
  static propTypes = {}
  state = {}
  render () {
    return (
      <div>
        <BgShape />
        <FaceRotation />
        <Name />
      </div>
    )
  }
}
