import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'

import palette from '../styles/palette'

import Header from '../components/Header'
import Footer from '../components/Footer'

const useStyles = createUseStyles({
  container: {
    backgroundColor: palette.background,
    width: '100%',
    'min-height': '100%',
    margin: '0 auto',
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'space-between',
  },
})

const Container = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>

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
