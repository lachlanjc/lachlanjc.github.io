import React from 'react'

class Link extends React.Component {
  render () {
    const style = {
      color: 'white',
      fontWeight: 600,
      textDecoration: this.props.unDecorate ? 'none' : 'underline'
    }
    return (
      <a style={style} href={this.props.href}>
        {this.props.text || this.props.children}
      </a>
    )
  }
}

export default Link
