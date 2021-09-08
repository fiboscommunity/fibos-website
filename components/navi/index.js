import * as React from 'react'
import './index.scss'
import MyNavigation from '../navigation'
import { anchors } from '../../pageConfig'

export default function NaviComponent (Component) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        naviDisplay: false,
        naviAnimate: false,
      }
    }

    componentDidMount () {
      const { toggleShare } = this.props

      if (location && location.hash === '#banner') {
        toggleShare(false)
      }

      window.addEventListener('hashchange', () => {
        this.naviClose()
        if (location.hash === '#banner') {
          toggleShare(false)
        } else {
          toggleShare(true)
        }
      })
    }

    naviOpen = () => {
      const { toggleShare } = this.props
      this.setState(
        {
          naviDisplay: true,
          naviAnimate: true,
        },
        () => {
          toggleShare(false)
        },
      )
    }
    naviClose = () => {
      const { naviDisplay } = this.state
      const { toggleShare } = this.props
      naviDisplay &&
        this.setState(
          {
            naviAnimate: false,
          },
          () => {
            setTimeout(() => {
              this.setState(
                {
                  naviDisplay: false,
                },
                () => {
                  toggleShare(true)
                },
              )
            }, 400)
          },
        )
    }

    render () {
      const { naviDisplay, naviAnimate, location } = this.state
      const { language } = this.props
      return (
        <div
          id="perspective"
          className={`perspective effect-rotateleft  ${
            naviDisplay ? 'modalview' : ''
            } ${naviAnimate ? 'animate' : ''}`}
        >
          <div
            className="navi-container"
            onClick={() => {
              this.naviClose()
            }}
          >
            <div
              className="naviIcon"
              onClick={() => {
                this.naviOpen()
              }}
            >
              <img src="../../imgs/navigation.png" />
            </div>
            <MyNavigation language={language} anchors={anchors} />
            <Component language={language} location={location} />
          </div>
          <nav className="outer-nav right vertical">
            <a
              href="http://exchange.fo/"
              target="_blank"
              onClick={() => {
                this.naviClose()
              }}
            >
              {language.DEX}
            </a>
            <a
              href="http://cross.fo/"
              target="_blank"
              onClick={() => {
                this.naviClose()
              }}
            >
              {language.IBC}
            </a>
            <a
              href="https://wallet.fo/zh-cn"
              target="_blank"
              onClick={() => {
                this.naviClose()
              }}
            >
              {language.Wallet}
            </a>
            <a
              href="http://fibjs.org/"
              target="_blank"
              onClick={() => {
                this.naviClose()
              }}
            >
              {language.FIBJS}
            </a>
            <a
              href="http://bp.fo/#/"
              target="_blank"
              onClick={() => {
                this.naviClose()
              }}
            >
              {language.FIBJS_node}
            </a>
            <a
              href="http://dev.fo"
              target="_blank"
              onClick={() => {
                this.naviClose()
              }}
            >
              {language.Developer}
            </a>
            <a
              href="https://fibos.io/zh-cn/news"
              target="_blank"
              onClick={() => {
                this.naviClose()
              }}
            >
              {language.News}
            </a>
            <a
              href="http://forum.fo/"
              target="_blank"
              onClick={() => {
                this.naviClose()
              }}
            >
              {language.Community}
            </a>
          </nav>
        </div>
      )
    }
  }
}
