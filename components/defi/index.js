import * as React from 'react'
import NaviComponent from '../navi'
import { Defi } from '../../pageConfig'

import './index.scss'

class DefiComponent extends React.Component {
  render() {
    const { language } = this.props
    return (
      <div className="defi-container">
        <div className="content">
          <div className="title">{language.FIBOS_DeFi}</div>
          <div className="cards">
            {Defi.map((item, index) => (
              <div className="card" key={index}>
                <div className="card-container">
                  <a href={item.link} target="_blank">
                    <div className="rightArrow">
                      <img src="../../imgs/rightArrow.png" />
                    </div>
                  </a>
                  <div className="card-icon">
                    <img src={item.image} />
                  </div>
                  <div
                    className="card-content"
                    style={{
                      background: `url(${item.image})`,
                      backgroundSize: 'cover',
                    }}
                  >
                    <div className="contentText">
                      {item[`content_${language.Lang.split('-')[0]}`].map(
                        (text, index) => (
                          <div key={index}>
                            <div className="listPoint">●</div>
                            <div className="text">{text}</div>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                  <a href={item.link} target="_blank" className="title-link">
                    <div className="card-title">
                      {item[`title_${language.Lang.split('-')[0]}`]}
                    </div>
                  </a>
                  <div className="more">
                    <a href={item.link} target="_blank">
                      <div className="learnMore">{language.learnMore}</div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cards-mobile">
            {Defi.map((item, index) => (
              <a href={item.link} target="_blank" key={index}>
                <div className="card" key={index}>
                  <div className="card-container">
                    <div className="rightArrow">
                      <img src="../../imgs/rightArrow.png" />
                    </div>
                    <div className="card-icon">
                      <img src={item.image} />
                    </div>
                    <div
                      className="card-content"
                      style={{
                        background: `url(${item.image})`,
                        backgroundSize: 'cover',
                      }}
                    >
                      <div className="contentText">
                        {item[`content_${language.Lang.split('-')[0]}`].map(
                          (text, index) => (
                            <div key={index}>
                              <div className="listPoint">●</div>
                              <div className="text">{text}</div>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                    <object>
                      <a href={item.link} target="_blank" className="title-link">
                        <div className="card-title">
                          {item[`title_${language.Lang.split('-')[0]}`]}
                        </div>
                      </a>
                    </object>
                    <div className="more">
                      <object>
                        <a href={item.link} target="_blank">
                          <div className="learnMore">{language.learnMore}</div>
                        </a>
                      </object>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default NaviComponent(DefiComponent)
