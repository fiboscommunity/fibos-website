import React from "react";
import TitleLine from "./pub/titleline";
class Foustd_apply extends React.Component {
  state = {};
  render() {
    const { language } = this.props;
    return (
      <div className="foustd_apply">
        <div className="myContainer">
          <TitleLine
            language={language}
            title={{
              title1: language.foustd_feature_title2_1,
              title2: language.foustd_feature_title2_2,
            }}
          />
          <div className="foustd_apply_items">
            <div className="foustd_apply_item">
              <img src="/imgs/foustd_apply_2.png" />
              <a href="https://cross.fo/transfer" target="_blank">
                {language.foustd_apply_item1_a}
              </a>
            </div>
            <div className="foustd_apply_item">
              <img src="/imgs/foustd_apply_1.png" />
              <a href="http://dex.fo/" target="_blank">
                {language.foustd_apply_item2_a}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Foustd_apply;
