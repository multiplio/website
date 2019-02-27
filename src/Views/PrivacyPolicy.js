import React, { Component } from 'react'

import Container from '../Components/Container'

export default class PrivacyPolicy extends Component {
  componentDidMount () {
    document.title = 'multipl - Privacy'
  }
  render () {
    return (
      <Container>

        <h1>Privacy Policy</h1>

      </Container>
    )
  }
}

