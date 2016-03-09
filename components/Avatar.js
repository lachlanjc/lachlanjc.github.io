import React from 'react'
import gravatarUrl from 'gravatar-url'

class Avatar extends React.Component {
  render () {
    const size = this.props.size || 48
    const style = {
      borderRadius: '50%',
      float: this.props.float || 'none',
    }
    const url = gravatarUrl('lachlan.campbell@icloud.com', {size: (size * 2)})
    return (
      <img src={url} width={size} height={size} style={style} />
    )
  }
}

export default Avatar
