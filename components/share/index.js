import * as React from 'react'

import './index.scss'

export default class ShareComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      wechatShow: false,
      followusShow: false,
      isSpreadShow: "myhidden",
      isPointerClicked: false
    }
    this.animateToheaderTimer = null
  }
  componentDidMount () {
    document.addEventListener('click', this.outDivClickHandler)
    window.addEventListener('click', this.isSpreadHandle)
  }
  componentWillUnmount () {
    document.removeEventListener('click', this.outDivClickHandler)
    window.removeEventListener('click', this.isSpreadHandle)
  }
  // window点击用
  isSpreadHandle = () => {
    this.setState({
      isSpreadShow: "myhidden",
    })
  }
  // pointer点击用
  toggelShare = (e) => {
    e.stopPropagation();
    const { isSpreadShow, isPointerClicked } = this.state
    this.setState({
      isSpreadShow: isSpreadShow === "myhidden" ? "myshow" : "myhidden",
      isPointerClicked: isPointerClicked ? false : true,
    })
  }
  outDivClickHandler = e => {
    const target = e.target
    if (this.wechatIcon && target !== this.wechatIcon) {
      this.setState({
        wechatShow: false,
      })
    }
    if (this.wechatIcon && target !== this.followIcon) {
      this.setState({
        followusShow: false,
      })
    }
  }
  shareClick = (e) => {
    e.stopPropagation();
  }
  animateToheader = () => {
    clearInterval(this.animateToheaderTimer)

    this.animateToheaderTimer = setInterval(() => {
      if (window.scrollY <= 0) {
        clearInterval(this.animateToheaderTimer)
      }
      let dis = window.scrollY / 4
      let toY = window.scrollY - dis
      window.scrollTo(0, toY)
      // console.log(toY);
    }, 15)
  }
  render () {
    const { wechatShow, followusShow, isSpreadShow, isPointerClicked, } = this.state
    return (
      <div className={`share`} onClick={this.shareClick}>
        <div className="shareContainer">
          <div className={isSpreadShow}>
            <div className={`wechat-qrcode ${wechatShow ? '' : 'hidden'}`}>
              <img src="../imgs/wechat_qrcode.jpg" />
            </div>
            <div className={`followus-qrcode ${followusShow ? '' : 'hidden'}`}>
              <img src="../imgs/followus_qrcode.jpg" />
            </div>
            <div className="share-elements">
              <a
                className="share-item wechat"
                onClick={() => {
                  this.setState({
                    wechatShow: wechatShow ? false : true,
                  })
                }}
              >
                <img
                  ref={node => {
                    this.wechatIcon = node
                  }}
                  src="../imgs/share_wechat.png"
                />
              </a>
              <a className="share-item github" href='https://github.com/FIBOSIO' target='_blank'>
                <img src="../imgs/share_github.png" />
              </a>
              <a className="share-item microblog" href='https://weibo.com/fibosio' target='_blank'>
                <img src="../imgs/share_microblog.png" />
              </a>
              <a className="share-item telegram" href='https://t.me/FIBOSIO' target='_blank'>
                <img src="../imgs/share_telegram.png" />
              </a>
              <a className="share-item twitter" href='https://twitter.com/fibos_io' target='_blank'>
                <img src="../imgs/share_twitter.png" />
              </a>
              <a
                onClick={() => {
                  this.setState({
                    followusShow: followusShow ? false : true,
                  })
                }}
                className="share-item star"
              >
                <img
                  ref={node => { this.followIcon = node }}
                  src="../imgs/share_star.png" />
              </a>
            </div>

          </div>
          <div className={`pointer ${isPointerClicked ? 'pointerClicked' : ""}`} onClick={this.toggelShare} >
            <div className="pointerImg">
            </div>
          </div>
          <div className="backtop">
            <a className="backtop-rocket" onClick={this.animateToheader}>
              <div className="img" />
            </a>
          </div>
        </div>
      </div>
    )
  }
}
