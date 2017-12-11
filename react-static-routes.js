
    import React, { Component } from 'react'
    import { Route } from 'react-router-dom'

    import src_pages_index from '../src/pages/index'
import src_pages_edu from '../src/pages/edu'
    const templateMap = {
    t_0: src_pages_index,
t_1: src_pages_edu
  }
    const templateTree = {c:{"/":{t:"t_0"},"edu":{t:"t_1"}}}
    
    const getTemplateForPath = path => {
      const parts = path === '/' ? ['/'] : path.split('/').filter(d => d)
      let cursor = templateTree
      try {
        parts.forEach(part => {
          cursor = cursor.c[part]
        })
        return templateMap[cursor.t]
      } catch (e) {
        return false
      }
    }
  

    export default class Routes extends Component {
      render () {
        return (
            
    <Route path='*' render={props => {
      let Template = getTemplateForPath(props.location.pathname)
      if (!Template) {
        Template = getTemplateForPath('404')
      }
      return Template && <Template {...props} />
    }} />
  
        )
      }
    }
  