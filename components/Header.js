import React from 'react'
import Link from './Link'
import Avatar from './Avatar'

const style = {
  padding: '1rem',
  textAlign: 'center'
}
const bigStyle = {
  color: '#414e58',
  fontWeight: '300',
  marginTop: '1rem',
  marginBottom: '.5rem'
}
const subStyle = {
  color: '#758a99',
  textTransform: 'uppercase',
  letterSpacing: '.2em',
  fontSize: '1rem',
  fontWeight: '200',
  margin: 0
}

const Header = () => (
  <header style={style}>
    <Link href='https://twitter.com/lachlanjc'
          unDecorate={true} style={{ display: 'block' }}>
      <Avatar />
      <h1 style={bigStyle}>@lachlanjc</h1>
      <h2 style={subStyle}>Lachlan Campbell</h2>
    </Link>
  </header>
)

export default Header
