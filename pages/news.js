import React from 'react'
import layout from '../components/Layout'
import { withRouter } from 'next/router'
import Link from 'next/link'
import '../css/news.scss'
import '../css/common.scss'
import Band from '../components/news/Band'
import post from '../utils/request'

class News extends React.Component {
    state = {
        newsList: [],
        recommendList: []
    }

    componentDidMount() {
        post('/1.0/app/web/news', { lang: this.props.language.Lang })
            .then(newsList => {
                this.setState({ newsList: newsList.news, recommendList: newsList.recommends })
            })
            .catch(err => {
                alert('系统异常，请稍后再试！')
            })
    }

    render() {
        const { newsList, recommendList } = this.state
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
                    <Band language={language} />
                    <div className="page-body">
                        <div className="container row">
                            <div className="col-lg-9 col-md-9 news-list-container">
                                {newsList.length > 0 &&
                                    newsList.map(ele => (
                                        <div className="new-item">
                                            <h4>
                                                <Link href={`/${language.Lang}/newsdetail/${ele.alias}`}>
                                                    <a>{ele.title}</a>
                                                </Link>
                                            </h4>
                                            {!!env &&
                                                env === 'zh-cn' && (
                                                    <p className="info">
                                                        发布时间: {ele.date} 作者: {ele.author}
                                                    </p>
                                                )}
                                        </div>
                                    ))}
                            </div>
                            {language.Lang === 'zh-cn' && (
                                <div className="col-lg-3 col-md-3 news-rec-container">
                                    <h5>新闻推荐</h5>
                                    <div className="rec-wrap">
                                        <ul className="rec-list">
                                            {recommendList.length > 0 &&
                                                recommendList.map((ele, index) => (
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

export default withRouter(layout(News))
