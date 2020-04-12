import React from 'react'
import { Root, addPrefetchExcludes } from 'react-static'
//
import { Router } from 'components/Router'

import './app.css'

// pages
import Home from './pages/Home'
import PP from './pages/PrivacyPolicy'
import TOS from './pages/TermsOfUse'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <main>
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Route exact path='/' component={Home} />
            <Route path='/privacy' component={PP} />
            <Route path='/terms' component={TOS} />
          </Router>
        </React.Suspense>
      </main>
    </Root>
  )
}

export default App
