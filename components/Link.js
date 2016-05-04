import React from 'react'
import _ from 'lodash'

const Link = (style) => (
  render () {
    const style = _.merge({
      color: '#338EDA',
      fontWeight: 500,
      textDecoration: 'none',
    }, style)
    return (
      <a style={style} href={this.props.href}>
        {this.props.text || this.props.children}
      </a>
    )
  }
}

export default Link
