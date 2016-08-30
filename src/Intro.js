
import React from 'react'
import Avatar from './Avatar'
import Link from './Link'

import { Base, Heading, Space } from 'rebass'
import { Flex, Box } from 'reflexbox'

const Intro = () => {
  const sx = {
    name: {
      fontWeight: 500
    },
    username: {
      fontWeight: 300
    },
    intro: {
      fontWeight: 400,
      fontStyle: 'italic',
      fontFamily: `'SFMono-RegularItalic', Menlo, monospace`
    }
  }
  return (
    <Flex align='center' pt={4} pb={2}>
      <Box className='shrink-none'>
        <Avatar />
      </Box>
      <Box pl={2}>
        <Base className='sm-flex items-center'>
          <Heading level={1} m={0} style={sx.name}>
            Lachlan Campbell
          </Heading>
          <span className='xs-hide'>
            <Space x={1} />—<Space x={1} />
          </span>
          <Heading level={2} m={0} style={sx.username}>
            @lachlanjc
          </Heading>
        </Base>
        <Heading level={3} mt={1} mb={0} style={sx.intro}>
          Web developer, designer, and high schooler.
        </Heading>
      </Box>
    </Flex>
  )
}

export default Intro
