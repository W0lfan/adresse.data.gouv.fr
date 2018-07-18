import React from 'react'
import PropTypes from 'prop-types'

import Tag from '../../tag'

import Info from './info'
import InfoReport from './info-report'

class Meta extends React.Component {
  static propTypes = {
    infos: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
      })
    ).isRequired,
    report: PropTypes.object,
    sources: PropTypes.array
  }

  static defaultProps = {
    report: null,
    sources: null
  }

  render() {
    const {infos, report, sources} = this.props

    return (
      <div className='content'>
        {infos.map(info => (
          <div key={info.title}>
            <Info title={info.title}>
              <span>{info.value}</span>
            </Info>
          </div>
        ))}

        {report &&
          <InfoReport {...report} />
        }

        {sources &&
          <div className='sources'>
            <b>Source :</b>
            <span>{sources.map(source => <Tag key={source} type={source} />)}</span>
          </div>
        }

        <style jsx>{`
          .content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(170px, 100%));
            grid-gap: 5px;
          }

          .sources {
            display: flex;
            align-items: center;
          }

          .sources span {
            display: flex;
          }
        `}</style>
      </div>
    )
  }
}

export default Meta