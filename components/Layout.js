import React from 'react'
import Head from './Head'
import Header from './Header'
import Footer from './Footer'
import userAgent from '../utils/userAgent'
import zhCn from '../locales/zh-CN'
import enUs from '../locales/en-US'

import fetch from 'isomorphic-unfetch'

export default function layout (Component, isIndex) {
    return class extends React.Component {
        static async getInitialProps ({ req, asPath }) {
            // console.log('getInitialProps:', abc++);
            // safir浏览器会在前端调用getInitialProps，getInitialProps接收不到req（safir会在点击回退时，会在客户端执行一次layout文件，不知道原因）   

            if (req) {
                const agent = userAgent(req)
                let path = req.url
                let language = path.indexOf('en-us') === -1 ? zhCn : enUs
                let isNews = path.indexOf('newsdetail') !== -1 ? true : false
                if (isNews) {
                    let title = ''
                    let alias = path.split('/')[3]
                    // let host = req.headers['host'];
                    // console.log('header:' + JSON.stringify(req.headers))
                    // let referer = req.headers['referer'];
                    // let pro = referer ? referer.split('//')[0] : '';
                    // let protocol = pro ? pro : 'https:';
                    // console.log('http:' + `${protocol}//${host}/1.0/app/web/details`)
                    try {
                        let opt = {
                            method: 'POST',
                            body: JSON.stringify({ lang: language.Lang, alias }),
                            headers: {
                                Accept: 'application/json, text/plain, */*',
                                'Content-Type': 'application/json;charset=UTF-8'
                            },
                            credentials: 'same-origin'
                            // timeout: 1000
                        }
                        //上生产环境前修改此处路径
                        const res = await fetch(`https://fibos.io/1.0/app/web/details`, opt)
                        const data = await res.json()
                        if (data) {
                            title = data.details.title
                        }
                        return { language, agent, title }
                    } catch (e) {
                        return { language, agent }
                    }
                } else {

                    return { language, agent }
                }
            } else {
                let path = asPath
                let language = path.indexOf('en-us') === -1 ? zhCn : enUs
                return { language }
            }
        }
        render () {
            let { language, agent, title } = this.props
            return (
                <div>
                    <Head title={title} />
                    <Component {...this.props} agent={agent} language={language} />
                </div>
            )
        }
    }
}
