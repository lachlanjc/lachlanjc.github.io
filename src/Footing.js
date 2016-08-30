
import React from 'react'

import { Base, Text } from 'rebass'
import { colors } from './style'

const sx = {
  backgroundColor: colors.meta,
  borderTop: `1px solid ${colors.border}`
  color: colors.grey,
  fontFamily: 'SFMono-Regular, Menlo, monospace',
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
