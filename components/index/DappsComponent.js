import { Component } from 'react'
import Carousel from './localizeRB/Carousel'
import Touchable from './localizeRB/Touchable'

class DappsComponent extends Component {
    state = {
        index: 0,
        direction: null
    }
    render() {
        const language = this.props.language
        const { direction, index } = this.state
        return (
            <div className="index-banner">
                <a name="dapps" style={{ height: 0 }} />
                <div className="banner-wrap">
                    <div className="banner-choose" id="Dapps">
                        {language.Dapps}
                    </div>
                    <div className="banner-show">
                        {/* <Carousel
                            indicators={false}
                            controls={false}
                            interval={null}
                            wrap={false}
                            activeIndex={index}
                            direction={direction}
                            onSelect={() => {}}>
                            <Carousel.Item className="bannercontent"> */}
                                <div className="row">
                                    <div className="dapp">
                                        <a href={`http://wallet.fo/${language.Lang}`} target="_blank" className="link">
                                            <div className="card">
                                                <div className="card-img-top">
                                                    <img src="/imgs/dapp1.png" alt="" />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">{language.FOSmartWallet}</h5>
                                                    <p className="card-text">{language.FOSmartWallet_disc}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="dapp">
                                        <a href="https://www.more.top/" target="_blank" className="link">
                                            <div className="card">
                                                <div className="card-img-top">
                                                    <img src="/imgs/dapp2.png" alt="" />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">MORE Wallet</h5>
                                                    <p className="card-text">{language.MoreWalletDes}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="dapp">
                                        <a href="http://see.fo" target="_blank" className="link">
                                            <div className="card">
                                                <div className="card-img-top">
                                                    <img src="/imgs/dapp5.png" alt="" />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title" id="BLExp">
                                                        {language.BLExp}
                                                    </h5>
                                                    <p className="card-text" id="BrowserDes">
                                                        {language.BrowserDes}
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="dapp">
                                        <a href="https://fotoolkit.com" target="_blank" className="link">
                                            <div className="card">
                                                <div className="card-img-top">
                                                    <img src="/imgs/dappweb.png" alt="" />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Fotoolkit</h5>
                                                    <p className="card-text">{language.FoWebDes}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="dapp">
                                        <a href="https://www.fibos123.com/" target="_blank" className="link">
                                            <div className="card">
                                                <div className="card-img-top">
                                                    <img src="/imgs/dapp11.png" alt="" />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">{language.FIBOSLo}</h5>
                                                    <p className="card-text">{language.FIBOSLoDes}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="dapp">
                                        <a href="https://fibos.slowmist.io/" target="_blank" className="link">
                                            <div className="card">
                                                <div className="card-img-top">
                                                    <img src="/imgs/dapp12.png" alt="" />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">{language.Slow}</h5>
                                                    <p className="card-text">{language.SlowDes}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="dapp">
                                        <a href="http://fibos.team" target="_blank" className="link">
                                            <div className="card">
                                                <div className="card-img-top">
                                                    <img src="/imgs/dapp13.png" alt="" />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">{language.Backup}</h5>
                                                    <p className="card-text">{language.BackupDes}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="dapp">
                                        <a href="https://fibscan.io" target="_blank" className="link">
                                            <div className="card">
                                                <div className="card-img-top">
                                                    <img src="/imgs/dapp14.png" alt="" />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">{language.Fibscan}</h5>
                                                    <p className="card-text">{language.FibscanDes}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            {/* </Carousel.Item>
                        </Carousel>
                        <Touchable
                            className="dapp-control left"
                            onClick={() => {
                                this.setState({
                                    index: index === 0 ? 1 : 0,
                                    direction: 'prev'
                                })
                            }}>
                            <img src="../imgs/arrow-partner.png" />
                        </Touchable>

                        <Touchable
                            className="dapp-control right"
                            onClick={() => {
                                this.setState({
                                    index: index === 0 ? 1 : 0,
                                    direction: 'next'
                                })
                            }}>
                            <img src="../imgs/arrow-partner.png" />
                        </Touchable> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default DappsComponent
