import * as React from 'react'
import NaviComponent from '../navi'
import { DefiFinance } from '../../pageConfig'

import './index.scss'

class DefiFinanceComponent extends React.Component {
  render() {
    const { language } = this.props
    return (
      <div className="defiFinance-container">
        <div className="content">
          <div className="title">{language.DefiFinance}</div>
          <div className="cards">
            {DefiFinance.map((item, index) => (
              <div key={index} className="card">
                <div className="card-container">
                  <div className="card-icon">
                    <img src={item.image} />
                  </div>
                  <div className="card-title">
                    {item[`title_${language.Lang.split('-')[0]}`]}
                  </div>
                  <div className="card-content">
                    {item[`content_${language.Lang.split('-')[0]}`]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default NaviComponent(DefiFinanceComponent)
