import React from 'react'
import axios from 'axios'
import CountUp from 'react-countup';
class DefiZoology extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      foMaxSupply: 0,
      foSupply: 0,
      defiData: {},
      myCancle: null,
      // defi第一行需要渲染的数据
      defiTopData: [
        {
          title: props.language.index_defizoo_3,
          num: 0
        },
        {
          title: props.language.index_defizoo_4,
          num: 0
        },
        {
          title: props.language.index_defizoo_5,
          num: 0
        },
        {
          title: props.language.index_defizoo_6,
          num: 0
        },
      ],
      defiBottLeftData: [
        {
          title: props.language.index_defizoo_8,
          num: 0
        },
        {
          title: props.language.index_defizoo_9,
          num: 0
        },
      ],
      defiBottRightData: [
        {
          title: props.language.index_defizoo_11,
          num: 0,
          hasFousdt: false
        },
        {
          title: props.language.index_defizoo_12,
          num: 0,
          hasFousdt: true
        },
      ]
    }
  }
  componentDidMount () {
    //从后台获取数据
    this.initData()
  }
  componentWillUnmount () {
    window.removeEventListener("scroll", this.setDataHandle)
  }
  initData = () => {
    const getBlockChainInfoUrl = "/1.0/app/getBlockChainInfo"
    const getBlockChainInfoUrlPromise = axios.get(getBlockChainInfoUrl, {
      cancelToken: new axios.CancelToken((c) => {
        this.setState({
          myCancle: c
        })
      })
    }).then(res => {
      // 历史总流动量：let hisIbcInout;
      // 当前垮脸资产：let crossUsdt;
      // 7日用户：dex_users;
      // 7日成交量：dex_times;
      // 投票抵押量:let delegateCount;
      // 流通抵押量:let circulationDelegate
      // console.log(res);
      // 请求得来的数据是异步的，请注意
      const obj = {
        ...res.data,
        hisIbcInout: this.myParseInt(res.data.his_ibc_inout),
        crossUsdt: this.myParseInt(res.data.cross_usdt),
        delegateCount: this.myParseInt(res.data.delegate_count),
        circulationDelegate: this.myParseInt(res.data.circulation_delegate),
      }
      res.data &&
        this.setState({
          defiData: obj
        })
    }).catch(() => console.log('error'))

    const getinfoUrl = "/1.0/app/getinfo"
    const getinfoUrlPromise = axios.get(getinfoUrl).then(res => {
      // 总发行量
      res.data &&
        this.setState({
          foMaxSupply: res.data
        })
    }).catch(() => console.log('error'))

    const getsupplyUrl = "/1.0/app/getsupply"
    const getsupplyPromise = axios.get(getsupplyUrl).then(res => {
      // 总流通量
      res.data &&
        this.setState({
          foSupply: res.data
        }
        )
    }).catch(() => console.log('error'))
    // 异步加载全部完成
    Promise.all([getBlockChainInfoUrlPromise, getinfoUrlPromise, getsupplyPromise]).then(res => {
      this.setDataHandle()
      window.addEventListener("scroll", this.setDataHandle)
    })
  }
  setDataHandle = () => {
    //窗口底部到文档顶部的距离
    const defiBottomToDocTop = this.refs.defizoo_body.offsetTop + this.refs.defizoo_body.offsetHeight / 2
    const screenBottomToDocTop = window.scrollY + document.documentElement.clientHeight
    if (screenBottomToDocTop >= defiBottomToDocTop) {
      const { language } = this.props
      const { foMaxSupply, foSupply, defiData } = this.state
      this.setState({
        defiTopData: [
          {
            title: language.index_defizoo_3,
            ...this.calcuDefiDate(foMaxSupply)
          },
          {
            title: language.index_defizoo_4,
            ...this.calcuDefiDate(foSupply)
          },
          {
            title: language.index_defizoo_5,
            ...this.calcuDefiDate(defiData.delegateCount)
          },
          {
            title: language.index_defizoo_6,
            ...this.calcuDefiDate(defiData.delegateCount / foSupply)
          },
        ],
        defiBottLeftData: [
          {
            title: language.index_defizoo_8,
            ...this.calcuDefiDate(defiData.hisIbcInout)
          },
          {
            title: language.index_defizoo_9,
            ...this.calcuDefiDate(defiData.crossUsdt)
          },
        ],
        defiBottRightData: [
          {
            title: language.index_defizoo_11,
            ...this.calcuDefiDate(defiData.dex_users),
            hasFousdt: false
          },
          {
            title: language.index_defizoo_12,
            ...this.calcuDefiDate(defiData.dex_times),
            hasFousdt: true
          },
        ]
      })
    }
  }
  myParseInt = (str) => {
    const num = + str.split(",").join("")
    if ((typeof num) === "number") return num
    return "myParseInt转换失败"
  }
  // 处理数据所取单位
  calcuDefiDate = (num) => {
    // 取K
    // 取M
    // 取B
    // 取%
    let resNum = 0
    num = parseFloat(num)
    if (num >= 1000000) {
      resNum = num / 1000000
      return {
        num: resNum,
        suffix: " M"
      }
    } else if (num >= 1000) {
      resNum = num / 1000
      return {
        num: resNum,
        suffix: " K"
      }
    } else if (num > 1) {
      resNum = num
      return {
        num: resNum,
        suffix: " "
      }
    } else if (num <= 1) {
      resNum = num * 100
      return {
        num: resNum,
        suffix: "%"
      }
    } else {
      return {
        num: 0,
        suffix: ""
      }
    }
  }
  render () {
    const { language } = this.props
    const { defiTopData, defiBottLeftData, defiBottRightData } = this.state
    return (
      <div className="defizoo_body" >
        <div className="myContainer" ref="defizoo_body">
          <div className="h2 dbFrameTitle">
            {language.index_defizoo_1}
          </div>
          <div className="myitem">
            <div className="h3 bottomMiddleLine">
              {language.index_defizoo_2}
            </div>
            <div className="myrow">
              {
                defiTopData.map((item, index) => {
                  return (
                    <div className="mycol" key={index}>
                      <div className="h4">{item.title}</div>
                      <span>
                        {item.num ? <CountUp
                          start={0}
                          end={item.num ? (parseFloat(item.num.toFixed(0))) : 0}
                          duration={2.75}
                          suffix={item.suffix}
                        >
                        </CountUp> : '--'}
                      </span>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="bottom_row">
            <div className="myitem">
              <div className="h3 bottomMiddleLine">
                {language.index_defizoo_7}
              </div>
              <div className="myrow">
                {
                  defiBottLeftData.map((item, index) => {
                    return (
                      <div className="mycol" key={index}>
                        <div className="h4">{item.title}</div>
                        <span>{item.num ? <CountUp
                          start={0}
                          end={item.num ? (parseFloat(item.num.toFixed(0))) : 0}
                          duration={2.75}
                          suffix={item.suffix}
                        >
                        </CountUp> : "--"}
                        </span>
                        <br />
                        <span className="fou">FOUSDT</span>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className="myitem">
              <div className="h3 bottomMiddleLine">
                {language.index_defizoo_10}
              </div>
              <div className="myrow">
                {

                  defiBottRightData.map((item, index) => {
                    return (
                      <div className="mycol" key={index}>
                        <div className="h4">{item.title}</div>
                        <span>{item.num ? <CountUp
                          start={0}
                          end={item.num ? ((item.num + 1) * 20) : 0}
                          duration={2.75}
                          suffix={item.suffix}
                        >
                        </CountUp> : "--"}
                        </span>
                        <br />
                        {
                          item.hasFousdt ? (<span className="fou">FOUSDT</span>) : null
                        }
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default DefiZoology 