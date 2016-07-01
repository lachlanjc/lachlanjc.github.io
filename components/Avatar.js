
import React from 'react'

import gravatarUrl from 'gravatar-url'

const size = 72
const style = {
  borderRadius: '50%',
  width: size,
  height: size,
  float: 'left'
}
const url = gravatarUrl('lachlan.campbell@icloud.com', {
  size: size * 2
})

const Avatar = (props) => (
  <img src={url} style={style} {...props} />
)

export default Avatar
