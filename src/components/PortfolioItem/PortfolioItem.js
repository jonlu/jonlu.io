import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Gallery from './components/Gallery'
import FaExternalLink from 'react-icons/lib/fa/external-link'
import './portfolioItem.scss'

export default class PortfolioItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
      thumb: PropTypes.string,
      desc: PropTypes.string,
      title: PropTypes.string,
      link: PropTypes.string,
      gallery: PropTypes.arrayOf(PropTypes.object),
      logos: PropTypes.string
    }),
    index: PropTypes.string
  }

  state = {
    showGallery: false
  }

  handleGalleryOpen = () => {
    this.setState({showGallery: true})
  }

  handleGalleryClose = () => {
    this.setState({showGallery: false})
  }

  render () {
    const {thumb, desc, title, gallery, link} = this.props.item
    const {index} = this.props
    return (
      <section>
        <div styleName='portfolio-item'>
          <img src={thumb} onClick={this.handleGalleryOpen} />
          <span styleName='number'>{index}</span>
          <article>
            <h3>{index} | {title}</h3>
            <p>{desc}</p>
            <br />
            {link
              ? <div><a href={link}>View Project &nbsp;<FaExternalLink /></a></div>
              : null
            }
          </article>
        </div>
        {this.state.showGallery
          ? <Gallery items={gallery} cb={this.handleGalleryClose} />
          : null
        }
      </section>
    )
  }
}
