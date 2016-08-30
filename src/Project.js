import React, { PropTypes } from 'react'

import {
  Base,
  Heading,
  Text
} from 'rebass'
import { Flex } from 'reflexbox'
import _ from 'lodash'

import { colors } from './style'

const Project = ({ name, description, link, color, ...props }) => (
  <Base
    is={_.isEmpty(link) ? 'div' : 'a'}
    href={link}
    target='_blank'
    id={_.kebabCase(name)}
    py={2} pr={2}
    style={{
      textDecoration: 'none',
      display: 'inline-flex',
      flexDirection: 'column',
      justifyContent: 'center',
      flex: '0 0 auto',
      width: '50%',
    //  borderBottom: `1px solid ${colors.border}`
    }}
    >
    <Heading
      level={2}
      my={0}
      style={{
        color: color,
      }}
      children={name}
    />
    <Text
      m={0}
      style={{
        color: colors.grey,
        lineHeight: '1.5'
      }}
      children={description}
    />
  </Base>
)

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
  color: PropTypes.string.isRequired
}

export default Project
