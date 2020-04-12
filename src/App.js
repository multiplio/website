import React from 'react'
import { Root, addPrefetchExcludes } from 'react-static'
//
import { Router } from 'components/Router'

import './app.css'

// Views
import Home from './Views/Home'
import PP from './Views/PrivacyPolicy'
import TOS from './Views/TermsOfUse'

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
