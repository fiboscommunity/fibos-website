import { Component } from 'react'
import layout from '../components/Layout'
import Link from 'next/link'
import '../css/faq.scss'
import '../css/common.scss'
import { Panel, PanelGroup } from 'react-bootstrap'
import post from '../utils/request'

class FAQ extends Component {
    state = {
        classify: [],
        qaList: [],
        classifyId: "",
        classifyName: ""
    }

    componentDidMount() {
        post('/1.0/app/web/faq', { lang: 'zh-cn' }).then((res) => {
            this.setState({
                classify: res.classify,
                qaList: res.qa,
                classifyId: res.classify[0].id,
                classifyName: res.classify[0].name
            })
        }).catch((err) => {
            alert("系统异常，请稍后再试！")
        })


    }
    render() {
        const { classify, qaList, classifyName } = this.state;
        return (
            <div className="doc-container">
                <div className="inside-container">
                    <div className="band">
                        <div className="container">
                            <span className="group">
                                指南
                        </span>
                        </div>
                    </div>
                    <div className="container">
                        <ol className="breadcrumb">
                            <li>
                                <Link href={`/zh-cn/index`}>
                                    <a style={{ cursor: 'pointor', color: '#08c' }}>首页</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={`/zh-cn/faq`}>
                                    <a style={{ cursor: 'pointor', color: '#08c' }}>指南</a>
                                </Link>
                            </li>
                            {
                                classifyName &&
                                <li>
                                    {classifyName}
                                </li>
                            }
                        </ol>
                    </div>
                    <div className="page-body">
                        <div className="container row">
                            <div className="sidebar hidden-xs col-lg-2">
                                <div className="panel-group" id="accordion" role="tablist">
                                    {
                                        classify.length > 0 && classify.map((ele) => (
                                            <div className="card">
                                                <div className="card-header" role="tab" id="headingOne">
                                                    <h4 className="card-title">
                                                        <a data-toggle="collapse" data-parent="#accordion" onClick={() => {
                                                            this.setState({
                                                                qaList: [],
                                                            })
                                                            post('/1.0/app/web/faq', { lang: 'zh-cn', id: ele.id }).then((res) => {
                                                                this.setState({
                                                                    classify: res.classify,
                                                                    qaList: res.qa,
                                                                    classifyId: ele.id,
                                                                    classifyName: ele.name
                                                                })
                                                            }).catch((err) => {
                                                                alert("系统异常，请稍后再试！")
                                                            })
                                                        }}>
                                                            {ele.name}
                                                        </a>
                                                    </h4>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            {
                                qaList && qaList.length > 0 &&
                                <div className="col-lg-10">
                                    <div id="accordion">
                                        {
                                            qaList.map((ele, index) => (
                                                <div className="faq" key={index}>
                                                    <div className="faq-header" id={`heading${index}`}>
                                                        <h2 className="h2 collapsed" data-toggle="collapse" data-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`}>
                                                            {ele.question}
                                                        </h2>
                                                    </div>
                                                    <div id={`collapse${index}`} className="collapse" aria-labelledby={`heading${index}`} data-parent="#accordion">
                                                        <div className="faq-body" dangerouslySetInnerHTML={{ __html: ele.answer }} >
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                            )
                                        }
                                    </div>
                                </div>
                            }
                        </div>

                    </div>
                </div >
            </div>
        )
    }

}
export default layout(FAQ)