import React from 'react'
import { Link } from './Router'
import { createUseStyles } from 'react-jss'

import palette from '../styles/palette'
import logo from '../assets/multipl-logo-transparent.svg'

const useStyles = createUseStyles({
  header: {
    backgroundColor: palette.background,
    height: '10rem',
    display: 'flex',
    'justify-content': 'space-around',
    'align-items': 'center',
  },

  logo: {
    pointer: 'cursor',
    height: '100%',
  },
  'logo-image': {
    height: '100%',
    width: 'auto',
  },

  name: {
    margin: 0,
    'text-align': 'center',
  },
})

export default () => {
  const classes = useStyles()
  return (
    <div className={classes.header}>

      <div className={classes.logo}>
        <Link to="/">
          <img alt="logo" className={classes['logo-image']} src={logo} />
        </Link>
        <h1 className={classes.name}>multipl</h1>
      </div>

    </div>
  )
}
