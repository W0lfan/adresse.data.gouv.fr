import React from 'react'
import PropTypes from 'prop-types'

import {ArrowDown} from 'react-feather'

import Header from './header'

const order = (icon, a, b) => (
  <div style={{display: 'inline-flex'}}>
    {icon}
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      fontSize: '14px',
      lineHeight: '14px',
      marginLeft: '3px',
      marginTop: '-2px'
    }}
    >
      <div>{a}</div>
      <div>{b}</div>
    </div>
  </div>
)

const alphabetical = {
  asc: order(<ArrowDown />, 'A', 'Z'),
  desc: order(<ArrowDown />, 'Z', 'A')
}

const numeric = {
  asc: order(<ArrowDown />, '1', '9'),
  desc: order(<ArrowDown />, '9', '1')
}

const types = {alphabetical, numeric}

const Head = ({headers, order, sort, actived}) => (
  <tbody>
    <tr>
      {headers.map(({title, type, func}) => {
        return func ?
          <Header
            key={title}
            title={title}
            icon={types[type][order]}
            sort={() => sort(func, title)}
            isActived={title === actived} /> :
          <Header
            key={title}
            title={title} />
      })}
    </tr>
  </tbody>
)

Head.propTypes = {
  headers: PropTypes.array.isRequired,
  sort: PropTypes.func.isRequired,
  actived: PropTypes.string,
  order: PropTypes.oneOf(['asc', 'desc'])
}

Head.defaultProps = {
  actived: null,
  order: 'asc'
}

export default Head
