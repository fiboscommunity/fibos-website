import React from 'react'
// import echarts from 'echarts'
// import echarts from '../../utils/echarts.min.js'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/markPoint'
import 'echarts/lib/component/timeline'
import 'echarts/lib/component/dataZoom'
import 'echarts/lib/component/toolbox'

import axios from 'axios'
import BigNumber from 'bignumber.js'
import './index.scss'
// import NaviComponent from '../navi'

class TrendingComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      xAxis: [],
      yAxis: [],
      yAxisDollar: [],
      CNYnews: [],
      USDnews: [],
      hoverTrigger: false,
      dataZoomStart: 0,
      dataZoomEnd: 0,
      initDataZoomEnd: 0,
      mycharts: undefined,
      options: {},
      //判断是否已触发scroll的回调函数
      flag: true,
      // mousemoveToggle: false,
      isTenSeconds: false,
      mouseEventOnce: true,
      timer1: null,
      firstScreenNumber: 0,
      firstScreenIsComplete: false,
      allTmpYAxisDollar: [],
      allTmpCNYnews: [],
      allTmpUSDnews: [],
      isMeetScroll: false
    }
  }

  componentDidMount () {
    this.document = document
    this.initCharts()

    // this.tenSeconds()
  }
  // 设置首屏显示点个数
  setInitPcAndMobileState = (resData) => {
    if (window.innerWidth <= 767) {
      this.setState({
        firstScreenNumber: 14,
      }, () => {
        this.setInitDatazoomStartEnd(resData)
      })
    } else {
      this.setState({
        firstScreenNumber: 25,
      }, () => {
        this.setInitDatazoomStartEnd(resData)
      })
    }
  }
  setInitDatazoomStartEnd = (resData) => {
    const { firstScreenNumber } = this.state
    this.setState({
      // 三个点是两段长度
      dataZoomEnd: (firstScreenNumber - 1) / resData.length * 100,
      initDataZoomEnd: (firstScreenNumber - 1) / resData.length * 100
    })
  }
  //startMap
  startMap = () => {
    const { language } = this.props
    const { Lang } = language
    const { mouseEventOnce, isMeetScroll } = this.state
    if (window.scrollY >= this.refs.trendingMap.offsetTop - this.refs.trendingMap.offsetHeight / 2 && !isMeetScroll) {
      this.setState({
        isMeetScroll: true
      })
      let tmpXAxis = [],
        tmpYAxis = [],
        tmpYAxisDollar = [],
        tmpCNYnews = [],
        tmpUSDnews = [],
        i = 0;
      this.setState({
        timer1: setInterval(() => {
          const { firstScreenNumber, allTmpCNYnews, allTmpUSDnews } = this.state
          let { data } = this.state.axiosRes
          // data = data.filter((item, index) => index % 2 == 1)
          const { options, mycharts } = this.state
          tmpYAxisDollar.push(data[i].usd_price)
          if (data[i].zh_news) {
            tmpCNYnews.push({
              symbol: 'image:///imgs/pointLine100.svg',
              symbolSize: [10, 67.5],
              symbolOffset: [0, '-43%'],
              name: i,
              value: Lang === 'zh-cn' ? data[i].zh_news : data[i].en_news,
              coord: [i, data[i].cny_price],
              label: {
                position: ['0', '0'],
              },
            })
            tmpUSDnews.push({
              symbol: 'image:///imgs/pointLine100.svg',
              symbolSize: [10, 67.5],
              symbolOffset: [0, '-43%'],
              name: i,
              level: data[i].level || 0,
              value: Lang === 'zh-cn' ? data[i].zh_news : data[i].en_news,
              coord: [i, data[i].usd_price],
              label: {
                position: ['0', '0'],
              },
            })
          }
          this.setState({
            options: {
              ...options, series: [
                {
                  showAllSymbol: false,
                  name: 'USD',
                  data: tmpYAxisDollar,
                  type: 'line',
                  markPoint: {
                    data: tmpUSDnews,
                  },
                },
              ]
            }
          }, () => {
            const { options } = this.state
            mycharts.setOption(options, true)
          })
          i++
          //如果首屏加载完毕 就把所有数据都加载进echarts 并且让datazoom动起来
          if (i > firstScreenNumber) {
            const { allTmpYAxisDollar, xAxis, dataZoomStart, dataZoomEnd } = this.state
            // 这里想清定时器，必须在里面const timer1  原因是 如果在timer1 为null的时候const, 那时候const timer1  和state里的timer1 不是同一个地址,而当timer1是引用数据类型以后,const 出来的timer1指向的和state中timer1指向的是同一个地址
            // 定时器直接绑定在组件上 例如this.timer  要使用的时候也this.timer获取到
            const { timer1 } = this.state
            // console.log("kkkkk:", timer1 == this.state.timer1);
            this.setState({
              timer1: null
            })
            clearInterval(timer1)
            tmpYAxisDollar = allTmpYAxisDollar
            tmpCNYnews = allTmpCNYnews
            tmpUSDnews = allTmpUSDnews
            this.setState({
              USDnews: allTmpUSDnews,
              options: {
                ...options, series: [
                  {
                    showAllSymbol: false,
                    name: 'USD',
                    data: tmpYAxisDollar,
                    type: 'line',
                    markPoint: {
                      data: tmpUSDnews,
                    },
                  },
                ]
              }
            }, () => {
              const { options } = this.state
              mycharts.setOption(options, true)

            })
            //不手动拖拽  正常加载
            this.loadCharts(() => {
              const {
                // 这是echarts对象
                mycharts,
                USDnews,
                xAxis,
                options,
                dataZoomStart,
              } = this.state
              mycharts.off('datazoom')
              mycharts.on('datazoom', param => {
                // console.log('不手动触发.on');
                // console.log(param);
                //datazoom 移动只能绑定一次mouseout事件
                if (mouseEventOnce) {
                  this.addMouseEvent()
                  this.setState({
                    mouseEventOnce: false
                  })
                }
                const interval = new BigNumber(xAxis.length)
                  .multipliedBy(
                    new BigNumber(param.end)
                      .minus(new BigNumber(param.start || dataZoomStart))
                      .multipliedBy(0.01),
                  )
                  .multipliedBy(0.07)
                  .valueOf()
                const tmpMark = JSON.parse(JSON.stringify(USDnews))
                //tmpMark 是图中各点信息数据
                const tmpOptions = options
                // console.log("前：", tmpOptions.dataZoom[0]);
                // console.log("前:",tmpMark);
                this.removeArrItem(tmpMark, interval)
                // console.log("后:",tmpMark);
                tmpOptions.series[0].markPoint.data = tmpMark
                tmpOptions.dataZoom[0].start = param.start
                tmpOptions.dataZoom[0].end = param.end
                // console.log("后：", tmpOptions.dataZoom[0]);
                mycharts.setOption(tmpOptions)
                if (param.end < 100) {
                  this.setState(
                    {
                      dataZoomStart: param.start || dataZoomStart,
                      dataZoomEnd: param.end,
                    },
                    () => {
                      this.chartsAdd(param)
                    },
                  )
                }
              })

            })
            this.setState({
              //首屏加载完成标志 用于scroll 事件 和 初次加载initloader
              firstScreenIsComplete: true
            })
            // dispatchAction让datazoom动一下
            mycharts &&
              mycharts.dispatchAction({
                type: 'dataZoom',
                start: dataZoomStart + 100 / xAxis.length,
                end: dataZoomEnd + 100 / xAxis.length,
              })

          }
        }, 600)
      })
      window.removeEventListener('scroll', this.startMap)
    }
  }

  changePrice = () => {
    const {
      mycharts,
      options,
      yAxisDollar,
      yAxis,
      CNYnews,
      USDnews,
    } = this.state
    const priceName = options.series[0].name === 'CNY'
    this.setState(
      {
        options: {
          series: [
            {
              name: priceName ? 'USD' : 'CNY',
              data: priceName ? yAxisDollar : yAxis,
              type: 'line',
              markPoint: {
                data: priceName ? USDnews : CNYnews,
              },
            },
          ],
          toolbox: {
            feature: {
              myTool1: {
                icon: `image:///imgs/changeIcon_${
                  priceName ? 'USD' : 'CNY'
                  }.png`,
              },
            },
          },
        },
      },
      () => {
        mycharts.setOption(this.state.options)
      },
    )
  }

  initCharts = () => {
    const { language } = this.props
    const { Lang } = language
    let url = '/1.0/app/web/price_data'
    let tmpXAxis = [],
      tmpYAxis = [],
      tmpYAxisDollar = [],
      tmpCNYnews = [],
      tmpUSDnews = [],
      allTmpYAxisDollar = [],
      allTmpCNYnews = [],
      allTmpUSDnews = []
    const data = axios.get(url).then(async (res) => {
      this.setState({
        axiosRes: res
      })
      res.data &&
        res.data.map((item, index) => {
          tmpXAxis.push(item.date)
          tmpYAxis.push(item.cny_price)
          allTmpYAxisDollar.push(item.usd_price)
          this.setState({
            allTmpYAxisDollar: allTmpYAxisDollar
          })
          if (item.zh_news) {
            allTmpCNYnews.push({
              symbol: 'image:///imgs/pointLine100.svg',
              symbolSize: [10, 67.5],
              symbolOffset: [0, '-43%'],
              name: index,
              value: Lang === 'zh-cn' ? item.zh_news : item.en_news,
              coord: [index, item.cny_price],
              label: {
                position: ['0', '0'],
              },
            })
            allTmpUSDnews.push({
              symbol: 'image:///imgs/pointLine100.svg',
              symbolSize: [10, 67.5],
              symbolOffset: [0, '-43%'],
              name: index,
              level: item.level || 0,
              value: Lang === 'zh-cn' ? item.zh_news : item.en_news,
              coord: [index, item.usd_price],
              label: {
                position: ['0', '0'],
              },
            })
            this.setState({
              allTmpCNYnews,
              allTmpUSDnews
            })
          }

        })
      await this.setInitPcAndMobileState(res.data)
      const { initDataZoomEnd, mouseEventOnce } = this.state
      this.setState(
        {
          xAxis: tmpXAxis,
          yAxis: tmpYAxis,
          yAxisDollar: tmpYAxisDollar,
          CNYnews: tmpCNYnews,
          USDnews: tmpUSDnews,
          //初始化option
          options: {
            // animationDuration: 10000,
            xAxis: {
              type: 'category',
              data: tmpXAxis,
              axisLabel: { color: '#000' },
              axisLine: {
                lineStyle: { color: '#000' },
              },
              axisTick: {
                linkStyle: { color: '#000' },
              },
            },
            yAxis: {
              type: 'value',
              scale: true,
              splitLine: {
                show: true,
                lineStyle: {
                  color: 'rgba(0, 0, 0, 0.15)',
                },
              },
              axisLabel: { color: '#000' },
              axisLine: {
                lineStyle: { color: '#000' },
              },
              axisTick: {
                linkStyle: { color: '#000' },
              },
            },
            grid: {
              x: 60,
              y: 70,
              x2: 10,
              y2: 70,
            },
            tooltip: {
              trigger: 'axis',
              dataBackgroundColor: 'rgba(50,50,50,0.9)',
            },
            dataZoom: [
              {
                type: 'slider',
                start: 0,
                end: initDataZoomEnd,
                textStyle: {
                  color: '#000',
                },
                dataBackground: {
                  lineStyle: {
                    color: '#000',
                  },
                  areaStyle: {
                    // color: '#ddd',
                    color: '#000',
                  },
                },
              },
            ],
            series: [
              {
                showAllSymbol: false,
                name: 'USD',
                data: [],
                type: 'line',
                markPoint: {
                  data: [],
                },
              },
            ],
            toolbox: {
              showTitle: false,
              itemGap: 25,
              feature: {
                myTool: {
                  show: true,
                  icon: 'image:///imgs/replay.png',
                  onclick: () => {
                    this.replay()
                  },
                },
              },
              itemSize: 26,
            },
            color: ['#000'],
          },
        },
        () => {
          //每个600ms 更新一下markpoint
          let i = 0
          this.startMap()
          window.addEventListener('scroll', this.startMap)
          //初始化加载echarts
          this.loadCharts(() => {
            const { mycharts, options } = this.state
            mycharts.off('datazoom')
            // datazoon事件
            mycharts.on('datazoom', params => {
              const { firstScreenIsComplete, timer1 } = this.state
              //如果首屏还没加载完 就加载全部数据
              if (!firstScreenIsComplete) {
                this.setState({
                  firstScreenIsComplete: true,
                  timer1: null
                })
                // console.log(params);
                clearInterval(timer1)
                this.setState({
                  //datazoom事件使用的是USD_news
                  USDnews: allTmpUSDnews,
                  options: {
                    ...options,
                    series: [
                      {
                        showAllSymbol: false,
                        name: 'USD',
                        data: allTmpYAxisDollar,
                        type: 'line',
                        markPoint: {
                          data: allTmpUSDnews,
                        },
                      },
                    ],
                  }
                }, () => {
                  const { options } = this.state
                  mycharts.setOption(options, true)
                })
              }
              this.dataZoomFn(params)
            })
          })

        },
        //数据筛选 结束
      )
    })
  }
  //修改区域
  dataZoomFn = param => {
    // console.log('dataZoomFn');
    const {
      // 这是echarts对象
      mycharts,
      USDnews,
      xAxis,
      options,
      dataZoomStart,
      mouseEventOnce
    } = this.state
    // console.log(param);
    clearTimeout(this.state.timer1)//当手动拖拽区域移动时，就清除之前的定时器
    //datazoom 移动只能绑定一次mouse事件
    if (mouseEventOnce) {
      this.addMouseEvent()
      this.setState({
        mouseEventOnce: false
      })
    }
    const interval = new BigNumber(xAxis.length)
      .multipliedBy(
        new BigNumber(param.end)
          .minus(new BigNumber(param.start || dataZoomStart))
          .multipliedBy(0.01),
      )
      .multipliedBy(0.07)
      .valueOf()
    const tmpMark = JSON.parse(JSON.stringify(USDnews))
    //tmpMark 是图中各点信息数据
    const tmpOptions = options
    // console.log("前：", tmpOptions.dataZoom[0]);
    this.removeArrItem(tmpMark, interval)
    tmpOptions.series[0].markPoint.data = tmpMark
    tmpOptions.dataZoom[0].start = param.start
    tmpOptions.dataZoom[0].end = param.end
    // console.log("后：", tmpOptions.dataZoom[0]);
    mycharts.setOption(tmpOptions)

    if (param.end < 100) {
      this.setState(
        {
          dataZoomStart: param.start || dataZoomStart,
          dataZoomEnd: param.end,
        },
        () => {
          // datazoom动
          this.chartsAdd(param)
        },
      )
    }
  }

  replay = () => {
    const { timer1 } = this.state
    this.chartsDom.removeEventListener('mouseout', this.mouseoutFn)
    this.chartsDom.removeEventListener('mousemove', this.mousemoveFn)
    //重置时清除首屏加载定时器
    clearInterval(timer1)
    this.setState({
      xAxis: [],
      yAxis: [],
      yAxisDollar: [],
      CNYnews: [],
      USDnews: [],
      hoverTrigger: false,
      dataZoomStart: 0,
      dataZoomEnd: 0,
      initDataZoomEnd: 0,
      mycharts: undefined,
      options: {},
      //判断是否已触发scroll的回调函数
      flag: true,
      mytimer: null,
      // mousemoveToggle: false,
      isTenSeconds: false,
      mouseEventOnce: true,
      timer1: null,
      firstScreenNumber: 0,
      firstScreenIsComplete: false,
      allTmpYAxisDollar: [],
      allTmpCNYnews: [],
      allTmpUSDnews: [],
      isMeetScroll: false
    }, () => {
      // console.log('123', this.state);
      this.initCharts()
      this.startMap()
    })
    // this.tenSeconds()
  }
  addMouseEvent = () => {
    this.chartsDom.removeEventListener('mouseout', this.mouseoutFn)
    this.chartsDom.removeEventListener('mousemove', this.mousemoveFn)
    this.chartsDom.addEventListener('mouseout', this.mouseoutFn)
    this.chartsDom.addEventListener('mousemove', this.mousemoveFn)

    this.chartsDom.removeEventListener('touchstart', this.mousemoveFn)
    this.document.removeEventListener('touchstart', this.mouseoutFn)
    this.chartsDom.addEventListener('touchstart', this.mousemoveFn)
    this.document.addEventListener('touchstart', this.mouseoutFn)
  }
  mousemoveFn = (e) => {
    // console.log('mousemove');
    const { mycharts } = this.state
    e.stopPropagation()
    clearTimeout(this.timer)
    const dataZoom = mycharts.getOption().dataZoom[0]
    this.setState({
      dataZoomStart: dataZoom.start,
      dataZoomEnd: dataZoom.end,
      hoverTrigger: true,
    })
  }
  mouseoutFn = () => {
    // console.log('mouseout');
    const { mycharts, dataZoomStart, dataZoomEnd } = this.state
    if (dataZoomEnd < 100) {
      const dataZoom = mycharts.getOption().dataZoom[0]
      this.setState({
        hoverTrigger: false,
      })
      mycharts.dispatchAction({
        type: 'dataZoom',
        start: dataZoom.start || dataZoomStart,
        end: dataZoomEnd,
      })
    }
  }
  // datazoom移动逻辑
  chartsUpdate = param => {
    const { mycharts, xAxis, dataZoomStart } = this.state
    const { start, end } = param
    mycharts.dispatchAction({
      type: 'dataZoom',
      start: start + 100 / xAxis.length,
      end: end + 100 / xAxis.length,
    })

    const endValue = mycharts.getOption().dataZoom[0].endValue
    if (endValue) {
      mycharts.dispatchAction({
        type: 'downplay',
        dataIndex: endValue,
      })
      // mycharts.dispatchAction({
      //   type: 'showTip',
      //   seriesIndex: 0,
      //   dataIndex: endValue,
      // })
    }
    this.setState({
      dataZoomStart: start || dataZoomStart,
      dataZoomEnd: end,
    })
  }
  //筛选
  removeArrItem (arr, interval) {
    let changed = false
    arr.map((item, index, arr) => {
      if (index > 0) {
        if (item.coord[0] - arr[index - 1].coord[0] < interval) {
          if (item.level > arr[index - 1].level) {
            arr.splice(index, 1)
          } else {
            arr.splice(index - 1, 1)
          }
          changed = true
        }
      }
      if (!changed) {
        return arr
      } else {
        this.removeArrItem(arr, interval)
      }
    })
  }
  chartsAdd = param => {
    const { hoverTrigger } = this.state
    clearTimeout(this.timer)
    if (!hoverTrigger) {
      this.timer = setTimeout(() => {
        this.chartsUpdate(param)
      }, 600)
    }
  }
  loadCharts = callback => {
    const { options } = this.state
    this.setState(
      {
        mycharts: echarts.init(this.chartsDom),
      },
      () => {
        window.onresize = () => {
          this.state.mycharts.resize()
        }
        this.state.mycharts.setOption(options, true)
        callback()
      },
    )
  }

  render () {
    const { language } = this.props
    return (
      <div className="trending-map" ref="trendingMap">
        <div className="trending-title dbFrameTitle" id="Roadmap">
          {language.TrendingTitle}
        </div>
        <div
          className="charts"
          ref={ref => {
            this.chartsDom = ref
          }}
        />
      </div>
    )
  }
}

export default TrendingComponent