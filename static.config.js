import React from 'react'
import path from 'path'

export default {
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
  Document: ({ Html, Head, Body, children, state: { meta } }) => (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        {children}
        <style>{ meta && meta.sheets && meta.sheets.toString() }</style>
      </Body>
    </Html>
  ),
  extractCssChunks: true,
}
