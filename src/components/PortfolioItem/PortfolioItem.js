import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './portfolioItem.scss'

export default class PortfolioItem extends Component {
  static propTypes = {
    img: PropTypes.string,
    desc: PropTypes.string,
    link: PropTypes.string,
    index: PropTypes.number
  }
  state = {}
  render () {
    const {img, desc, index} = this.props
    return (
      <section>
        <div styleName='portfolio-item'>
          <img src={img} />
          <span styleName='number'>{index}</span>
          <article>
            <h3>{index} | Primaries</h3>
            <p>{desc}</p>
          </article>
        </div>
      </section>
    )
  }
}
