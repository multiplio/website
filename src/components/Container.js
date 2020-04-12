import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

import pallete from '../Styles/pallete'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Container = ({ children }) => {
  return (
    <div className={css(styles.container)}>

      <Header/>

      { children }

      <Footer/>

    </div>
  )
}
Container.propTypes = {
  children: PropTypes.object,
}
export default Container

const styles = StyleSheet.create({
  container: {
    backgroundColor: pallete.background,
    width: '100%',
    'min-height': '100%',
    margin: '0 auto',
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'space-between',
  },
})

