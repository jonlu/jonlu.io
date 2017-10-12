import React, {Component} from 'react'
import assets from './assets'
import './photo.scss'
// import PropTypes from 'prop-types'

export default class Photo extends Component {
  static propTypes = {}
  state = {}
  render () {
    return (
      <div className='page-container'>
        <h1 className='page-header'>Photography</h1>
        <div styleName='grid'>
          {assets.map((item, i) => {
            return <img styleName='square-image' src={item} />
          })}
        </div>

      </div>
    )
  }
}
