import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

// Views
import Home from './Views/Home'
import PP from './Views/PrivacyPolicy'
import TOS from './Views/TermsOfUse'

export default class Main extends Component {
  render () {
    return (
      <main>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/privacy' component={PP} />
          <Route path='/terms' component={TOS} />
        </Switch>

      </main>
    )
  }
}

