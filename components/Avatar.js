import React from 'react'
import gravatarUrl from 'gravatar-url'

const style = {
  borderRadius: '50%',
  boxShadow: '0 3px 12px #e7fbe1',
  margin: '1rem auto',
  display: 'block',
  width: '24vw',
  maxWidth: '320px'
}
const url = gravatarUrl('lachlan.campbell@icloud.com', { size: 640 })

const Avatar = () => (
  <img src={url} style={style} />
)

export default Avatar
