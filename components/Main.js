import React from 'react'
import Avatar from './Avatar'
import Link from './Link'

const style = {
  lineHeight: 2,
  maxWidth: '36rem',
  marginLeft: 'auto',
  marginRight: 'auto'
}

const Main = () => (
  <main style={style}>
    <h1>
      <Link href='https://twitter.com/lachlanjc' unDecorate={true}>
        @lachlanjc
        <Avatar float='right' />
      </Link>
    </h1>
    <p>
      Hey — I'm Lachlan Campbell, a student, web developer, and designer from Pennsylvania. ⌨️
    </p>
    <p>
      Currently I'm working on <Link href='https://getnoodl.es/'>Noodles</Link>, an app for discovering recipes and cooking, and <strong style={{fontWeight: 600}}>Chalkboard</strong>, a new app for students.
    </p>
    <p>
      In summer 2015 I was an engineering intern at <Link href='https://highrise.com/'>Highrise</Link>, and in the past I've contributed to open source projects such as <Link href='https://github.com/noahbuscher/N1-Taiga'>Taiga</Link>, <Link href='https://github.com/assemblymade/meta'>Assembly</Link>, and <Link href='https://github.com/asm-helpful/helpful-web'>Helpful</Link>. This year, I also won the <Link href='http://www.congressionalappchallenge.us/2015-winners/'>Congressional App Challenge</Link> for the PA-05 district <Link href='http://youtu.be/acttx0idnUE'>with Noodles</Link>.
    </p>
    <p>
      Check out my profiles on <Link href='https://github.com/lachlanjc'>GitHub</Link>, <Link href='https://twitter.com/lachlanjc'>Twitter</Link>, and <Link href='https://instagram.com/lachlanjc'>Instagram</Link>. 🌎
    </p>
    <p>👋</p>
  </main>
)

export default Main
