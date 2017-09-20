import React, {Component} from 'react'
// import PropTypes from 'prop-types'
import './portfolioItem.scss'

export default class PortfolioItem extends Component {
  static propTypes = {}
  state = {}
  render () {
    return (
      <section>
        <div styleName='portfolio-item'>
          <img src='http://placehold.it/1000x375' />
          <span styleName='number'>01</span>
          <article>
            <h3>01 | Primaries</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies nisl id mattis blandit. Nullam laoreet semper turpis, eget ultrices sapien laoreet nec. Sed auctor convallis turpis vel cursus. Sed semper rhoncus dui id lobortis. Cras dictum vulputate sapien, a volutpat velit condimentum quis.</p>
          </article>
        </div>
      </section>
    )
  }
}
