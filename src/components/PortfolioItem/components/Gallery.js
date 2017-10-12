import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ImageGallery from 'react-image-gallery'
import CloseIcon from 'react-icons/lib/md/close'
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
        <div onClick={this.handleClose} styleName='click-close' />
        <ImageGallery
          items={this.props.items}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          showIndex
        />
        <span styleName='close-icon' onClick={this.handleClose}>{<CloseIcon size={40} />}</span>
      </div>
    )
  }
}
