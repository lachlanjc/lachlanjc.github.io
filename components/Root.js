
import React from 'react'

import Head from './Head'
import Intro from './Intro'
import Main from './Main'
import Nav from './Nav'
import Footing from './Footing'

import { Container } from 'rebass'

const Root = ({ title }) => (
  <html>
    <Head title='Lachlan Campbell' />
    <body>
      <Nav />
      <Container style={{ maxWidth: 768 }}>
        <Intro />
        <Main />
        <Footing />
      </Container>
    </body>
  </html>
)

export default Root
