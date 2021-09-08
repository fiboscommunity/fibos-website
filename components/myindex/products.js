import React from 'react'
import { indexProducts } from '../../pageConfig'
class Products extends React.Component {
  state = {
    language: this.props.language,
    delayShowClassName1: "",
    delayShowClassName2: "",
    delayShowClassName3: "",
    delayShowClassName4: ""
  }
  componentDidMount () {
    this.delayShowHandle()
    window.addEventListener('scroll', this.delayShowHandle)
  }
  componentWillUnmount () {
    window.removeEventListener('scroll', this.delayShowHandle)
  }
  delayShowHandle = () => {
    const windowBottomDistance = window.scrollY + document.documentElement.clientHeight //窗口底部距离顶端的距离
    for (let i = 1; true; i++) {
      if (this.state['delayShowClassName' + i] === undefined) return
      if (windowBottomDistance >= this.refs['defiProTitle' + i].offsetTop) {
        this.setState({
          ['delayShowClassName' + i]: "delayShowAfter"
        })
      }
    }
  }
  render () {
    //ref youwent ?????????
    const { language } = this.state
    const { imgSrc } = this.props
    return (
      <div className="index_products_bg">
        <div className="index_products myContainer">
          <div className="dbFrameTitle h2">{language.index_products_title}</div>
          <div className="index_products_items" ref="lazy1">
            {
              indexProducts.map((item, index) => {
                if (index % 2 === 0) {
                  return (
                    <div className="myrow products_item" key={index}>
                      <div className={"col" + " " + (index % 2 === 0 ? item.colClass1 : item.colClass2)}>
                        <div className="ititle h3">{language[item.ititle]}</div>
                        <div className="mycard">
                          <div className={"imgbox " + (item.spimgbox ? "spimgbox" : "")}>
                            <img src={item[imgSrc]} className={item.spimgbox ? "spimg" : ""} alt="product"></img>
                          </div>
                          <a href={item.href} target="_blank" className="imore" aria-label={language.index_products_learmore}>{language.index_products_learmore}</a>
                        </div>
                      </div>
                      <div className={"col" + " " + (index % 2 === 0 ? item.colClass2 : item.colClass1)} >
                        <div className="pro">
                          <div className="ttitle h3 bottomStub">{language[item.ttitle]}</div>
                          {
                            item.proText.map((proItem, index) => (
                              <div key={index}>{language[proItem]}</div>
                            ))
                          }
                        </div>
                        <div className="features">
                          {/* 注意一下这里的index和indexSec分别指的是哪层循环的索引号 */}
                          <div className="h4" ref={`defiProTitle${index + 1}`}>{language[item.featuresTitle]}</div>
                          {
                            item.features.map((featuresItem, indexSec) => (
                              <div className={`feature delayShow ${this.state['delayShowClassName' + (index + 1)]}${this.state['delayShowClassName' + (index + 1)] ? indexSec + 1 : ""}`} key={indexSec}>
                                <div className="h5">
                                  <img src={featuresItem[imgSrc]} alt="icon"></img>
                                  {language[featuresItem.title]}
                                </div>
                                {
                                  featuresItem.pContent.map((pContentItem, index) => (
                                    <div key={index}>{language[pContentItem]}</div>
                                  ))
                                }
                              </div>
                            ))
                          }
                        </div>
                        <a href={item.href} target="_blank" className="tmore" aria-label={language.index_products_learmore}>{language.index_products_learmore}</a>
                      </div>
                    </div>
                  )
                } else {
                  return (
                    <div className="myrow products_item" key={index}>

                      <div className={"col" + " " + (index % 2 === 1 ? item.colClass2 : item.colClass1)} >
                        <div className="pro">
                          <div className="ttitle h3 bottomStub">{language[item.ttitle]}</div>
                          {
                            item.proText.map((proItem, index) => (
                              <div key={index}>{language[proItem]}</div>
                            ))
                          }
                        </div>
                        <div className="features">
                          <div className="h4" ref={`defiProTitle${index + 1}`}>{language[item.featuresTitle]}</div>
                          {
                            item.features.map((featuresItem, indexSec) => (
                              <div className={`feature delayShow ${this.state['delayShowClassName' + (index + 1)]}${this.state['delayShowClassName' + (index + 1)] ? indexSec + 1 : ""}`} key={indexSec}>
                                <div className="h5">
                                  <img src={featuresItem[imgSrc]} alt="icon"></img>
                                  {language[featuresItem.title]}
                                </div>
                                {
                                  featuresItem.pContent.map((pContentItem, index) => (
                                    <div key={index}>{language[pContentItem]}</div>
                                  ))
                                }
                              </div>
                            ))
                          }
                        </div>
                        <a href={item.href} target="_blank" className="tmore" aria-label={language.index_products_learmore}>{language.index_products_learmore}</a>
                      </div>
                      <div className={"col" + " " + (index % 2 === 1 ? item.colClass1 : item.colClass2)}>
                        <div className="ititle h3">{language[item.ititle]}</div>
                        <div className="mycard">
                          <div className={"imgbox " + (item.spimgbox ? "spimgbox" : "")}>
                            <img src={item[imgSrc]} className={item.spimgbox ? "spimg" : ""} alt="img"></img>
                          </div>
                          <a href={item.href} target="_blank" className="imore" aria-label={language.index_products_learmore}>{language.index_products_learmore}</a>
                        </div>
                      </div>
                    </div>
                  )
                }
              })
            }
          </div>
        </div>
      </div>
    )
  }
}
export default Products