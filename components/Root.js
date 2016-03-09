import React from 'react'
import Head from './Head'
import Link from './Link'
import Main from './Main'
import Footer from './Footer'

class Root extends React.Component {
  render () {
    const style = {
      backgroundColor: '#414e58',
      color: 'white',
      padding: '1rem'
    }
    return (
      <html>
        <Head title='Lachlan Campbell' />
        <body style={style}>
          <Main />
          <Footer />
        </body>
      </html>
    )
  }
}

export default Root
