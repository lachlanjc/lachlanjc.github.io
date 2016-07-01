
import React from 'react'

import Avatar from './Avatar'
import Link from './Link'

import { Section, Text } from 'rebass'

const Main = () => (
  <Section style={{ lineHeight: 2 }} py={2}>
    <Text>
      I'm currently working on <Link href='https://getnoodl.es/'>Noodles</Link>,
      a web app for cooking and discovering recipes, <strong style={{ fontWeight: 500 }}>Lunapen</strong>,
      an iPhone app for remembering the moments of genius that strike in the wee hours of the night,
      and <strong style={{ fontWeight: 500 }}>Chalkboard</strong>,
      a new organization app for students.
      I'm also <Link href='https://twitter.com/mrmrs_/status/713434087109890049'>on the documentation team</Link> for <Link href='http://tachyons.io/'>Tachyons</Link>.
    </Text>
    <ul style={{ paddingLeft: '1.25rem' }}>
      <li>🌤 2016 — <Link href='https://twitter.com/lachlanjc/status/729983363134705664'>looking for an intership!</Link></li>
      <li>🌤 2015 — remote engineering intern at <Link href='https://highrise.com/'>Highrise</Link></li>
      <li>🏆 2015 — won the <Link href='http://www.congressionalappchallenge.us/2015-winners/'>Congressional App Challenge</Link> for the PA-05 district <Link href='http://youtu.be/acttx0idnUE'>with Noodles</Link></li>
      <li>📬 <Link href='https://github.com/noahbuscher/N1-Taiga'>Taiga</Link> — open source contributor</li>
      <li>🔨 <Link href='https://github.com/assemblymade/meta'>Assembly</Link> — active community member and developer on the open source platform</li>
      <li>🚩 <Link href='https://github.com/asm-helpful/helpful-web'>Helpful</Link> — open source contributor</li>
    </ul>
  </Section>
)

export default Main
