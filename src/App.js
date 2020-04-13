import React from 'react'
import { Root, Routes } from 'react-static'
//
import { Router } from 'components/Router'

import './app.css'

function App() {
  return (
    <Root>
      <main>
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </main>
    </Root>
  )
}

export default App
