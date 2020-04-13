import React from 'react'
import { Link } from './Router'
import { StyleSheet, css } from 'aphrodite'

import pallete from '../Styles/pallete'

const Footer = () => {
  return (
    <div className={css(styles.footer)}>

      <section className={css(styles.view)}>
        <span className={css(styles.item)}>Copyright ©2019 Multipl</span>
        <Link className={css(styles.item)} to="/terms">Terms of Use</Link>
        <Link className={css(styles.item)} to="/privacy">Privacy Policy</Link>
      </section>

    </div>
  )
}
export default Footer

const styles = StyleSheet.create({
  footer: {
    backgroundColor: pallete.background,
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

