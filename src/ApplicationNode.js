import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from 'services/history'
import DevTools from './components/DevTools'
import App from 'views/App'
import './styles/global.scss'

const ApplicationNode = ({store}) => {
  return (
    <Provider store={store}>
      <div>
        {process.env.NODE_ENV !== 'production' && <DevTools /> }
        <Router history={history}>
          <App />
        </Router>
      </div>
    </Provider>
  )
}

ApplicationNode.propTypes = {
  store: PropTypes.object.isRequired
}

export default ApplicationNode
