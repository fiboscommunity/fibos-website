import React from 'react'
import axios from 'axios'
import { index_banner_counts } from '../../pageConfig'
class Banner extends React.Component {
  state = {
    bannerData: {},
    language: this.props.language,
    bannerAnimate1: "",
    bannerAnimate2: "",
    bannerAnimate3: "",
    bannerAnimate4: "",
  }
  componentDidMount () {
    this.setState({
      bannerAnimate1: "bannerAnimate1",
      bannerAnimate2: "bannerAnimate2",
      bannerAnimate3: "bannerAnimate3",
      bannerAnimate4: "bannerAnimate4",
    })
    this.getResData()
  }
  getResData = () => {
    const url = "/1.0/app/getBlockChainInfo"
    axios.get(url).then(res => {
      // 注册用户数 :TransactionNumber
      //链上已注册节点数:NumberOfUsers
      // 区块数:BlockNumber;
      //30日链上交易数:month_transactions;
      let { ...obj } = res.data
      obj = {
        ...obj,
        TransactionNumber: this.myParseInt(obj.TransactionNumber),
        NumberOfUsers: this.myParseInt(obj.NumberOfUsers),
        BlockNumber: this.myParseInt(obj.BlockNumber),
        month_transactions: this.myParseInt(obj.month_transactions)
      }
      this.setState({
        bannerData: obj
      })
    })
  }
  myParseInt = (str) => {
    if (!str) return 0
    const num = str && + str.split(",").join("")
    if ((typeof num) === "number") return num
    return false
  }
  render () {
    const { bannerData, language, bannerAnimate1, bannerAnimate2, bannerAnimate3, bannerAnimate4 } = this.state
    return (
      <div className="index_banner_bg">
        <div className="myContainer index_banner">
          <div className="text">
            <div className={"bannerAnimate " + bannerAnimate1}>
              <img src={require('../../imgs/banner-LOGO.png')} alt="logo" />
            </div>
            <div className={"bannerAnimate h2 " + bannerAnimate2}>{language.index_banner_1}</div>
            <div className={"bannerAnimate p " + bannerAnimate3}>
              {language.index_banner_2}
            </div>
            <div className={"counts bannerAnimate " + bannerAnimate4}>
              {
                index_banner_counts.map((item, index) => {
                  let temp = "- -"
                  // console.log(bannerData[item.dataName]);
                  if (bannerData[item.dataName] !== "undefined" && bannerData[item.dataName]) {
                    temp = (bannerData[item.dataName] / item.dataRate).toFixed(0) + item.dataUnit
                  }
                  return (
                    <div className="item" key={index}>
                      <div>
                        {temp}
                      </div>
                      <div className="p">
                        {language[item.pContent]}
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="down_pointer">
            <img src={require("../../imgs/down_pointer.png")} alt="down_pointer" />
          </div>
        </div>
      </div>
    )
  }
}
export default Banner