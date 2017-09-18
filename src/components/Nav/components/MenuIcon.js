import React, {Component} from 'react'
import './menuIcon.scss'
import PropTypes from 'prop-types'

export default class MenuIcon extends Component {
  static propTypes = {
    cb: PropTypes.func,
    open: PropTypes.bool
  }

  render () {
    return (
      <div onClick={this.props.cb} styleName={'icon ' + `${this.props.open ? 'back-icon' : 'menu-icon '}`}>
        <span />
        <span styleName='second' />
        <span styleName='third' />
      </div>
    )
  }
}
