import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

import pallete from '../Styles/pallete'

import Container from '../Components/Container'

class Home extends Component {
  componentDidMount () {
    document.title = 'multipl'
  }

  render () {
    return (
      <Container>

        <div className={css(styles.container)}>

          <div className={css(styles.view)}>
            <section>
              <h1>Building the future today.</h1>
            </section>
          </div>

        </div>

      </Container>
    )
  }
}
export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: pallete.background,
    height: '100%',
    width: '100%',
  },
  view: {
    margin: 0,
    display: 'flex',
    'align-items': 'center',
    'align-content': 'center',
    'justify-content': 'space-around',
    'flex-direction': 'column',
    'text-align': 'center',
  },
})

