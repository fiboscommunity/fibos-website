
import layout from '../components/Layout'
import '../css/news.scss'
import '../css/common.scss'

const foexchange = () => (
    <div className="doc-container">
        <div className="inside-container">
            <div className="page-body">
                <div className="container row">
                    <div className="col-lg-9 col-md-9 news-content-container en">
                        <div className="news-content">
                            <h1 id="-fo-">1. How to Register an FO Account</h1>
                            <h4 id="-fo-wallet-">Step One:  Scan the QR code below and download the FO Wallet</h4>
                            <p><img src="/media/201809/5b8b4fedaba908441dbbfc75/%E5%BE%AE%E4%BF%A1%E4%BA%8C%E7%BB%B4%E7%A0%81.png" alt="微信二维码.png" title="微信二维码.png" />
                            </p>
                            <h4 id="-fo-">Step Two: Create or Import a FO account.</h4>
                            <p>1. If you don’t have a FO account yet, please click “create account”</p>
                            <p><img src="/media/201809/5b8b63a133a10251ee442616/APP%E9%A6%96%E9%A1%B5.png" alt="APP首页.png" title="APP首页.png" /></p>
                            <p>2. After you click in, fill in your account name and password. (Account name should be 12 characters long consisting of lower-case letters and of numbers 1 to 5) You can check whether the account is registered using the FIBOS ROCKS blockchain browser:<a href="http://explorer.fibos.rocks">http://explorer.fibos.rocks</a></p>
                            <p><img src="/media/201809/5b9a4b4537f1432349eb899f/1.jpg" alt="1.jpg" title="1.jpg" /></p>
                            <p>3. The wallet will automatically generate a private key.<font color="red"> Please be sure that this private key is backed up. (FO Wallet will not save your private key for you, and it is not recoverable if lost.)
</font></p>
                            <p><img src="/media/201809/5b91f52ec1853834c1d5e26c/001.png" alt="001.png" title="001.png" /></p>
                            <p>4. If you already have an FO account, you can choose to import it. To do so, the private key is required and you will also need to set up a password while importing.
</p>
                            <p><img src="/media/201809/5b8b5058aba908441dbbfc7a/WechatIMG124.jpeg" alt="WechatIMG124.jpeg" title="WechatIMG124.jpeg" /></p>
                            <h1 id="-eos-eos-fibos-eos-">2. How to cross-chain transfer EOS from the EOS main net to the EOS account on FIBOS.</h1>
                            <p>You can transfer specific amounts EOS to FIBOS from another wallet.<br />
                                Please take note that this is a cross-chain transfer operation:<br />
                                1.The receiving account will be
                                <font color="red" >
                                    <strong> the FIBOS official account: fiboscouncil</strong>
                                </font>
                                <br />
                                2.<font color="red">The memo note must be your FIBOS account name</font> that you have already registered.</p>
                            <p><font color="red">Important Notes: To prevent cross-chain transfer failures.<br />
                                1.Please do not transfer from exchanges directly. (Using the EOS wallet is recommended). If you are transferring from an exchange and filled in the wrong memo, your assets will return to the exchange, and please contact the exchange!<br />
                                2.Please be sure that your memo is filled in correctly. (The memo message must be the FIBOS account you have already registered)<br />
                                &ensp;&ensp;a）If the memo you filled in is an account that does not exist, the system will return the assets back to the original withdrawal account.<br />
                                &ensp;&ensp;b）1.	If the memo you filled in is accidentally of someone else’s account, the assets will be lost permanently.</font></p>
                            <p>Here is an example, using TokenPocket: </p>
                            <p><img src="/media/201809/5b8b509aaba908441dbbfc7b/WechatIMG117.jpeg" alt="WechatIMG117.jpeg" title="WechatIMG117.jpeg" /></p>
                            <h1 id="-eos-fo">3.	Exchanging EOS to FO in the FO Wallet</h1>
                            <p>1. Open the wallet home page and check if the cross-chain transfer of EOS has arrived.</p>
                            <p><img src="/media/201809/5b91f5c3c1853834c1d5e26d/002.jpg" alt="002.jpg" title="002.jpg" /></p>
                            <p>2. Click on EOS and fill in the amount of EOS that you want to exchange for FO. Click the Exchange button on the bottom to exchange EOS for FO.</p>
                            <p><img src="/media/201809/5b8b50c8aba908441dbbfc7d/WechatIMG119.jpeg" alt="WechatIMG119.jpeg" title="WechatIMG119.jpeg" /></p>
                            <p>3.After operating the EOS to FO exchange, go back to the Home page, and check if the amount of FO in the account has increased successfully.</p>
                            <p><img src="/media/201809/5b91f5fac1853834c1d5e26e/003.png" alt="003.png" title="003.png" /></p>
                            <h1 id="-fo-eos">4. How to Exchange FO to EOS</h1>
                            <p>Select FO in the Home page, and click on the Exchange button on the bottom to exchange for EOS.</p>
                            <p><img src="/media/201809/5b8b50f0aba908441dbbfc7f/WechatIMG121.jpeg" alt="WechatIMG121.jpeg" title="WechatIMG121.jpeg" /></p>
                            <h1 id="-fibos-eos-eos-">5. How to cross-chain transfer EOS on FIBOS out to EOS main net accounts.</h1>
                            <p>1. Select EOS token in the Home page and click the Withdrawal button.</p>
                            <p><img src="/media/201809/5b91f7d9c1853834c1d5e270/004.png" alt="004.png" title="004.png" /></p>
                            <p>2. While cross chain transferring, <font color="red">the default account name that does not need to be changed is the FIBOS official account: fiboscouncil. You only need to fill in the amount you want to withdraw, and the receiving EOS main net account.</font></p><font color="red">
                            </font>
                            <p><font color="red">Important Notes: In case of cross-chain transfer failure, be sure the EOS account is correct.<br />
                                &ensp;&ensp;a.If the EOS account you filled in does not exist, the system will return the assets back to your original sending account.<br />
                                &ensp;&ensp;b.If the EOS account you filled in with is accidentally someone else’s account, the assets will be lost permanently.</font>  </p>
                            <p>3. Please check if the tokens have arrived in the corresponding receiving account.</p>
                            <p><img src="/media/201809/5b91f80ec1853834c1d5e271/005.png" alt="005.png" title="005.png" /></p>
                            <h1 id="-q-a">6.Q &amp; A</h1>
                            <h4 id="1-fibos-">1. While creating a FIBOS account, it shows Network Request Failed?</h4>
                            <p>There are 2 possibilities that may cause the failure of network requests: either the account name is already taken or there are issues with the network.<br />
                                &ensp;&ensp;a.Account name is already taken: Retry with a different account name; You can check if the name is available using the FIBOS ROCKS blockchain browser: <a href="http://explorer.fibos.rocks">http://explorer.fibos.rocks</a><br />
                                &ensp;&ensp;b.Network Issue: Disconnect from WiFi and use cellular data to try again. If that doesn’t work either, retry after turning on and off Airplane Mode, or with Airplane Mode on while connected to WiFi.</p>
                            <h4 id="2-eos-fibos-">2. Transfer failed while transferring EOS to FIBOS?</h4>
                            <p>There are several situations that may cause the failure of EOS transfers: Insufficient RAM, Insufficient CPU resource, wrong FIBOS account in memo or assertion failure.<br />
                                &ensp;&ensp;a.Insufficient RAM: Buy RAM in wallet resource management DAPP.<br />
                                &ensp;&ensp;b.Insufficient CPU: Mortgage EOS in in of wallet resource management DAPP.<br />
                                &ensp;&ensp;c.Wrong FIBOS account in memo: system will return the tokens automatically if the memo account does not exist. Please check again if the account is registered using the browser:<a href="http://explorer.fibos.rocks">http://explorer.fibos.rocks</a> and retry FIBOS registration steps.<br />
                                &ensp;&ensp;d.Assertion failure: assertion failure is a result given by the EOS main net. It may be caused by multiple different reasons, please try your transfer again.</p>
                            <h4 id="3-fibos-fo-">3. FO Exchange failed on FIBOS network?</h4>
                            <p>Please check the contents below:<br />
                                &ensp;&ensp;a.Is the FIBOS account correct?<br />
                                &ensp;&ensp;b.Is the FIBOS private key entered correct?<br />
                                &ensp;&ensp;c.Is the exchange amount greater than what is currently available in FIBOS?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default layout(foexchange);