import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ImageGallery from 'react-image-gallery'
// import TransitionInPlace from 'components/TransitionInPlace'
import './gallery.scss'

export default class Gallery extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    cb: PropTypes.func
  }

  componentDidMount () {
    document.body.style.overflow = 'hidden'
  }

  componentWillUnmount () {
    document.body.style.overflow = 'visible'
  }

  state = {}

  handleClose = (se) => {
    this.props.cb()
  }

  render () {
    return (
      <div styleName='no-clickthrough'>
        <div onClick={this.handleClose} styleName='close' />
        <ImageGallery
          items={this.props.items}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          showIndex
        />
      </div>
    )
  }
}
