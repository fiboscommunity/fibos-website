import * as React from 'react'

import './index.scss'

class MyNavigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      location: '',
    }
  }

  componentDidMount() {
    this.setState({
      location,
    })
    window.addEventListener('hashchange', () => {
      this.setState({ location })
    })
  }

  render() {
    const { anchors, language } = this.props
    const { location } = this.state
    return (
      <div className="local-navigation">
        <div className="nav">
          {anchors.map((item, index) => (
            <a
              key={index}
              className={`${
                location && location.hash === item.hash
                  ? 'nav-item active'
                  : 'nav-item'
              }
              `}
              href={item.hash}
            >
              <div
                className={`nav-title ${
                  location && location.hash === '#trendingmap'
                    ? 'white-nav-item'
                    : ''
                }`}
              >
                {item[`title_${language.Lang.split('-')[0]}`]}
              </div>
            </a>
          ))}
        </div>
      </div>
    )
  }
}
export default MyNavigation
