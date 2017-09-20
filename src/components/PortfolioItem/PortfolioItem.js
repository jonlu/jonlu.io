import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './portfolioItem.scss'

export default class PortfolioItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
      thumb: PropTypes.string,
      desc: PropTypes.string,
      title: PropTypes.string,
      link: PropTypes.string
    }),
    index: PropTypes.string
  }
  state = {}
  render () {
    const {thumb, desc, title} = this.props.item
    const {index} = this.props
    return (
      <section>
        <div styleName='portfolio-item'>
          <img src={thumb} />
          <span styleName='number'>{index}</span>
          <article>
            <h3>{index} | {title}</h3>
            <p>{desc}</p>
          </article>
        </div>
      </section>
    )
  }
}
