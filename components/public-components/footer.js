import React from 'react'
import './footer.scss'
import { mobile_footer } from '../../pageConfig'
class Footer extends React.Component {
  state = {
    wechatIsShow: "hidden",
    shoucangIsShow: "hidden"
  }
  componentDidMount () {
    window.addEventListener('scroll', () => {
      this.setState({
        wechatIsShow: "hidden",
        shoucangIsShow: "hidden",
      })
    })
  }
  componentWillUnmount () {
    window.removeEventListener('scroll', () => { })
  }
  changeWechatShow = () => {
    this.setState({
      wechatIsShow: this.state.wechatIsShow === "hidden" ? "show" : "hidden",
    })
  }
  changeShoucangShow = () => {
    this.setState({
      shoucangIsShow: this.state.shoucangIsShow === "hidden" ? "show" : "hidden",
    })
  }
  render () {
    const { language } = this.props
    const { wechatIsShow, shoucangIsShow } = this.state
    return (
      <div className="foustd_footer">
        <div className="myContainer">
          <div className="items pc_footer">
            <div className="left_items">
              <div className="foustd_footer_item">
                <div className="h5">{language.fooust_footer_title1}</div>
                <div className="foustd_footer_item_left">
                  <div><a target="_blank" href="http://dex.fo/" aria-label={language.fooust_footer_title1_item1}>{language.fooust_footer_title1_item1}</a></div>
                  <div><a target="_blank" href="http://cross.fo/" aria-label={language.fooust_footer_title1_item2}>{language.fooust_footer_title1_item2}</a></div>
                  <div><a target="_blank" href="https://wallet.fo/zh-cn" aria-label={language.fooust_footer_title1_item1}>{language.fooust_footer_title1_item3}</a></div>
                </div>
                <div className="foustd_footer_item_right">
                  <div><a target="_blank" href="https://dapp.fo/" aria-label={language.fooust_footer_title1_item4}>{language.fooust_footer_title1_item4}</a></div>
                  <div><a target="_blank" href="http://fibjs.org/" aria-label={language.fooust_footer_title1_item5}>{language.fooust_footer_title1_item5}</a></div>
                </div>
              </div>
              {/* <div className="foustd_footer_item">
                <a className="h5">{language.fooust_footer_title2}</a>
              </div> */}
              <div className="foustd_footer_item">
                <h5 >{language.fooust_footer_title2}</h5>
                <a href="/faq" target="_blank" aria-label={language.fooust_footer_title3}>{language.fooust_footer_title3}</a>
              </div>
            </div>
            <div className="foustd_footer_item qr">
              <div >
                <h5>{language.fooust_footer_title4}</h5>
                <img src="/imgs/qr-no-line.png" alt="qrCode"></img>
              </div>
            </div>
          </div>
          <div className="mobile_footer">
            {
              mobile_footer.map((item, index) => {
                if (item.type === "qr") {
                  let qrShow = ''
                  let changeShow
                  if (item.className === "wechat") {
                    changeShow = this.changeWechatShow
                    qrShow = wechatIsShow
                  }
                  else if (item.className === "shoucang") {
                    changeShow = this.changeShoucangShow
                    qrShow = shoucangIsShow
                  }
                  return (
                    <a onClick={changeShow} aria-label={item.className + " qr code"} className={item.className} key={index}>
                      <div className={"footer_show" + " " + qrShow}>
                        <img src={item.qrImg} alt="qr code" />
                      </div>
                    </a>
                  )
                }
                else if (item.type === "link") {
                  return (
                    <a href={item.href} target="_blank" aria-label={"to " + item.className} className={item.className} key={index}></a>
                  )
                }
              })
            }
          </div>
        </div>
        <div className="bottom">
          <div className="myContainer">
            Copyright © 2021 FIBOS FOUNDATION LTD <br />All Rights Reserved
          </div>
        </div>
      </div>
    )
  }
}
export default Footer