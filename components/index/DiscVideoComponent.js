import { Component } from 'react'
import Modal from '../Modal'
import bg from '../../imgs/bg-video.jpg'
import playBtn from '../../imgs/video-playbtn.png'

export default class extends Component {

    state = {
        isShow: false
    }

    render() {
        const { isShow } = this.state;
        const language = this.props.language
        return (
            <div className="index-discvideo">
                <div>
                    <img src={playBtn} className="play-btn"
                        onClick={() => {
                            this.setState({
                                isShow: true
                            })
                        }} />
                </div>
                {
                    isShow &&
                    (<Modal
                        width={'800px'}
                        closeClick={() => {
                            this.setState({
                                isShow: false
                            })
                        }}
                    >
                        <div className="video-content">
                            <video
                                poster="../imgs/video_pre.png"
                                autoPlay
                                playsInline
                                style={{ width: "100%" }}
                                height='100%'
                            >
                                {/* <source src="http://pj929u0ir.bkt.clouddn.com/zh_cn.mp4" type="video/mp4" /> */}
                                <source src={`/video/blockchain_${language.Lang === 'zh-cn' ? 'cn' : 'us'}.mp4`} type="video/mp4" />
                            </video>
                        </div>
                    </Modal>)
                }
            </div>
        )
    }
}