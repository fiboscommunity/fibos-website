import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import DiscVideoComponent from './DiscVideoComponent'
class DiscComponent extends React.Component {
    zh_choose = [
        `${this.context.language.Main_Node}`,
        `${this.context.language.DappDeveloper}`,
        `${this.context.language.Com_Contributor}`,
        `${this.context.language.Volunteer}`
    ]

    en_choose = [`&nbsp;`, `${this.context.language.Main_Node}`, `${this.context.language.Volunteer}`, `&nbsp;`]

    main_node = [
        {
            name: 'slowmistioio',
            img_src: '../imgs/main1.png'
        },
        {
            name: 'fibos123comm',
            img_src: '../imgs/main2.png'
        },
        {
            name: 'fibosrockskr',
            img_src: '../imgs/main3.png'
        },
        {
            name: 'fibosgenesis',
            img_src: '../imgs/main4.png'
        },
        {
            name: 'liuqiangdong',
            img_src: '../imgs/main5.png'
        }
    ]
    dapp_developer = [
        {
            name: '邱绍锡',
            img_src: '../imgs/dappdev-1.png'
        },
        {
            name: '侯松林',
            img_src: '../imgs/dappdev-2.png'
        },
        {
            name: '庄周梦蝶',
            img_src: '../imgs/dappdev-3.png'
        },
        {
            name: 'fun',
            img_src: '../imgs/dappdev-4.png'
        },
        {
            name: '建怀',
            img_src: '../imgs/dappdev-5.png'
        }
    ]

    doc_contributor = [
        {
            name: '窦新',
            img_src: '../imgs/docer1.png'
        },
        {
            name: '假曾泽学',
            img_src: '../imgs/docer2.png'
        },
        {
            name: '痛饮狂歌',
            img_src: '../imgs/docer3.png'
        },
        {
            name: '筱伟',
            img_src: '../imgs/docer4.png'
        },
        {
            name: '蜘蛛侠',
            img_src: '../imgs/docer5.png'
        }
    ]

    volunteer = [
        {
            name: 'Onechain.one',
            img_src: '../imgs/community1.png'
        },
        {
            name: 'MORE Wallet',
            img_src: '../imgs/community2.png'
        },
        {
            name: 'Fotoolkit',
            img_src: '../imgs/community3.png'
        },
        {
            name: '51Token',
            img_src: '../imgs/community4.png'
        },
        {
            name: 'Ironman',
            img_src: '../imgs/community5.png'
        }
    ]

    state = {
        discList: [
            {
                img_src: '../imgs/icon-future1.png',
                title: `${this.context.language.Public_chain}`,
                detail: `${this.context.language.Public_chain_disc}`
            },
            {
                img_src: '../imgs/icon-future3.png',
                title: `${this.context.language.Healthy}`,
                detail: `${this.context.language.Healthy_disc}`
            },
            {
                img_src: '../imgs/icon-future2.png',
                title: `${this.context.language.FOUSDT_Value}`,
                detail: `${this.context.language.FOUSDT_Value_disc}`
            },
            {
                img_src: '../imgs/icon-future4.png',
                title: `${this.context.language.Entrance}`,
                detail: `${this.context.language.Entrance_disc}`
            },
            {
                img_src: '../imgs/icon-future5.png',
                title: `${this.context.language.Lower_threshold}`,
                detail: `${this.context.language.Lower_threshold_disc}`
            }
        ],
        currentChoose: this.context.language.Main_Node
    }

    render() {
        const { discList, currentChoose } = this.state
        const language = this.context.language
        let chooseMap = new Map([
            [`${language.Main_Node}`, this.main_node],
            [`${language.DappDeveloper}`, this.dapp_developer],
            [`${language.Com_Contributor}`, this.doc_contributor],
            [`${language.Volunteer}`, this.volunteer]
        ])

        let choose = language.Lang === 'zh-cn' ? this.zh_choose : this.en_choose
        return (
            <div>
                <div className="index-disc">
                    <div className="index-wrap">
                        <div className="disc-title">
                            <div id="Performance">{language.Performance}</div>
                        </div>
                        <div className="disc-content">
                            <div className="row">
                                {discList.map((ele, index) => (
                                    <div className="col-lg-2 col-md-6 col-sm-12 col-xs-12 disc-warp" key={index}>
                                        <div className="disc-panel">
                                            <div className="disc-pic">
                                                <img src={ele.img_src} className="disc-icon" />
                                            </div>
                                            <div className="panel-title titleBox" id="Lower_threshold">
                                                {ele.title}
                                            </div>
                                            <div className="disc-detail" id="Lower_threshold_disc">
                                                {ele.detail}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <DiscVideoComponent language={language} />
                <div className="disc-bottom">
                    <div className="disc-bottom-wrap">
                        <div className="disc-top-title" id="Diversified">
                            {language.Diversified}
                        </div>
                        <div className="disc-choose">
                            <ul>
                                {choose.map(
                                    (name, index) =>
                                        name !== '&nbsp;' ? (
                                            <li key={index}>
                                                <div
                                                    className={`chooseclick2 chooseclick main ${
                                                        name === currentChoose ? 'active' : ''
                                                    }`}
                                                    onClick={() => {
                                                        this.setState({ currentChoose: name })
                                                    }}>
                                                    {name}
                                                </div>
                                            </li>
                                        ) : (
                                            <li key={index} style={{ cursor: 'auto' }}>
                                                <div>&nbsp;</div>
                                            </li>
                                        )
                                )}
                            </ul>
                            <div className="clear" />
                        </div>
                        <div className="disc-avatar">
                            <ul className="avatar-ul">
                                {chooseMap.get(currentChoose).map(
                                    (ele, index, array) =>
                                        index !== array.length - 1 ? (
                                            <li key={index}>
                                                <div className="avatar">
                                                    <img src={ele.img_src} className="avatar4" />
                                                    <div className="name avatar4-name">{ele.name}</div>
                                                </div>
                                            </li>
                                        ) : (
                                            <li className="last-li" key={index}>
                                                <div className="avatar">
                                                    <img src={ele.img_src} className="avatar5" />
                                                    <div className="name avatar5-name">{ele.name}</div>
                                                </div>
                                            </li>
                                        )
                                )}
                            </ul>
                            <div className="clear" />
                        </div>
                        {language.Lang === 'zh-cn' && (
                            <div className="disc-ibo">
                                <Link href={`/zh-cn/iboUnion`}>
                                    <a id="IBO" target="_blank">
                                        {language.IBO}
                                    </a>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

DiscComponent.contextTypes = {
    language: PropTypes.object
}

export default DiscComponent
