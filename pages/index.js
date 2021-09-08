import React from 'react'
import '../css/myindex.scss'
import layout from '../components/Layout'
import dynamic from 'next/dynamic'
import { withRouter } from 'next/router'

const Temp = dynamic(import('../components/public-components/temp'))
const Cooperator = dynamic(import('../components/myindex/cooperator'))
const TrendingComponent = dynamic(import('../components/trending-map/index'))
const DefiZoology = dynamic(import('../components/myindex/defi-zoology'))
const Products = dynamic(import('../components/myindex/products'))
const Feature = dynamic(import('../components/myindex/feature'))
const Banner = dynamic(import('../components/myindex/banner'))

class Test extends React.Component {
  state = {
    language: this.props.language,
    //决定走势图的开始
    mapOffsetTop: 0,
    isShareHidden: "hidden",
    //决定share栏的隐藏
    shareVisible: true,
    top: 0,
    imgSrc: ""
  }
  componentDidMount () {
    // console.log(this.refs.trend_map.offsetTop);
    this.setState({
      mapOffsetTop: this.refs.trend_map.offsetTop - 300
    })
    const top = document.documentElement.clientHeight
    this.setState({
      top
    })
    window.onresize = () => {
      const top = document.documentElement.clientHeight
      this.setState({
        top
      })
    }
    this.hiddenShare()
    window.onscroll = () => {
      // console.log(this.state.top);
      this.hiddenShare()
    }
    this.lazyLoad()
    window.addEventListener('scroll', this.lazyLoad)
  }
  componentWillUnmount () {
    window.removeEventListener('scroll')
  }
  hiddenShare = () => {
    if (window.scrollY <= this.state.top) {
      this.setState({
        isShareHidden: "hidden"
      })
    }
    else {
      this.setState({
        isShareHidden: ""
      })
    }
  }
  animateToheader () {
    clearInterval(timer)
    const timer = setInterval(() => {
      if (window.scrollY <= 0) {
        clearInterval(timer)
      }
      let dis = window.scrollY / 4
      let toY = window.scrollY - dis
      window.scrollTo(0, toY)
      // console.log(toY);
    }, 15)
  }
  //图片懒加载
  lazyLoad = () => {
    // 方案一：低版本不兼容
    // var intersectionObserver = new IntersectionObserver(
    //   (entries) => {
    //     // 如果不可见，就返回
    //     // console.log(entries);
    //     entries.forEach((entry) => {
    //       if (entry.intersectionRatio <= 0) {
    //         // console.log('不可见')
    //       } else {
    //         // console.log("可见")  
    //         intersectionObserver.disconnect();
    //         this.setState({
    //           imgSrc: "imgSrc"
    //         })
    //       }
    //     })
    //   }
    // )
    // //开始观察
    // intersectionObserver.observe(this.refs.products)
    // intersectionObserver.observe(this.refs.cooperator)
    // console.dir(this.refs.feature.offsetHeight);
    // console.log(window.scrollY);
    if (window.scrollY >= this.refs.feature.offsetHeight / 2) {
      this.setState({
        imgSrc: "imgSrc"
      })
    }
  }
  render () {
    const { language, imgSrc, isShareHidden } = this.state
    return (
      <Temp language={language} pageName="index" isShareHidden={isShareHidden}>
        <div ref="index_banner">
          <Banner language={language} />
        </div>
        <div ref="feature" >
          <Feature language={language} />
        </div>
        <div ref="products">
          <Products language={language} imgSrc={imgSrc} />
        </div>
        <DefiZoology language={language} />
        <div ref="trend_map">
          <TrendingComponent language={language} offsetTop={this.state.mapOffsetTop} />
        </div>
        <div ref="cooperator">
          <Cooperator language={language} imgSrc={imgSrc} />
        </div>
      </Temp>
      // <div>
      //   1111
      // </div>
    )
  }
}

export default withRouter(layout(Test))