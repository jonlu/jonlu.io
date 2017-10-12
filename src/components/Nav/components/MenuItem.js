import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import './menuItem.scss'

const MenuItem = ({children, inputRef, cb}) => {
  return (
    <div onClick={cb} ref={inputRef} styleName='item'><Link to={children}>{children}</Link></div>
  )
}
MenuItem.propTypes = {
  children: PropTypes.node,
  inputRef: PropTypes.func,
  cb: PropTypes.func
}
export default MenuItem
