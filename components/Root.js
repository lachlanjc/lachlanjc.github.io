import React from 'react'
import Head from './Head'
import Link from './Link'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const Root = ({ title }) => (
  <html style={{ height: '100%' }}>
    <Head title='Lachlan Campbell' />
    <body style={style}>
      <Header />
      <Main />
      <Footer />
    </body>
  </html>
)

export default Root
