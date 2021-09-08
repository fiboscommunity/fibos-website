import * as React from 'react'
import NaviComponent from '../navi'
import './index.scss'
import { introduction } from '../../pageConfig'

class IntroductionComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dir: [
        {name: 'middle'},
        {name: 'start'},
        {name: 'normal'},
        {name: 'end'}
      ],
    };
    this.MIN_TOUCH_DISTANCE = 50
  }

  handleTouchStart = (e) => {
    this.startX = e.touches[0].clientX
  }
  
  handleTouchMove = (e) => {
    this.endX = e.touches[0].clientX
  }

  handleTouchEnd = (e, key) => {
    const { dir } = this.state
    let distance = Math.abs(this.startX - this.endX)
    if(distance > this.MIN_TOUCH_DISTANCE) {
      if(this.startX < this.endX) {
        if(key + 1 < 4) {
          this.slide(dir[key + 1].name, key + 1)
        } else {
          this.slide(dir[0].name, 0)
        }
      } else {
        if(key - 1 > -1) {
          this.slide(dir[key - 1].name, key - 1)
        } else {
          this.slide(dir[3].name, 0)
        }
      }
    }
  }
  
  slide = (name, key) => { 
    this.setState({ current: key });
    this.imgArr(name);
  }

  imgArr = (name) => { 
    let dirCopy = this.state.dir;
    if (name === 'start') { 
      const pop = dirCopy.pop();
      dirCopy.unshift(pop); 
    } else if (name === 'end') { 
      const shift = dirCopy.shift(); 
      dirCopy.push(shift);  
    }
    this.setState({ dir: dirCopy }); 
}

  render() {
    const { dir } = this.state;
    const { language } = this.props
    const lang = language.Lang.split('-')[0]
    return (
      <div className={'introduction-container'}>
        <div className={'slideBox'}>
          {
            dir.map((item, key) => {
              return (
                <div key={key} className={`slide ${item.name}`}>
                  <div className='card' onTouchStart={(e) => {
                    this.handleTouchStart(e)
                  }}
                  onTouchMove={(e) => {
                    this.handleTouchMove(e)
                  }}
                  onTouchEnd={(e) => {
                    this.handleTouchEnd(e, key)
                  }}
                  >
                    <div className={`${introduction[key].name === 'stable' ? 'card-title-stable' : 'card-title'}`}>
                      {introduction[key][`title_${lang}`]}
                    </div>
                    <div className='card-subs'>
                      {introduction[key].subs.map((sub, subIndex) => (
                        <div key={subIndex} className={`divide divide-${introduction[key].subs.length}`}>
                          <div className='sub-title'>{sub[`title_${lang}`]}</div>
                          <div className={`sub-content ${lang === 'zh' ? 'lineheight-zh' : 'lineheight-en'}`}>{sub[`content_${lang}`].map((subContent, subContentIndex) => (
                            <div key={subContentIndex}>
                              {subContent}
                            </div>
                          ))}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={item.name === 'middle' ? '' : 'masking'}
                  onClick={() => {this.slide(item.name, key)}}
                  >{''}</div>
                </div>
              );
            })
          }
        </div>
        <div className='slideTip'>
          <img src='../imgs/slideTip.png' />
        </div>
      </div>
    );
  }

}

export default NaviComponent(IntroductionComponent)
