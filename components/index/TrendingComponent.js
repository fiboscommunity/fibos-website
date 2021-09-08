import React from 'react'
import echarts from 'echarts'
import axios from 'axios'
import BigNumber from 'bignumber.js'
import '../../css/common.scss'

export default class TrendingComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      xAxis: [],
      yAxis: [],
      yAxisDollar: [],
      CNY_news: [],
      USD_news: [],
      hoverTrigger: false,

      dataZoomStart: 0,
      dataZoomEnd: 30,
      mycharts: undefined,

      options: {},
    }
  }

  componentDidMount() {
    this.initCharts()
  }

  componentWillReceiveProps(nextProps) {
    const { dataZoomStart, dataZoomEnd, hoverTrigger } = this.state
    // 滚动到对应高度开始自动播放
    if (this.props.trendingTrigger !== nextProps.trendingTrigger) {
      const { xAxis, mycharts } = this.state
      mycharts &&
        mycharts.dispatchAction({
          type: 'dataZoom',
          start: dataZoomStart + 100 / xAxis.length,
          end: dataZoomEnd + 100 / xAxis.length,
        })
    }
  }

  changePrice = () => {
    const {
      mycharts,
      options,
      yAxisDollar,
      yAxis,
      CNY_news,
      USD_news,
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
                data: priceName ? USD_news : CNY_news,
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
    const tmp_xAxis = [],
      tmp_yAxis = [],
      tmp_yAxisDollar = [],
      tmp_CNYnews = [],
      tmp_USDnews = []
    const data = axios.get(url).then(res => {
      res.data &&
        res.data.map((item, index) => {
          tmp_xAxis.push(item.date)
          tmp_yAxis.push(item.cny_price)
          tmp_yAxisDollar.push(item.usd_price)
          if (item.zh_news) {
            tmp_CNYnews.push({
              symbol: 'image:///imgs/pointLine100.svg',
              symbolSize: [40, 100],
              symbolOffset: [0, '-27%'],
              name: index,
              value: Lang === 'zh-cn' ? item.zh_news : item.en_news,
              coord: [index, item.cny_price],
              label: {
                position: ['0', '0'],
              },
            })
            tmp_USDnews.push({
              symbol: 'image:///imgs/pointLine100.svg',
              symbolSize: [40, 100],
              symbolOffset: [0, '-27%'],
              name: index,
              level: item.level || 0,
              value: Lang === 'zh-cn' ? item.zh_news : item.en_news,
              coord: [index, item.usd_price],
              label: {
                position: ['0', '0'],
              },
            })
          }
        })
      this.setState(
        {
          xAxis: tmp_xAxis,
          yAxis: tmp_yAxis,
          yAxisDollar: tmp_yAxisDollar,
          CNY_news: tmp_CNYnews,
          USD_news: tmp_USDnews,
          options: {
            xAxis: {
              type: 'category',
              data: tmp_xAxis,
              axisLabel: { color: '#fff' },
              axisLine: {
                lineStyle: { color: '#fff' },
              },
              axisTick: {
                linkStyle: { color: '#fff' },
              },
            },
            yAxis: {
              type: 'value',
              scale: true,
              splitLine: {
                show: true,
                lineStyle: {
                  color: 'rgba(250, 250, 250, 0.15)',
                },
              },
              axisLabel: { color: '#fff' },
              axisLine: {
                lineStyle: { color: '#fff' },
              },
              axisTick: {
                linkStyle: { color: '#fff' },
              },
            },
            grid: {
              x: 60,
              y: 70,
              x2: 40,
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
                end: 30,
                textStyle: {
                  color: '#fff',
                },
                dataBackground: {
                  lineStyle: {
                    color: '#fff',
                  },
                  areaStyle: {
                    color: '#ddd',
                  },
                },
              },
            ],
            series: [
              {
                showAllSymbol: false,
                name: 'USD',
                data: tmp_yAxisDollar,
                type: 'line',
                markPoint: {
                  data: tmp_USDnews,
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
            color: ['#fff'],
          },
        },
        () => {
          this.loadCharts(() => {
            const {
              mycharts,
              USD_news,
              xAxis,
              options,
              dataZoomStart,
            } = this.state
            mycharts.on('datazoom', param => {
              const interval = new BigNumber(xAxis.length)
                .multipliedBy(
                  new BigNumber(param.end)
                    .minus(new BigNumber(param.start || dataZoomStart))
                    .multipliedBy(0.01),
                )
                .multipliedBy(0.07)
                .valueOf()
              const tmp_mark = JSON.parse(JSON.stringify(USD_news))
              const tmp_options = options
              this.removeArrItem(tmp_mark, interval)
              tmp_options.series[0].markPoint.data = tmp_mark
              tmp_options.dataZoom[0].start = param.start
              tmp_options.dataZoom[0].end = param.end
              mycharts.setOption(tmp_options)

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
            window.onresize = () => {
              mycharts.resize()
            }

            this.chartsDom.addEventListener('mousemove', () => {
              clearTimeout(this.timer)
              const dataZoom = mycharts.getOption().dataZoom[0]
              this.setState({
                dataZoomStart: dataZoom.start,
                dataZoomEnd: dataZoom.end,
                hoverTrigger: true,
              })
            })

            this.chartsDom.addEventListener('mouseout', () => {
              const { dataZoomEnd, xAxis } = this.state
              if( dataZoomEnd < 100) {
                const dataZoom = mycharts.getOption().dataZoom[0]
                this.setState({
                  hoverTrigger: false,
                })
                mycharts.dispatchAction({
                  type: 'dataZoom',
                  start: dataZoom.start || dataZoomStart,
                  end: dataZoomEnd + 100 / xAxis.length,
                })
              }
            })
          })
        },
      )
    })
  }

  replay = () => {
    const { mycharts, xAxis } = this.state
    mycharts.dispatchAction({
      type: 'dataZoom',
      start: 0,
      end: 30,
    })
  }

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
        type: 'highlight',
        dataIndex: endValue,
      })
      mycharts.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: endValue,
      })
    }
    this.setState({
      dataZoomStart: start || dataZoomStart,
      dataZoomEnd: end,
    })
  }

  removeArrItem(arr, interval) {
    let changed = false
    arr.map((item, index, arr) => {
      if (index > 0) {
        if (item.coord[0] - arr[index - 1].coord[0] < interval) {
          if(item.level > arr[index - 1].level) {
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
    if(!hoverTrigger) {
      this.timer = setTimeout(() => {
        this.chartsUpdate(param)
      }, 300)
    }
  }

  loadCharts = callback => {
    const { options } = this.state
    this.setState(
      {
        mycharts: echarts.init(this.chartsDom),
      },
      () => {
        this.state.mycharts.setOption(options)
        callback()
      },
    )
  }

  render() {
    const { language } = this.props
    return (
      <div className="trending-map">
        <div className="trending-title" id="Roadmap">
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
