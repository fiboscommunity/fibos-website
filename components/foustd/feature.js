import React from 'react'
import TitleLine from './pub/titleline'
import stablePic from '../../imgs/foustd_feature1.png'
import securityPic from '../../imgs/foustd_feature2.png'
import openPic from '../../imgs/foustd_feature3.png'
import transparentPic from '../../imgs/foustd_feature4.png'
class Foustd_feature extends React.Component {
  state = {
    featureData: []
  }
  componentDidMount () {
    const { language } = this.props
    this.setState({
      featureData: [
        {
          pic: stablePic,
          title: language.foustd_feature_item1_title,
          info: language.foustd_feature_item1_info
        },
        {
          pic: securityPic,
          title: language.foustd_feature_item2_title,
          info: language.foustd_feature_item2_info
        },
        {
          pic: openPic,
          title: language.foustd_feature_item3_title,
          info: language.foustd_feature_item3_info,
          h62: true
        },
        {
          pic: transparentPic,
          title: language.foustd_feature_item4_title,
          info: language.foustd_feature_item4_info
        },

      ]
    })
  }
  render () {
    const { language } = this.props
    const { featureData } = this.state
    return (
      <div className="foustd_feature">
        <div className="myContainer">
          <TitleLine language={language} title={{ title1: language.foustd_feature_title1_1, title2: language.foustd_feature_title1_2 }} />
          <div className="foustd_feature_items">
            {
              featureData.map((item, index) => {
                return (
                  <div className="foustd_feature_item" key={index}>
                    <div className={item.h62 ? "img third" : "img"}>
                      <img src={item.pic} />
                    </div>
                    <p className="title">{item.title}</p>
                    <p title={item.info}>
                      {item.info}
                    </p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}
export default Foustd_feature