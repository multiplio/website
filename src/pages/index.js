import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import palette from '../styles/palette'

import Container from '../components/Container'

export default () => (
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.background,
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
