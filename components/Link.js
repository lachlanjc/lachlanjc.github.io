
import React from 'react'

import { Base } from 'rebass'

const sx = {
  fontWeight: 500,
  textDecoration: 'none',
  display: 'inline'
}

const Link = ({ ...props }) => {
  return (
    <Base is='a' theme='primary' style={sx} {...props} />
  )
}

export default Link
