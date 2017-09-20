import React, {Component} from 'react'
import PortfolioItem from 'components/PortfolioItem'
import './des.scss'

export default class Des extends Component {
  state = {}
  render () {
    return (
      <div className='page-container'>
        <h1 styleName='header'>Design</h1>
        <PortfolioItem /><PortfolioItem />
      </div>
    )
  }
}
