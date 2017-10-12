import React, {Component} from 'react'
import PortfolioItem from 'components/PortfolioItem'
import assets from './assets'
import {pad} from 'services/format'

export default class Develop extends Component {
  state = {}
  render () {
    return (
      <div className='page-container'>
        <h1 className='page-header'>Develop</h1>
        {assets.map((item, i) => {
          return <PortfolioItem item={item} key={i} index={pad(i + 1, 2)} />
        })}
      </div>
    )
  }
}
