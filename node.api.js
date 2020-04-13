import React from 'react'
import { JssProvider, SheetsRegistry, createGenerateId } from 'react-jss'

export default pluginOptions => ({
  beforeRenderToElement: (App, { meta }) => {
    const generateId = createGenerateId()
    meta.sheets = new SheetsRegistry()

    return () => (
      <JssProvider registry={ meta.sheets } generateId={ generateId }>
        <App/>
      </JssProvider>
    )
  },
})
