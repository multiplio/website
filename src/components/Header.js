import React, { Component } from 'react'
import { Link } from './Router'
import { StyleSheet, css } from 'aphrodite'

import palette from '../styles/palette'
import logo from '../assets/multipl-logo-transparent.svg'

export default class Header extends Component {
  render () {
    return (
      <div className={css(styles.header)}>

        <div className={css(styles.logo)}>
          <Link to="/">
            <img alt="logo" className={css(styles['logo-image'])} src={logo} />
          </Link>
          <h1 className={css(styles.name)}>multipl</h1>
        </div>

      </div>
    )
  }
}

const styles = StyleSheet.create({
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

