import React, { PropTypes } from 'react'
import _ from 'lodash'
import { Heading } from 'rebass'
import { colors } from './style'

const ProjectsHeading = ({ name, ...props }) => (
  <Heading
    level={4}
    m={0} pb={1}
    style={{
      color: colors.grey,
      fontWeight: 300,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      borderBottom: `1px solid ${colors.border}`
    }}
    id={_.kebabCase(name)}
    children={name}
    {...props}
  />
)

ProjectsHeading.propTypes = {
  name: PropTypes.string.isRequired
}

export default ProjectsHeading
