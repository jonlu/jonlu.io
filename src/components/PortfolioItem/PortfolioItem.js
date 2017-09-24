import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {TweenLite} from 'gsap'
import Gallery from './components/Gallery'
import FaExternalLink from 'react-icons/lib/fa/external-link'
import FaGithub from 'react-icons/lib/go/mark-github'
import MdFullscreen from 'react-icons/lib/go/screen-full'
import './portfolioItem.scss'

export default class PortfolioItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
      thumb: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      link: PropTypes.string,
      demo: PropTypes.string,
      source: PropTypes.string,
      gallery: PropTypes.arrayOf(PropTypes.object),
      logos: PropTypes.string
    }).isRequired,
    index: PropTypes.string.isRequired
  }

  state = {
    showGallery: false
  }

  componentDidMount () {
    TweenLite.from(this.main, 0.5, {opacity: 0, transform: 'translateY(10px)'})
    TweenLite.from(this.number, 0.5, {opacity: 0, transform: 'translateX(-8px)', delay: 0.1})
    TweenLite.from(this.info, 0.5, {opacity: 0, transform: 'translateX(8px)', delay: 0.1})
  }

  handleGalleryOpen = () => {
    this.setState({showGallery: true})
  }

  handleGalleryClose = () => {
    this.setState({showGallery: false})
  }

  setRef = ref => el => {
    this[ref] = el
  }

  render () {
    const {thumb, desc, title, gallery, link, demo, source} = this.props.item
    const {index} = this.props
    return (
      <section>
        <div styleName='portfolio-item'>
          <div ref={this.setRef('main')}>
            {gallery
              ? <img src={thumb} onClick={this.handleGalleryOpen} />
              : null
            }
            {demo || source
              ? <a target='_blank' href={demo || source}><img src={thumb} /></a>
              : null
            }
          </div>
          <span styleName='number' ref={this.setRef('number')}>{index}</span>
          <article styleName='info' ref={this.setRef('info')}>
            <h3>{index} | {title}</h3>
            <p>{desc}</p>
            <div styleName='links'>
              {gallery
                ? <span onClick={this.handleGalleryOpen}>Gallery &nbsp;<MdFullscreen /></span>
                : null
              }
              {link
                ? <a target='_blank' href={link}>View Project &nbsp;<FaExternalLink /></a>
                : null
              }
              {demo
                ? <a target='_blank' href={demo}>Live Demo &nbsp;<FaExternalLink /></a>
                : null
              }
              {source
                ? <a target='_blank' href={source}>View Source &nbsp;<FaGithub /></a>
                : null
              }
            </div>
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
