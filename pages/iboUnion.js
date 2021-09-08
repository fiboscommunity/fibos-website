import { Component } from 'react'
import layout from '../components/Layout'
import Link from 'next/link'
import '../css/iboUnion.scss'
import '../css/common.scss'
import areaData from '../utils/areaData'
import post from '../utils/request'

class IBOUnion extends Component {

    initstate = {
        projectName: "",//项目名称
        projectSummary: "",//项目概况
        companyName: "",//公司名称
        contact: "",//联系人
        phone: "",//电话
        email: "",//邮箱
        country: "",//国家
        // province: "110000",//省编码
        province: "",//省编码
        province_name: "",//省名称
        // city: "110100",//市
        city: "",//市
        city_name: "",//市名称
        area: "",//区
        // area: "110101",//区
        area_name: "",//区名称
        detail: "",//详细地址
        postalCode: "",//邮编
        page: 1
    }

    state = {
        ...this.initstate
    }

    onChangeValue = (e) => {
        let name = e.target.name
        let changeObj = {}
        changeObj[name] = e.target.value;
        this.setState(changeObj)
    }

    render() {
        const {
            projectName,
            projectSummary,
            companyName,
            contact,
            phone,
            email,
            country,
            province,
            city,
            area,
            detail,
            postalCode,
            city_name,
            province_name,
            area_name,
            page
        } = this.state;
        let data = areaData;
        let choosePro = [], chooseCitys = [], chooseAreas = [];
        for (let i in data.provinces) {
            choosePro.push([i, data.provinces[i].name])
        }
        choosePro = choosePro.map((item) => (
            <option value={item[0]} name={item[1]}>{item[1]}</option>
        ))
        choosePro.unshift(<option disabled style={{ display: 'none' }} selected="selected" name="省">省</option>)
        let chooseProShow = (<select
            onChange={(e) => {
                this.setState({
                    province: e.target.value,
                    province_name: e.target[e.target.selectedIndex].text,
                    city: "",
                    area: "",
                })
            }}>
            {
                choosePro
            }
        </select>)
        if (province) {
            for (let i in data.provinces[province].citys) {
                chooseCitys.push([i, data.provinces[province].citys[i].name])
            }
            chooseCitys = chooseCitys.map((item) => (
                <option value={item[0]} name={item[1]}>{item[1]}</option>
            ))
            console.error(chooseCitys.unshift(<option disabled style={{ display: 'none' }} selected="selected" name="市">市</option>))
        }
        let chooseCitysShow = (
            <select
                key={province}
                onChange={(e) => {
                    this.setState({
                        city: e.target.value,
                        city_name: e.target[e.target.selectedIndex].text,
                        area: "",
                    })
                }}
            >
                {
                    chooseCitys
                }
            </select>
        )
        if (province && city) {
            for (let i in data.provinces[province].citys[city].countys) {
                chooseAreas.push([i, data.provinces[province].citys[city].countys[i].name])
            }
            chooseAreas = chooseAreas.map((item) => (
                <option value={item[0]} name={item[1]}>{item[1]}</option>
            ))
            chooseAreas.unshift(<option selected="selected" disabled style={{ display: 'none' }} name="区">区</option>)
        }
        let chooseAreasShow = (
            <select
                key={city}
                onChange={(e) => {
                    this.setState({
                        area: e.target.value,
                        area_name: e.target[e.target.selectedIndex].text,
                    })
                }}
            >
                {
                    chooseAreas
                }
            </select>
        )
        return (
            <div className="ibo-union">
                <div className="band">
                    <div className="container">
                        <span className="group">
                            IBO 应用创新联盟
                    </span>
                    </div>
                </div>
                <div className="container navigation">
                    <ol className="breadcrumb">
                        <li>
                            <Link href="/zh-cn/index">
                                <a style={{ cursor: 'pointor', color: '#08c' }}>首页</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/zh-cn/iboUnion">
                                <a style={{ cursor: 'pointor', color: '#08c' }}>IBO 应用创新联盟</a>
                            </Link>

                        </li>
                    </ol>
                </div>
                <div className="page-body">
                    <div className="ibo-members">
                        <div className="container">
                            <h2 id="Members">
                                联盟成员
                        </h2>
                            <div className="ibo-show">
                                {
                                    page === 1 &&
                                    <div>
                                        <div className="ibo-panel">
                                            <div className="ibo-content"><a href="http://forum.fo/index.php?app=forums&amp;module=forums&amp;controller=topic&amp;id=151"
                                                target="_blank">
                                                <div className="ibo-bgimg"><img src="../imgs/ibobg-1.png" />
                                                    <div className="ibo-name">怼怼语音</div>
                                                </div>
                                                <div className="name">怼怼语音</div>
                                            </a></div>
                                        </div>
                                        <div className="ibo-panel">
                                            <div className="ibo-content"><a href="http://forum.fo/index.php?app=forums&amp;module=forums&amp;controller=topic&amp;id=161"
                                                target="_blank">
                                                <div className="ibo-bgimg"><img src="../imgs/ibobg-2.png" />
                                                    <div className="ibo-name">小艾净水</div>
                                                </div>
                                                <div className="name">小艾净水</div>
                                            </a></div>
                                        </div>
                                        <div className="ibo-panel">
                                            <div className="ibo-content"><a href="http://forum.fo/index.php?app=forums&amp;module=forums&amp;controller=topic&amp;id=164"
                                                target="_blank">
                                                <div className="ibo-bgimg"><img src="../imgs/ibobg-3.png" />
                                                    <div className="ibo-name">星空联盟</div>
                                                </div>
                                                <div className="name">星空联盟</div>
                                            </a></div>
                                        </div>
                                        <div className="ibo-panel">
                                            <div className="ibo-content"><a href="http://forum.fo/index.php?app=forums&amp;module=forums&amp;controller=topic&amp;id=166"
                                                target="_blank">
                                                <div className="ibo-bgimg"><img src="../imgs/ibobg-1.png" />
                                                    <div className="ibo-name">区块恋：一生有你</div>
                                                </div>
                                                <div className="name">区块恋：一生有你</div>
                                            </a></div>
                                        </div>
                                        <div className="ibo-panel">
                                            <div className="ibo-content"><a href="http://forum.fo/index.php?app=forums&amp;module=forums&amp;controller=topic&amp;id=170"
                                                target="_blank">
                                                <div className="ibo-bgimg"><img src="../imgs/ibobg-2.png" />
                                                    <div className="ibo-name">PA社交网络</div>
                                                </div>
                                                <div className="name">PA社交网络</div>
                                            </a></div>
                                        </div>
                                        <div className="ibo-panel">
                                            <div className="ibo-content"><a href="http://forum.fo/index.php?app=forums&amp;module=forums&amp;controller=topic&amp;id=174"
                                                target="_blank">
                                                <div className="ibo-bgimg"><img src="../imgs/ibobg-3.png" />
                                                    <div className="ibo-name">Michain数字资产管理</div>
                                                </div>
                                                <div className="name">Michain数字资产管理</div>
                                            </a></div>
                                        </div>
                                        <div className="ibo-panel">
                                            <div className="ibo-content"><a href="http://forum.fo/index.php?app=forums&amp;module=forums&amp;controller=topic&amp;id=173"
                                                target="_blank">
                                                <div className="ibo-bgimg"><img src="../imgs/ibobg-1.png" />
                                                    <div className="ibo-name">积点</div>
                                                </div>
                                                <div className="name">积点</div>
                                            </a></div>
                                        </div>
                                        <div className="ibo-panel">
                                            <div className="ibo-content"><a href="http://forum.fo/index.php?app=forums&amp;module=forums&amp;controller=topic&amp;id=172"
                                                target="_blank">
                                                <div className="ibo-bgimg"><img src="../imgs/ibobg-2.png" />
                                                    <div className="ibo-name">来问</div>
                                                </div>
                                                <div className="name">来问</div>
                                            </a></div>
                                        </div>
                                        <div className="ibo-panel">
                                            <div className="ibo-content"><a href="http://forum.fo/index.php?app=forums&amp;module=forums&amp;controller=topic&amp;id=169"
                                                target="_blank">
                                                <div className="ibo-bgimg"><img src="../imgs/ibobg-3.png" />
                                                    <div className="ibo-name">图来啦</div>
                                                </div>
                                                <div className="name">图来啦</div>
                                            </a></div>
                                        </div>
                                        <div className="ibo-panel">
                                            <div className="ibo-content"><a href="http://forum.fo/index.php?app=forums&amp;module=forums&amp;controller=topic&amp;id=168"
                                                target="_blank">
                                                <div className="ibo-bgimg"><img src="../imgs/ibobg-1.png" />
                                                    <div className="ibo-name">Minority Win</div>
                                                </div>
                                                <div className="name">Minority Win</div>
                                            </a></div>
                                        </div>
                                        <div className="ibo-panel">
                                            <div className="ibo-content"><a href="http://forum.fo/index.php?app=forums&amp;module=forums&amp;controller=topic&amp;id=167"
                                                target="_blank">
                                                <div className="ibo-bgimg"><img src="../imgs/ibobg-2.png" />
                                                    <div className="ibo-name">转发链</div>
                                                </div>
                                                <div className="name">转发链</div>
                                            </a></div>
                                        </div>
                                        <div className="ibo-panel">
                                            <div className="ibo-content"><a href="http://forum.fo/index.php?app=forums&amp;module=forums&amp;controller=topic&amp;id=165"
                                                target="_blank">
                                                <div className="ibo-bgimg"><img src="../imgs/ibobg-3.png" />
                                                    <div className="ibo-name">生命链</div>
                                                </div>
                                                <div className="name">生命链</div>
                                            </a></div>
                                        </div>
                                        <div className="ibo-panel">
                                            <div className="ibo-content"><a href="http://forum.fo/index.php?app=forums&amp;module=forums&amp;controller=topic&amp;id=171"
                                                target="_blank">
                                                <div className="ibo-bgimg"><img src="../imgs/ibobg-1.png" />
                                                    <div className="ibo-name">Genesis游戏</div>
                                                </div>
                                                <div className="name">Genesis游戏</div>
                                            </a></div>
                                        </div>
                                        <div className="ibo-panel">
                                            <div className="ibo-content"><a href="http://forum.fo/index.php?app=forums&amp;module=forums&amp;controller=topic&amp;id=163"
                                                target="_blank">
                                                <div className="ibo-bgimg"><img src="../imgs/ibobg-2.png" />
                                                    <div className="ibo-name">健无忧</div>
                                                </div>
                                                <div className="name">健无忧</div>
                                            </a></div>
                                        </div>
                                        <div className="ibo-panel">
                                            <div className="ibo-content"><a href="http://forum.fo/index.php?app=forums&amp;module=forums&amp;controller=topic&amp;id=191"
                                                target="_blank">
                                                <div className="ibo-bgimg"><img src="../imgs/ibobg-3.png" />
                                                    <div className="ibo-name">源之链</div>
                                                </div>
                                                <div className="name">源之链</div>
                                            </a></div>
                                        </div>
                                        <div className="ibo-panel">
                                            <div className="ibo-content"><a href="http://forum.fo/index.php?app=forums&amp;module=forums&amp;controller=topic&amp;id=160"
                                                target="_blank">
                                                <div className="ibo-bgimg"><img src="../imgs/ibobg-1.png" />
                                                    <div className="ibo-name">SCSC智能公链</div>
                                                </div>
                                                <div className="name">SCSC智能公链</div>
                                            </a></div>
                                        </div>
                                        <div className="ibo-panel">
                                            <div className="ibo-content"><a href="http://forum.fo/index.php?app=forums&amp;module=forums&amp;controller=topic&amp;id=159"
                                                target="_blank">
                                                <div className="ibo-bgimg"><img src="../imgs/ibobg-2.png" />
                                                    <div className="ibo-name">BGX Farm</div>
                                                </div>
                                                <div className="name">BGX Farm</div>
                                            </a></div>
                                        </div>
                                        <div className="ibo-panel">
                                            <div className="ibo-content"><a href="http://forum.fo/index.php?app=forums&amp;module=forums&amp;controller=topic&amp;id=158"
                                                target="_blank">
                                                <div className="ibo-bgimg"><img src="../imgs/ibobg-3.png" />
                                                    <div className="ibo-name">通证助手</div>
                                                </div>
                                                <div className="name">通证助手</div>
                                            </a></div>
                                        </div>
                                        <div className="ibo-panel">
                                            <div className="ibo-content"><a href="http://forum.fo/index.php?app=forums&amp;module=forums&amp;controller=topic&amp;id=157"
                                                target="_blank">
                                                <div className="ibo-bgimg"><img src="../imgs/ibobg-1.png" />
                                                    <div className="ibo-name">熵医生</div>
                                                </div>
                                                <div className="name">熵医生</div>
                                            </a></div>
                                        </div>
                                        <div className="ibo-panel">
                                            <div className="ibo-content"><a href="http://forum.fo/index.php?app=forums&amp;module=forums&amp;controller=topic&amp;id=156"
                                                target="_blank">
                                                <div className="ibo-bgimg"><img src="../imgs/ibobg-2.png" />
                                                    <div className="ibo-name">加密星球</div>
                                                </div>
                                                <div className="name">加密星球</div>
                                            </a></div>
                                        </div>
                                    </div>
                                }
                                {
                                    page === 2 &&
                                    <div class='ibo-show'>
                                        <div class='ibo-panel'>
                                            <div class='ibo-content'>
                                                <a href='http://forum.fo/index.php?app=forums&amp;module=forums&amp;controller=topic&amp;id=155' target='_blank'>
                                                    <div class='ibo-bgimg'>
                                                        <img src='../imgs/ibobg-3.png' />
                                                        <div class='ibo-name'>Connectchain</div>
                                                    </div>
                                                    <div class='name'>Connectchain</div>
                                                </a>
                                            </div>
                                        </div>
                                        <div class='ibo-panel'>
                                            <div class='ibo-content'>
                                                <a href='http://forum.fo/index.php?app=forums&amp;module=forums&amp;controller=topic&amp;id=154' target='_blank'>
                                                    <div class='ibo-bgimg'>
                                                        <img src='../imgs/ibobg-1.png' />
                                                        <div class='ibo-name'>佰联广告分享联盟</div>
                                                    </div>
                                                    <div class='name'>佰联广告分享联盟</div>
                                                </a>
                                            </div>
                                        </div>
                                        <div class='ibo-panel'>
                                            <div class='ibo-content'>
                                                <a href='http://forum.fo/index.php?app=forums&module=forums&controller=topic&id=183' target='_blank'>
                                                    <div class='ibo-bgimg'>
                                                        <img src='../imgs/ibobg-2.png' />
                                                        <div class='ibo-name'>FINX</div></div>
                                                    <div class='name'>FINX</div>
                                                </a>
                                            </div>
                                        </div>
                                        <div class='ibo-panel'>
                                            <div class='ibo-content'>
                                                <a href='http://forum.fo/index.php?app=forums&amp;module=forums&amp;controller=topic&amp;id=179' target='_blank'>
                                                    <div class='ibo-bgimg'>
                                                        <img src='../imgs/ibobg-3.png' />
                                                        <div class='ibo-name'>叮咚钱包DDPocket</div>
                                                    </div>
                                                    <div class='name'>叮咚钱包DDPocket</div>
                                                </a>
                                            </div>
                                        </div>
                                        <div class='ibo-panel'>
                                            <div class='ibo-content'><a href='http://forum.fo/index.php?app=forums&amp;module=forums&amp;controller=topic&amp;id=153' target='_blank'>
                                                <div class='ibo-bgimg'>
                                                    <img src='../imgs/ibobg-1.png' />
                                                    <div class='ibo-name'>引力</div>
                                                </div>
                                                <div class='name'>引力</div>
                                            </a>
                                            </div>
                                        </div>
                                        <div class='ibo-panel'>
                                            <div class='ibo-content'>
                                                <a href='http://forum.fo/index.php?app=forums&amp;module=forums&amp;controller=topic&amp;id=152' target='_blank'>
                                                    <div class='ibo-bgimg'>
                                                        <img src='../imgs/ibobg-2.png' />
                                                        <div class='ibo-name'>FO谜语</div>
                                                    </div>
                                                    <div class='name'>FO谜语</div>
                                                </a>
                                            </div>
                                        </div>
                                        <div class='ibo-panel'>
                                            <div class='ibo-content'>
                                                <a href='http://forum.fo/index.php?app=forums&amp;module=forums&amp;controller=topic&amp;id=176' target='_blank'>
                                                    <div class='ibo-bgimg'>
                                                        <img src='../imgs/ibobg-3.png' />
                                                        <div class='ibo-name'>Onedex</div>
                                                    </div>
                                                    <div class='name'>Onedex</div>
                                                </a>
                                            </div>
                                        </div>
                                        <div class='ibo-panel'>
                                            <div class='ibo-content'>
                                                <a href='http://forum.fo/index.php?app=forums&amp;module=forums&amp;controller=topic&amp;id=175' target='_blank'>
                                                    <div class='ibo-bgimg'>
                                                        <img src='../imgs/ibobg-1.png' />
                                                        <div class='ibo-name'>加密邮件系统</div>
                                                    </div>
                                                    <div class='name'>加密邮件系统</div>
                                                </a>
                                            </div>
                                        </div>
                                        <div class='ibo-panel'>
                                            <div class='ibo-content'>
                                                <a href='http://forum.fo/index.php?app=forums&amp;module=forums&amp;controller=topic&amp;id=181' target='_blank'>
                                                    <div class='ibo-bgimg'>
                                                        <img src='../imgs/ibobg-2.png' />
                                                        <div class='ibo-name'>QOBIT</div>
                                                    </div>
                                                    <div class='name'>QOBIT</div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>

                            <div className="pickPage">
                                <div className="pick" onClick={() => {
                                    if (page !== 1) {
                                        this.setState({
                                            page: page - 1
                                        })
                                    }
                                    window.scrollTo(0, 0)
                                }}>
                                    {'<'}
                                </div>
                                <span
                                    className={`number ${page === 1 && 'active'}`}
                                    onClick={() => {
                                        this.setState({
                                            page: 1
                                        })
                                        window.scrollTo(0, 0)
                                    }}

                                >1</span>
                                <span
                                    className={`number ${page === 2 && 'active'}`}
                                    onClick={() => {
                                        this.setState({
                                            page: 2
                                        })
                                        window.scrollTo(0, 0)
                                    }}
                                >2</span>
                                <div className="pick" onClick={() => {
                                    if (page !== 2) {
                                        this.setState({
                                            page: page + 1
                                        })
                                        window.scrollTo(0, 0)
                                    }
                                }}>
                                    {'>'}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ibo-join">
                        <div className="container">
                            <h2 id="Aims">
                                联盟宗旨
                        </h2>
                            <div className="disc" id="Relying">
                                依托FIBOS网络，共同为区块链项目真实落地，打造健康的区块链经济生态而努力
                        </div>
                            <h2 id="Right">
                                联盟权益
                        </h2>
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-3">
                                    <div className="text-center">
                                        <img src="../imgs/join-1.png" />
                                        <p id="Guidance">
                                            全方位项目辅导与孵化
                                    </p>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-3">
                                    <div className="text-center">
                                        <img src="../imgs/join-2.png" />
                                        <p id="Resources">
                                            多层次共享各社区资源
                                    </p>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-3">
                                    <div className="text-center">
                                        <img src="../imgs/join-3.png" />
                                        <p id="Developer_Res">
                                            多样化共享开发者资源
                                    </p>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-3">
                                    <div className="text-center">
                                        <img src="../imgs/join-4.png" />
                                        <p id="Dividends">
                                            共享联盟生态发展红利
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ibo-tojoin">
                        <div className="container">
                            <h2 id="Join_Now">我要加入</h2>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-8">
                                    <div className="wrap">
                                        <span id="Project_Name">
                                            项目名称
                                        </span>
                                        <label>
                                            *
                                        </label>
                                        <input placeholder="请输入" name="projectName" defaultValue="" value={projectName} onChange={e => this.onChangeValue(e)} />
                                    </div>
                                    <div className="wrap">
                                        <span id="Project_Overview">
                                            项目概况
                                        </span>
                                        <label>
                                            *
                                        </label>
                                        <p>
                                            <textarea rows="3" cols="20" maxLength="1000" placeholder="请输入" name="projectSummary" value={projectSummary} onChange={e => this.onChangeValue(e)} ></textarea>
                                        </p>
                                    </div>
                                    <div className="wrap">
                                        <span id="Team_Name">
                                            公司 / 团队名称
                                        </span>
                                        <label>
                                            *
                                        </label>
                                        <input placeholder="请输入" name="companyName" value={companyName} onChange={e => this.onChangeValue(e)} />
                                    </div>
                                    <div className="wrap">
                                        <div className="row">
                                            <div className="col-4">
                                                <span id="Contact">
                                                    联系人
                                                </span>
                                                <label>
                                                    *
                                                </label>
                                                <input placeholder="请输入" name="contact" value={contact} onChange={e => this.onChangeValue(e)} />
                                            </div>
                                            <div className="col-4">
                                                <span id="Phone_Num">
                                                    电话
                                                </span>
                                                <label>
                                                    *
                                                </label>
                                                <input placeholder="请输入" name="phone" value={phone} onChange={e => this.onChangeValue(e)} />
                                            </div>
                                            <div className="col-4">
                                                <span id="Email">
                                                    邮箱
                                                </span>
                                                <label>
                                                    *
                                                </label>
                                                <input placeholder="请输入" name="email" autoComplete="false" value={email} onChange={e => this.onChangeValue(e)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wrap">
                                        <span id="Address">
                                            地址
                                        </span>
                                        <div className="row">
                                            <div className="col-3">
                                                <input placeholder="国家" name="country" value="中国" />
                                            </div>
                                            <div data-toggle="distpicker" className="col-9 cityselect" id="distpicker">
                                                <div className="row">
                                                    <div className="col-4">
                                                        {
                                                            chooseProShow
                                                        }
                                                    </div>
                                                    <div className="col-4">
                                                        {
                                                            chooseCitysShow
                                                        }
                                                    </div>
                                                    <div className="col-4">
                                                        {
                                                            chooseAreasShow
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-9">
                                                <input placeholder="详细地址" name="detail" value={detail} onChange={e => this.onChangeValue(e)} />
                                            </div>
                                            <div className="col-3">
                                                <input placeholder="邮编" name="postalCode" value={postalCode} onChange={e => this.onChangeValue(e)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wrap">
                                        <button id="submit-ibo" onClick={() => {
                                            if (!projectName || !projectSummary || !companyName || !contact || !phone || !email) {
                                                alert('请填写必填项！');
                                                return;
                                            }
                                            let phonetest = /^13\d{9}|14[57]\d{8}|15[012356789]\d{8}|17\d{9}|18[01256789]\d{8}$/;
                                            if (phone.length !== 11 || !phonetest.test(phone)) {
                                                alert('请输入正确的手机号码！')
                                                return;
                                            }
                                            let emailtest = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]+$/;
                                            if (!emailtest.test(email)) {
                                                alert('请输入正确的邮箱！')
                                                return;
                                            }
                                            post('/1.0/app/joinLeague',
                                                {
                                                    projectName,
                                                    projectSummary,
                                                    companyName,
                                                    contact,
                                                    phone,
                                                    email,
                                                    postalCode,
                                                    address: province_name + city_name + area_name + detail
                                                }
                                            ).then(() => {
                                                alert('提交成功')
                                                this.setState({
                                                    ...this.initstate
                                                })
                                            }).catch(() => {
                                                alert("系统异常，请稍后再试！")
                                                this.setState({
                                                    ...this.initstate
                                                })
                                            })
                                        }}>
                                            提交
                                        </button>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-4">
                                    <div className="connect-us">
                                        <h4 id="ContactUs">联系我们</h4>
                                        <div className="wrap">
                                            <div className="title" id="Office_Address">
                                                办公地址
                                        </div>
                                            <div className="disc" id="Company_Address">
                                                中国，江苏，南京市鼓楼区定淮门12号，15号楼南102室
                                        </div>
                                        </div>
                                        <div className="wrap">
                                            <div className="title" id="C_Phone_Num">
                                                联系电话
                                        </div>
                                            <div className="disc">
                                                <p>（+86） 18061494781
                                            </p>
                                                <p>
                                                    （+86） 025-83409830
                                            </p>
                                            </div>
                                        </div>
                                        <div className="wrap">
                                            <div className="title" id="C_Email">
                                                联系邮箱
                                        </div>
                                            <div className="disc">
                                                dapp@dapp.fo
                                        </div>
                                        </div>
                                        <div className="wrap">
                                            <div className="title" id="ScanQr">
                                                扫描二维码，关注公众号，联系我们
                                        </div>
                                            <div className="disc">
                                                <img src="../imgs/wechat-qr.png" />
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default layout(IBOUnion)