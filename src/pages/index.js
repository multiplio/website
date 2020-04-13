import React from 'react'
import { createUseStyles } from 'react-jss'

import palette from '../styles/palette'

import Container from '../components/Container'

const useStyles = createUseStyles({
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

export default () => {
  const classes = useStyles()
  return (
    <Container>

      <div className={ classes.container }>

        <div className={ classes.view }>
          <section>
            <h1>Building the future today.</h1>
          </section>
        </div>

      </div>

    </Container>
  )
}
