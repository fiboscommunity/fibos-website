import Link from 'next/link'

export default ({ language }) => (
    <div>
        <div className="index-banner">
            <div className="banner-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-4 bottom-left">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                    <h5 id="FIBOS">{language.FIBOS}</h5>
                                    <ul>
                                        <li>
                                            <a href="javascript:void(0)" className="connectus">
                                                <img src="/imgs/wx-qr.jpeg" className="wxqrimg" />
                                                <span id="ContactUs_f">{language.ContactUs}</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                    <h5>{language.Recommended}</h5>
                                    <ul>
                                        <li>
                                            <a href={`https://dev.fo`} target="_blank">
                                                {language.Developer}
                                            </a>
                                        </li>
                                        <li>
                                            <a href={`https://dapp.fo`} target="_blank">
                                                {language.DAPP}
                                            </a>
                                        </li>
                                        <li>
                                            <a href={`https://wallet.fo`} target="_blank">
                                                {language.Wallet}
                                            </a>
                                        </li>
                                        {/*<li>
                                            <a href={`https://www.bit.cc/page/trade.html?mk_type=BTC&trade_coin_name=FO`} target="_blank">
                                                {language.FO_Quotation}
                                            </a>
                                        </li>*/}
                                    </ul>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                    {language.Lang === 'zh-cn' && [
                                        <h5>{language.Help_f}</h5>,
                                        <ul>
                                            {/*<li>
                                            <Link
                                                href={`/${language.Lang}/${
                                                    language.Lang === 'zh-cn'
                                                        ? 'newsdetail/fo-qian-bao-dui-huan-jiao-cheng'
                                                        : 'foexchange'
                                                }`}>
                                                <a target="_blank">{language.FO_Exchange}</a>
                                            </Link>
                                        </li>*/}
                                            <li>
                                                <Link href={`/${language.Lang}/faq`}>
                                                    <a target="_blank">{language.FAQ}</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    ]}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-8 col-xs-12 bottom-right">
                            <div className="row">
                                <div className="col-sm-4 col-xs-12">
                                    <img src="/imgs/logo.png" />
                                </div>
                                <div className="col-sm-8 col-xs-12">
                                    <div className="toptext">{language.Make_f}</div>
                                    <div className="downtext" id="FIBOS_F">
                                        {language.Easy}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="footer-copyright">Copyright © 2021 FIBOS FOUNDATION LTD All Rights Reserved</div>
            </div>
        </div>
    </div>
)

// <a href={`https://dev.fo/${language.Lang}`} target="_blank">
