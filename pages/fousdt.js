import React from 'react'
import layout from '../components/Layout'
import { withRouter } from 'next/router'
import dynamic from 'next/dynamic'
import '../css/foustd.scss'

const Temp = dynamic(import('../components/public-components/temp'))
const FoustdBanner = dynamic(import('../components/foustd/banner'))
const FoustdFeature = dynamic(import('../components/foustd/feature'))
const FoustdApply = dynamic(import('../components/foustd/apply'))

class Foustd extends React.Component {
  state = {
    shareVisible: true,
    isShareHidden: "hidden",
    top: 0
  }
  componentDidMount () {
    const top = this.refs.foustd_bg.scrollHeight
    this.setState({
      top
    })
    window.onresize = () => {
      const top = this.refs.foustd_bg.scrollHeight
      this.setState({
        top
      })
    }
    const fn = () => {
      if (window.scrollY <= this.state.top && this.state.isShareHidden != "hidden") {
        this.setState({
          isShareHidden: "hidden"
        })
      }
      else if(window.scrollY > this.state.top && this.state.isShareHidden != ""){
        this.setState({
          isShareHidden: ""
        })
      }
    }
    fn()
    window.onscroll = () => {
      // console.log(this.state.top);
      fn()
    }
  }
  render () {
    const { language } = this.props
    const { isShareHidden } = this.state
    return (
      <Temp language={language} pageName="fousdt" isShareHidden={isShareHidden}>
        <div className="foustd_bg" ref="foustd_bg">
          <FoustdBanner language={language} />
        </div>
        <FoustdFeature language={language} />
        <FoustdApply language={language} />
      </Temp>
    )
  }
}

// 绑定路由和组件
export default withRouter(layout(Foustd))