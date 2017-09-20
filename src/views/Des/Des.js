import React, {Component} from 'react'
import PortfolioItem from 'components/PortfolioItem'
import assets from './assets'
import './des.scss'

export default class Des extends Component {
  state = {}
  render () {
    console.log(assets)
    return (
      <div className='page-container'>
        <h1 styleName='header'>Design</h1>
        {assets.map((item, i) => {
          return <PortfolioItem img={item.thumb} desc={item.desc} key={i} index={i + 1} />
        })}
      </div>
    )
  }
}
