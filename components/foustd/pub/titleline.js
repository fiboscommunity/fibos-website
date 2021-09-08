import React from 'react'
import './titleline.scss'
class TitleLine extends React.Component {
  state = {

  }
  render () {
    const { title } = this.props
    return (
      <div className="titleLine">
        <div className="title" >
          <div className="col_1 l" >
            <div className="line l">
            </div>
          </div>
          <span >
            {title.title1}
          </span>
          <div className="col_1 r" >
            <div className="line r">

            </div>
          </div>
        </div>
        <div className="title_en">
          {title.title2}
        </div>
      </div>
    )
  }
}
export default TitleLine