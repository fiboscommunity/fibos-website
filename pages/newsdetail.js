import { Component } from 'react'
import Band from '../components/news/Band'
import layout from '../components/Layout'
import { withRouter } from 'next/router'
import post from '../utils/request'
import Link from 'next/link'
import '../css/news.scss'
import '../css/common.scss'

class Newdetail extends Component {
    state = {
        details: '',
        recommends: ''
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.router.query.alias !== this.props.router.query.alias) {
            post('/1.0/app/web/details', { lang: this.props.language.Lang, alias: nextProps.router.query.alias })
                .then(newsdetails => {
                    this.setState({
                        details: newsdetails.details,
                        recommends: newsdetails.recommends
                    })
                })
                .catch(() => {
                    alert('系统异常')
                })
        }
        // console.log(JSON.stringify(nextProps));
    }
    componentDidMount() {
        let alias = this.props.router.query.alias
        post('/1.0/app/web/details', { lang: this.props.language.Lang, alias })
            .then(newsdtails => {
                this.setState({
                    details: newsdtails.details,
                    recommends: newsdtails.recommends
                })
            })
            .catch(() => {
                alert('系统异常')
            })
    }
    render() {
        const { details, recommends } = this.state
        const { language, router } = this.props

        let query = null
        let env = null
        try {
            query = router.query
            env = query.env
        } catch (e) {
            console.log(e)
        }

        return (
            <div className="doc-container">
                <div className="inside-container">
                    <Band alias={this.props.router.query.alias} title={details.title} language={language} />
                    <div className="page-body">
                        <div className="container row">
                            <div className="col-lg-9 col-md-9 news-content-container">
                                <h3 className="news-title">{details.title}</h3>
                                {!!env &&
                                    env === 'zh-cn' && (
                                        <p className="info">
                                            发布时间: {details.date} 作者: {details.author}
                                        </p>
                                    )}

                                <div className="news-content" dangerouslySetInnerHTML={{ __html: details.content }} />
                            </div>
                            {language.Lang === 'zh-cn' && (
                                <div className="col-lg-3 col-md-3 news-rec-container">
                                    <h5>新闻推荐</h5>
                                    <div className="rec-wrap">
                                        <ul className="rec-list">
                                            {recommends &&
                                                recommends.length > 0 &&
                                                recommends.map((ele, index) => (
                                                    <Link
                                                        href={`/${language.Lang}/newsdetail/${ele.alias}`}
                                                        key={index}>
                                                        <a className="rec-item">{ele.title}</a>
                                                    </Link>
                                                ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const detail = withRouter(Newdetail)

export default layout(detail)
