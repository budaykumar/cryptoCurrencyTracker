import {Component} from 'react'
import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  render() {
    return (
      <div className="bgCon">
        <h1>Demo</h1>
        <CryptocurrenciesList />
      </div>
    )
  }
}

export default CryptocurrencyTracker
