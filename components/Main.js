import React from 'react'
import Avatar from './Avatar'
import Link from './Link'

const style = {
  lineHeight: 2,
  maxWidth: '36rem',
  marginLeft: 'auto',
  marginRight: 'auto',
  color: '#414e58',
  padding: '1rem'
}

const Main = () => (
  <main style={style}>
    <p>
      Hey — I'm Lachlan Campbell, a student, web developer, and designer from central Pennsylvania.
      👋
    </p>
    <p>
      Currently I'm working on 🍽 <Link href='https://getnoodl.es/'>Noodles</Link>, a web app for discovering recipes and cooking,
      🌒 <strong style={{fontWeight: 500}}>Lunapen</strong>, an iPhone app for remembering the moments of genius that strike in the wee hours of the night,
      and 📝 <strong style={{fontWeight: 500}}>Chalkboard</strong>,
      a new app for students. I'm also on the documentation team for <Link href='http://tachyons.io/'>Tachyons</Link>.
      💬
    </p>
    <ul style={{paddingLeft: '1.25rem'}}>
      <li>🌤 2016 — <Link href='https://twitter.com/lachlanjc/status/729983363134705664'>looking for an intership</Link> 😉</li>
      <li>🌤 2015 — remote engineering intern at 🏢 <Link href='https://highrisehq.com/'>Highrise</Link></li>
      <li>🏆 2015 — won the <Link href='http://www.congressionalappchallenge.us/2015-winners/'>Congressional App Challenge</Link> for the PA-05 district <Link href='http://youtu.be/acttx0idnUE'>with Noodles</Link></li>
      <li>📬 <Link href='https://github.com/noahbuscher/N1-Taiga'>Taiga</Link> — open source contributor</li>
      <li>🔨 <Link href='https://github.com/assemblymade/meta'>Assembly</Link> — active community member and developer on the open source platform</li>
      <li>🚩 <Link href='https://github.com/asm-helpful/helpful-web'>Helpful</Link> — open source contributor</li>
    </ul>
    <p>
      Check out my profiles on <Link href='https://github.com/lachlanjc'>GitHub</Link>, <Link href='https://twitter.com/lachlanjc'>Twitter</Link>,
      and <Link href='https://instagram.com/lachlanjc'>Instagram</Link>, or <Link href='mailto:lachlan.campbell@icloud.com'>drop me an email</Link>.
      🌎
    </p>
  </main>
)

export default Main
