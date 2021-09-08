import React, { PureComponent } from 'react'
import axios from 'axios'

class Fail extends PureComponent {
    componentDidMount() {}

    render() {
        return (
            <div id="t-title">
                <div className="t-backgroud">
                    <img src="/imgs/bg.png" />
                    <div className="t-content">
                        <img src="/imgs/avtar.png " className="t-fl" />
                        <div className="t-fl t-text">
                            <h2>连接失败</h2>
                            <h5>尝试更多方法</h5>
                            <h5>加入Telegram和大神一起聊技术</h5>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .t-backgroud {
                        width: 600px;
                        margin: 0 auto;
                        position: relative;
                        padding-top: 100px;
                    }

                    .t-bg {
                        width: 100%;
                    }

                    .t-content {
                        position: absolute;
                        top: 30%;
                        width: 700px;
                    }

                    .t-fl {
                        float: left;
                    }

                    .t-text {
                        padding-top: 30px;
                        padding-left: 20px;
                    }
                `}</style>
            </div>
        )
    }
}

export default Fail
