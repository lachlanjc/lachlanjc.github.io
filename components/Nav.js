
import React from 'react'

import { Flex } from 'reflexbox'
import { NavItem } from 'rebass'

const Nav = () => (
  <nav style={{ backgroundColor: '#f4f4f4' }}>
    <Flex
      py={1}
      style={{ maxWidth: 768 }}
      className='mx-auto justify-center md-justify-end'
      >
      <NavItem href='https://twitter.com/lachlanjc' theme='primary'>
        Twitter
      </NavItem>
      <NavItem href='https://github.com/lachlanjc' ml={1} theme='primary'>
        GitHub
      </NavItem>
      <NavItem href='https://instagram.com/lachlanjc' ml={1} theme='primary'>
        Instagram
      </NavItem>
      <NavItem href='mailto:lachlan.campbell@icloud.com' ml={1} theme='primary'>
        Email
      </NavItem>
    </Flex>
  </nav>
)

export default Nav
