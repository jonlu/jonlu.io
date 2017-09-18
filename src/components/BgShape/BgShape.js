import React, {Component} from 'react'
// import PropTypes from 'prop-types'
import './bgShape.scss'

export default class BgShape extends Component {
  static propTypes = {}
  state = {}
  render () {
    return (
      <div styleName='container'>
        <div styleName='circle' />
      </div>
    )
  }
}
