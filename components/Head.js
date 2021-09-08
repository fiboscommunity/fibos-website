import Head from 'next/head'

export default ({ title = '' }) => (
    <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>{title ? title : 'FIBOS 是一个创造和发展区块链应用生态的平台'}</title>
        <meta name="keywords" content="EOS,区块链,BANCOR,钱包,fibos.js,DAPP,通证,token,FIBOS,区块链开发,发币,智能合约,JavaScript" />
        <meta name="description" content="开发者友好的区块链生态系统,JavaScript 开发 + BANCOR 协议智能通证 + 开发者服务，FIBOS 平台实现了快速开发、快速部署和稳定且流动的通证体系，帮助开发者一步进入区块链时代。" />
        <link rel="icon" type="image/png" href="/imgs/favicon.ico" />
        <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
        <script src="https://cdn.bootcss.com/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
        <script src="https://cdn.bootcss.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
        {/* <script src="//cdn.jsdelivr.net/npm/eruda"></script>
        <script>eruda.init();</script> */} 
    </Head>
)