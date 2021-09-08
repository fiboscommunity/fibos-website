//使用这个组件必须url符合 /zh-cn/pagename 这种形式
import React from 'react'
import './header.scss'
//电脑端
class Pc_header extends React.Component {
  state = {
    currentLanguage: "zh-cn",
    isShowLangDrop: "",
    langImg: this.props.language.Lang === "zh-cn" ? "/imgs/foustd_cn.png" : "/imgs/foustd_en.png",
    currentPage: ""
  }
  componentDidMount () {
    this.curentLanguageChange()
    this.getCurrentPage()
    window.addEventListener('click', this.hiddenLangDropDown)
  }
  componentWillUnmount () {
    window.removeEventListener('click', this.hiddenLangDropDown)
  }
  curentLanguageChange = () => {
    const str = window.location.pathname.split('/')[1] ? window.location.pathname.split('/')[1] : 'zh-cn'
    this.setState({
      currentLanguage: str
    }, () => {
      this.getLangImg()
    })
  }
  hiddenLangDropDown = () => {
    this.setState({
      isShowLangDrop: ""
    })
  }
  changLangShow = (e) => {
    e.stopPropagation();
    this.setState({
      isShowLangDrop: this.state.isShowLangDrop === "" ? "show" : ""
    })
  }
  getLangImg = () => {
    const { langImg, currentLanguage } = this.state
    this.setState({
      langImg: currentLanguage === "en-us" ? "/imgs/foustd_en.png" : "/imgs/foustd_cn.png"
    })
  }
  getCurrentPage = () => {
    const str = window.location.pathname.split('/')[2] ? window.location.pathname.split('/')[2] : 'index'
    this.setState({
      currentPage: str
    })
  }
  render () {
    const { language } = this.props
    const { currentLanguage, isShowLangDrop, langImg, currentPage } = this.state
    return (
      <div className="pc_header" >
        <div className="myContainer">
          <div className="foustd_logo">
            <img src="/imgs/logo.png" alt="loog"></img>
          </div>
          <div className="foustd_nav">
            <div >
              <a href={"/" + currentLanguage + '/index'} className="parent_a" aria-label={language.foustd_nav_item1}>
                <span>{language.foustd_nav_item1}</span>
              </a>
            </div>
            <div className="noline">
              <a href="#" className="parent_a" >
                <span>{language.foustd_nav_item2}</span>
                <object>
                  <div className="son_nav">
                    <a target="_blank" href="https://wallet.fo" aria-label={language.nav_item2_1}>{language.nav_item2_1}</a>
                    <a target="_blank" href="http://dex.fo/" aria-label={language.nav_item2_2}>{language.nav_item2_2}</a>
                    <a target="_blank" href="http://cross.fo" aria-label={language.nav_item2_3}>{language.nav_item2_3}</a>
                    <a href={`/${currentLanguage}/fousdt`} aria-label={language.nav_item2_4}>{language.nav_item2_4}</a>
                  </div>
                </object>
              </a>
            </div>
            <div className="noline">
              <a href="#" className="parent_a">
                <span>{language.foustd_nav_item3}</span>
                <object>
                  <div className="son_nav second">
                    <a target="_blank" href="http://fibjs.org/" aria-label={language.nav_item3_2}>{language.nav_item3_2}</a>
                    <a target="_blank" href="http://bp.fo/#/" aria-label={language.nav_item3_3}>{language.nav_item3_3}</a>
                  </div>
                </object>
              </a>
            </div>
            <div >
              <a target="_blank" href="https://dev.fo" className="parent_a" aria-label={language.foustd_nav_item4}>
                <span>{language.foustd_nav_item4}</span>
              </a>
            </div>
            <div >
              <a target="_blank" href="http://forum.fo/index.php?app=forums&module=forums&controller=topic&id=482" className="parent_a" aria-label={language.foustd_nav_item5}>
                <span>{language.foustd_nav_item5}</span>
              </a>
            </div>
          </div>
          <div className="foustd_lang" onClick={this.changLangShow}>
            <img src={langImg} />
            <div className={"dropDown" + " " + isShowLangDrop}>
              <div>
                <a href={"/zh-cn/" + currentPage} aria-label="chinese language">
                  <img src="/imgs/foustd_cn.png" alt="chinese"></img>
                </a>
              </div>
              <div>
                <a href={"/en-us/" + currentPage} aria-label="english language">
                  <img src="/imgs/foustd_en.png" alt="english"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
//手机端
class Mobile_header extends React.Component {
  state = {
    langImg: this.props.language.Lang === "zh-cn" ? "/imgs/foustd_cn.png" : "/imgs/foustd_en.png",
    currentPage: "",
    currentLanguage: "zh-cn",
    isShowLangDrop: "",
    navShow: "",
    mobileBgClass: "bgshow",
    secondary_menu_show_1: "",
    secondary_menu_show_2: "",
  }
  componentDidMount () {
    this.curentLanguageChange()
    this.getCurrentPage()
    window.addEventListener("scroll", this.hiddenDrop)
  }
  componentWillUnmount () {
    window.removeEventListener("scroll", this.hiddenDrop)
  }
  curentLanguageChange = () => {
    const str = window.location.pathname.split('/')[1] ? window.location.pathname.split('/')[1] : 'zh-cn'
    this.setState({
      currentLanguage: str
    }, () => {
      this.getLangImg()
    })

  }
  changLangShow = () => {
    this.setState({
      isShowLangDrop: this.state.isShowLangDrop === "" ? "show" : "",
      secondary_menu_show_1: "",
      secondary_menu_show_2: ""
    })
  }
  getLangImg = () => {
    const { langImg, currentLanguage } = this.state
    this.setState({
      langImg: currentLanguage === "zh-cn" ? "/imgs/foustd_cn.png" : "/imgs/foustd_en.png"
    })
  }
  clickNavBtn = () => {
    this.setState({
      navShow: this.state.navShow === "show" ? "" : "show",
      isShowLangDrop: "",
      secondary_menu_show_1: "",
      secondary_menu_show_2: "",
    })
  }
  getCurrentPage = () => {
    const str = window.location.pathname.split('/')[2] ? window.location.pathname.split('/')[2] : 'index'
    this.setState({
      currentPage: str
    })
  }
  showSecondaryMenu = (index) => {
    const { secondary_menu_show_1, secondary_menu_show_2 } = this.state
    if (index === 1) {
      this.setState({
        secondary_menu_show_1: secondary_menu_show_1 ? "" : "secondary_menu_show",
        secondary_menu_show_2: "",
        isShowLangDrop: ""
      })
    } else if (index === 2) {
      this.setState({
        secondary_menu_show_2: secondary_menu_show_2 ? "" : "secondary_menu_show",
        secondary_menu_show_1: "",
        isShowLangDrop: ""
      })
    }

  }
  hiddenDrop = () => {
    const { navShow } = this.state
    this.setState({
      navShow: "",
      secondary_menu_show_1: "",
      secondary_menu_show_2: "",
      isShowLangDrop: "",
    })
  }
  render () {
    const { language } = this.props
    const { navShow, currentLanguage, isShowLangDrop, langImg, currentPage, secondary_menu_show_1, secondary_menu_show_2 } = this.state
    return (
      <div className={"mobile_header" + " " + this.state.mobileBgClass}>
        <div className="myContainer">
          <div className="nospread">
            <div className="logo">
              <img src="/imgs/logo.png" alt="logo"></img>
            </div>
            <div className="navbtn" onClick={this.clickNavBtn}>
              <span className="bar" ></span>
              <span className="bar" ></span>
              <span className="bar" ></span>
            </div>
          </div>
          {/* 手机端弹出导航栏 */}
          <nav className={navShow}  >
            <div className="items">
              <a className="stitle" href={"/" + currentLanguage + '/index'} aria-label={language.foustd_nav_item1}>{language.foustd_nav_item1}</a>
            </div>
            <div className="items">
              <div className="stitle" onClick={this.showSecondaryMenu.bind(this, 1)}>{language.foustd_nav_item2}</div>
              <div className={"myrow secondary_menu h44" + " " + secondary_menu_show_1}>
                <a target="_blank" href="https://wallet.fo" className="item" aria-label={language.nav_item2_1}>{language.nav_item2_1}</a>
                <a target="_blank" href="https://exchange.fo" className="item" aria-label={language.nav_item2_2}>{language.nav_item2_2}</a>
                <a target="_blank" href="http://cross.fo" className="item" aria-label={language.nav_item2_3}>{language.nav_item2_3}</a>
                <a href={`/${currentLanguage}/fousdt`} className="item" aria-label={language.nav_item2_4}>{language.nav_item2_4}</a>
              </div>
            </div>
            <div className="items">
              <div className="stitle" onClick={this.showSecondaryMenu.bind(this, 2)}>{language.foustd_nav_item3}</div>
              <div className={"myrow secondary_menu" + " " + secondary_menu_show_2}>
                <a href="http://fibjs.org/" className="item" aria-label={language.nav_item3_1}>{language.nav_item3_1}</a>
                <a href="http://bp.fo/#/" className="item" aria-label={language.nav_item3_2}>{language.nav_item3_2}</a>
              </div>
            </div>
            <div className="items">
              <a href="https://dev.fo" className="stitle" aria-label={language.foustd_nav_item4}>{language.foustd_nav_item4}</a>
            </div>
            <div className="items">
              <a href="/zh-cn/news" className="stitle" aria-label={language.foustd_nav_item5}>{language.foustd_nav_item5}</a>
            </div>
            <div className="foustd_lang stitle" onClick={this.changLangShow}>
              {language.nav_language}
              <div className={"dropDown" + " " + isShowLangDrop}>
                <div>
                  <a href={"/zh-cn/" + currentPage} aria-label="chinese language">
                    <img src="/imgs/foustd_cn.png" alt="chinese"></img>
                  </a>
                </div>
                <div>
                  <a href={"/en-us/" + currentPage} aria-label="english language">
                    <img src="/imgs/foustd_en.png" alt="english"></img>
                  </a>
                </div>
              </div>
            </div>
            <div className="remain" onClick={this.hiddenDrop}>

            </div>
          </nav>
        </div>
      </div>
    )
  }
}
class Header extends React.Component {
  state = {}
  render () {
    const { language } = this.props
    return (
      <div className="myheader">
        <Pc_header language={language} />
        <Mobile_header language={language} />
      </div>
    )
  }
}
export default Header