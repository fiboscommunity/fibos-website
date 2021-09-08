import * as React from 'react'
import NaviComponent from '../navi'
import { exchanges, foCoop, associatedHash } from '../../pageConfig'
import Footer from '../Footer'
import RcQueueAnim from 'rc-queue-anim'

import './index.scss'

class AssociatedComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeItem: 'foExchange',
      associatedArr: [],
      show: true
    }
  }

  componentDidMount() {
    this.changeList(exchanges)
  }

  changeList = lists => {
    let tmp_lists = lists
    const newArr = tmp_lists.concat(new Array(15 - tmp_lists.length).fill(''))
    this.setState({
      associatedArr: newArr,
    })
  }

  render() {
    const { activeItem, associatedArr } = this.state
    const { language, location } = this.props
    return (
      <div className="associated-container">
        <div className="content">
          <div className="tabs">
            <div
              className={`tabsItem ${
                activeItem === 'foExchange' ? 'tabsItem-current' : ''
                }`}
            >
              <a
                className="navLink"
                onClick={() => {
                  if (activeItem !== 'foExchange') {
                    this.setState(
                      {
                        activeItem: 'foExchange',
                        show: !this.state.show
                      },
                      () => {
                        this.changeList(exchanges)
                      },
                    )
                  }
                }}
              >
                {language.FO_exchange}
              </a>
            </div>
            <div
              className={`tabsItem ${
                activeItem === 'foCoop' ? 'tabsItem-current' : ''
                }`}
            >
              <a
                className="navLink"
                onClick={() => {
                  if (activeItem !== 'foCoop') {
                    this.setState(
                      {
                        activeItem: 'foCoop',
                      },
                      () => {
                        this.changeList(foCoop)
                      },
                    )
                  }
                }}
              >
                {language.FO_coop}
              </a>
            </div>
          </div>
          <div className="cards">
            {associatedArr.map((item, index) =>
              item ? (
                <a href={item.link} target="_blank" key={index}>
                  <div key={index} className={`card`}>
                    <img src={item.img} />
                  </div>
                </a>
              ) : (
                  <div key={index} className={`card`}></div>
                ),
            )}
          </div>
        </div>
        <div className="footer">
          <div className="footer-share">
            <div>
              <a
                className="share-item github"
                href="https://github.com/FIBOSIO"
                target="_blank"
              >
                <img src="../../imgs/footer_github.png" />
              </a>
            </div>
            <div>
              <a
                className="share-item microblog"
                href="https://weibo.com/fibosio"
                target="_blank"
              >
                <img src="../../imgs/footer_weibo.png" />
              </a>
            </div>
            <div>
              <a
                className="share-item telegram"
                href="https://t.me/FIBOSIO"
                target="_blank"
              >
                <img src="../../imgs/footer_telegram.png" />
              </a>
            </div>
            <div>
              <a
                className="share-item twitter"
                href="https://twitter.com/fibos_io"
                target="_blank"
              >
                <img src="../../imgs/footer_twitter.png" />
              </a>
            </div>
          </div>
          <Footer language={language} />
          <div className="copyright">
            <div>{`Copyright © 2021 FIBOS FOUNDATION LTD All Rights Reserved`}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default NaviComponent(AssociatedComponent)
