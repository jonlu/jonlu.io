import React, {Component} from 'react'
import FaceRotation from 'components/FaceRotation'
import BgShape from 'components/BgShape'
// import PropTypes from 'prop-types'

export default class Home extends Component {
  static propTypes = {}
  state = {}
  render () {
    return (
      <div>
        <BgShape />
        <FaceRotation />
      </div>
    )
  }
}
