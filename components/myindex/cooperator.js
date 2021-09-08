import React from 'react'
import { indexCooperatorFo, indexCooperatorFriend } from '../../pageConfig'

class Cooperator extends React.Component {
  render () {
    const { language, imgSrc } = this.props
    return (
      <div className="cooperator_body" >
        {/* <Lazy/> */}
        <div className="myContainer">
          <div>
            <div className="h2 dbFrameTitle">{language.index_cooperator_1}</div>
            <div className="myrow" ref="row1">
              {
                indexCooperatorFo.map((item, index) => (
                  <div className="item" key={index}>
                    <a target="_blank" href={item.href}>
                      <img src={item[imgSrc]} alt="合作者logo" />
                    </a>
                  </div>
                ))
              }
            </div>
          </div>
          <div>
            <div className="h2 bottom dbFrameTitle">{language.index_cooperator_2}</div>
            <div className="myrow" ref="row2">
              {
                indexCooperatorFriend.map((item, index) => (
                  <div className="item" key={index}>
                    {
                      item.href ?(<a target="_blank" href={item.href} aria-label="to cooperator page">
                      <img src={item[imgSrc]} alt="合作者logo" />
                    </a>) : (<div className="noHref">
                      <img src={item[imgSrc]} alt="合作者logo" />
                    </div>)
                    }
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Cooperator