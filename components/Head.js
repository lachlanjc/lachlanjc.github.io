
import React from 'react'

const css = `
@media (max-width: 40em) {
  .xs-hide { display: none !important }
}

.mx-auto        { margin-left: auto; margin-right: auto }
.shrink-none    { flex-shrink: 0 }
.justify-center { justify-content: center }
.items-center   { align-items: center }

@media (min-width: 40em) {
  .sm-flex { display: flex }
}

@media (min-width: 52em) {
  .md-justify-end { justify-content: flex-end }
}
`

const Head = ({ title }) => (
  <head>
    <meta charSet='utf-8' />
    <title>{title}</title>
    <link href='https://npmcdn.com/basscss-basic@1.0.0/index.css' rel='stylesheet' />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <link rel='icon' type='image/png' href='/static/favicon-96x96.png' sizes='96x96' />
    <link rel='icon' type='image/png' href='/static/favicon-32x32.png' sizes='32x32' />
    <link rel='icon' type='image/png' href='/static/favicon-16x16.png' sizes='16x16' />
    <link rel='shortcut icon' href='/static/favicon.ico' />
    <style children={css} />
  </head>
)

export default Head
