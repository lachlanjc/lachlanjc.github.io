import React, { PropTypes } from 'react'

import { Base } from 'rebass'
import { Flex } from 'reflexbox'

import ProjectsHeading from './ProjectsHeading'

const ProjectsGroup = ({ name, work, ...props }) => (
  <Base is='section' my={3} {...props}>
    <ProjectsHeading name={name} />
    <Flex wrap children={work} />
  </Base>
)

ProjectsGroup.propTypes = {
  name: PropTypes.string.isRequired,
  work: PropTypes.element.isRequired
}

export default ProjectsGroup
