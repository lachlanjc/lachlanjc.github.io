
import React from 'react'

import Avatar from './Avatar'
import Link from './Link'
import Project from './Project'
import ProjectsGroup from './ProjectsGroup'
import ProjectsHeading from './ProjectsHeading'

import { Section, Text } from 'rebass'

const Main = () => (
  <Section style={{ lineHeight: 2 }} py={2}>
    <ProjectsGroup
      name='Featured Work'
      work={[
      <Project
        name='Noodles'
        description='One place for all your recipes. Discover, cook, and share.'
        link='https://getnoodl.es'
        color='#ff6d00'
        key='noodles'
      />,
      <Project
        name='NRA Funded'
        description='See if the NRA is funding your Congress members.'
        link='https://nrafunded.us'
        color='#f52'
        key='nra'
      />
    ]} />
    <ProjectsGroup
      name='Open Source Contributions'
      work={[
      <Project
        name='Tachyons'
        description='Function css for humans. Contributing docs.'
        link='http://tachyons.io'
        color='#333'
        key='tachyons'
      />,
      <Project
        name='Random A11y Color Palettes'
        description='Vote on a11y-friendly color combinations.'
        link='https://randoma11y.com'
        color='#357edd'
        key='random'
      />
    ]} />
    <ProjectsGroup
      name='Working On'
      work={[
      <Project
        name='Chalkboard'
        description='Organize your school life intelligently.'
        color='#009688'
        key='chalkboard'
      />,
      <Project
        name='Lunapen'
        description='Record your ideas from the middle of the night.'
        color='#703daa'
        key='lunapen'
      />
    ]} />
    <ProjectsHeading name='Older projects' />
    <ul style={{ paddingLeft: '1.25rem' }}>
      <li>🌤 2015 — remote engineering intern at <Link href='https://highrisehq.com/'>Highrise</Link></li>
      <li>🏆 2015 — won the <Link href='http://www.congressionalappchallenge.us/2015-winners/'>Congressional App Challenge</Link> for the PA-05 district <Link href='http://youtu.be/acttx0idnUE'>with Noodles</Link></li>
      <li>📬 <Link href='https://github.com/noahbuscher/N1-Taiga'>Taiga</Link> — open source contributor</li>
      <li>🔨 <Link href='https://github.com/assemblymade/meta'>Assembly</Link> — active community member and developer on the open source platform</li>
      <li>🚩 <Link href='https://github.com/asm-helpful/helpful-web'>Helpful</Link> — open source contributor</li>
    </ul>
  </Section>
)

export default Main
