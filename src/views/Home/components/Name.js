import React, {Component} from 'react'
import './name.scss'
// import PropTypes from 'prop-types'

export default class Name extends Component {
  static propTypes = {}
  state = {}
  render () {
    return (
      <div styleName='container'>
        <h1>Jonathan Lu</h1>
        <p>developer & designer</p>
      </div>
    )
  }
}
