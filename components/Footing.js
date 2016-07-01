
import React from 'react'

import { Footer, Text } from 'rebass'

const sx = {
  flexDirection: 'column',
  fontFamily: `'SFMono-Regular', Menlo, monospace`,
  textAlign: 'center'
}

const Footing = () => (
  <Footer style={sx}>
    <Text>Lachlan Campbell, 2016</Text>
    <Text mt={1} small>:wq</Text>
  </Footer>
)

export default Footing
