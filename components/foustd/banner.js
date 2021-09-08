import React from "react";
class Foustd_banner extends React.Component {
  state = {};
  render() {
    const { language } = this.props;
    return (
      <div className="foustd_banner ">
        <div className="myContainer">
          <div className="foustd_banner_title">
            <span className="pc_banner"> {language.foustd_banner_title}</span>
            <span className="pc_mobile">{language.foustd_mobile_banner_1}</span>
          </div>
          <div className="foustd_banner_pro">
            <span className="pc_banner">
              {language.foustd_banner_pro_item1}
              <br />
              {language.foustd_banner_pro_item2}
              <br />
              {language.foustd_banner_pro_FOUSDK}
              <br />
              {language.foustd_banner_pro_item3}
            </span>
            <span className="mobile_banner">
              {language.foustd_mobile_banner_2}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default Foustd_banner;
