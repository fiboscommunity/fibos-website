const express = require('express')
const next = require('next')
const { parse } = require('url')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
// const proxy = require('http-proxy-middleware')

app.prepare()
    .then(() => {
        const server = express()
        server.get('/zh-cn/newsdetail/:alias', (req, res) => {
            const actualPage = '/newsdetail'
            let urls = req.url.split('/')
            const env = urls[1]
            const queryParams = { alias: req.params.alias, env }
            app.render(req, res, actualPage, queryParams)
        })

        server.get('/en-us/newsdetail/:alias', (req, res) => {
            const actualPage = '/newsdetail'
            let urls = req.url.split('/')
            const env = urls[1]
            const queryParams = { alias: req.params.alias, env }
            app.render(req, res, actualPage, queryParams)
        })

        server.get(['/zh-cn(/*)?', '/en-us(/*)?'], (req, res) => {
            // 路由地址和文件名对应
            const parsedUrl = parse(req.url, true)
            console.log('parsedUrl', parsedUrl)
            let urls = parsedUrl.pathname.split('/')
            let currentPage = urls[2]
            const actualPage = '/' + (currentPage || 'index')
            console.log('actualPage12', actualPage)
            const env = urls[1]
            const queryParams = { env }
            app.render(req, res, actualPage, queryParams)
        })

        server.get('/1.0/app/web/details', (req, res) => {
            console.log('url:' + JSON.stringify(req.url))
            console.log('param:' + JSON.stringify(req.body))
        })

        server.get('*/imgs/*', (req, res) => {
            res.sendFile(__dirname + req.url)
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })


        server.listen(3000, err => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })
    .catch(ex => {
        console.error(ex.stack)
        process.exit(1)
    })
