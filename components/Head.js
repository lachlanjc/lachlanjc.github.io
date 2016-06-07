import React from 'react'

const Head = ({ title }) => (
  <head>
    <meta charSet='utf-8' />
    <title>{title}</title>
    <link href='https://npmcdn.com/basscss-basic@1.0.0/index.css' rel='stylesheet' />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <link rel='icon' type='image/png' href='/static/favicon-32x32.png' sizes='32x32' />
    <link rel='icon' type='image/png' href='/static/favicon-16x16.png' sizes='16x16' />
    <link rel='shortcut icon' href='/static/favicon.ico' />
  </head>
)

export default Head
