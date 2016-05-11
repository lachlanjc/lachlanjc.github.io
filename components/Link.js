import React from 'react'

const style = {
  color: '#338EDA',
  fontWeight: 500,
  textDecoration: 'none',
  display: 'inline'
}

const Link = props => (
  <a style={style} href={props.href}>
    {props.text || props.children}
  </a>
)

export default Link
