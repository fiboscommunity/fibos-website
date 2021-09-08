import React from 'react'
class Feature extends React.Component {
  state = {
    language: this.props.language
  }
  render () {
    const { language } = this.state
    return (
      <div className="index_feature">
        <div className="myContainer">
          <div className="dbFrameTitle h3">{language.index_feature_1}</div>
          <div className="img">
            <img src={require("../../imgs/Defi.png")} alt="defi"></img>
          </div>
          <div className="feature_items">
            <div className="col">
              <div className="feature_item first" >
                <div className="text">
                  <h5>
                    {language.index_feature_2}
                  </h5>
                  <p>
                    {language.index_feature_3}
                  </p>
                </div>
                <div className="line">
                </div>
              </div>
            </div>
            <div className="col">
              <div className="feature_item second" >
                <div className="line">
                </div>
                <div className="text">
                  <h5>
                    {language.index_feature_4}
                  </h5>
                  <p>
                    {language.index_feature_5}
                  </p>
                </div>
              </div>
              <div className="feature_item third" >
                <div className="line">
                </div>
                <div className="text">
                  <h5>
                    {language.index_feature_6}
                  </h5>
                  <p>
                    {language.index_feature_7}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Feature