import React from 'react'
import { Link } from './Router'
import { createUseStyles } from 'react-jss'

import palette from '../styles/palette'

const useStyles = createUseStyles({
  footer: {
    backgroundColor: palette.background,
    height: '3rem',
    display: 'flex',
    'justify-content': 'space-around',
    'font-size': '11px',
    'font-weight': 'bold',
  },
  view: {
  },
  item: {
    margin: '0 3px',
  },
})

export default () => {
  const classes = useStyles()
  return (
    <div className={classes.footer}>

      <section className={classes.view}>
        <span className={classes.item}>Copyright ©2019 Multipl</span>
        <Link className={classes.item} to="/terms">Terms of Use</Link>
        <Link className={classes.item} to="/privacy">Privacy Policy</Link>
      </section>

    </div>
  )
}
