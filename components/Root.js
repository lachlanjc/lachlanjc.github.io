import React from 'react'
import Head from './Head'
import Link from './Link'
import Main from './Main'
import Footer from './Footer'

const style = {
  backgroundColor: '#414e58',
  color: 'white',
  padding: '1rem'
}

const Root = ({ title }) => (
  <html>
    <Head title='Lachlan Campbell' />
    <body style={style}>
      <Main />
      <Footer />
    </body>
  </html>
)

export default Root
