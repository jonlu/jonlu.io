import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import './menuItem.scss'

const MenuItem = ({children, inputRef}) => {
  return (
    <Link to={children}><div ref={inputRef} styleName='item'>{children}</div></Link>
  )
}
MenuItem.propTypes = {
  children: PropTypes.node,
  inputRef: PropTypes.func
}
export default MenuItem
