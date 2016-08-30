
import React from 'react'

import { Base, Text } from 'rebass'

const sx = {
  backgroundColor: '#f4f7f9',
  borderTop: '1px solid #dae4eb',
  color: '#566b7b',
  fontFamily: '"SFMono-Regular", Menlo, monospace',
  textAlign: 'center'
}

const Footer = () => (
  <Base
    is='footer'
    px={1} py={3} mt={3}
    style={sx}
  >
    <Text>Lachlan Campbell, 2016</Text>
    <Text mt={1} small children=':wq' />
  </Base>
)

export default Footer
