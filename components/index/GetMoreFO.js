export default ({ language }) => (
  <div>
    <a name="getMoreFO" style={{ height: 0 }} />
    <div className="getmorefo_conntainer">
      <div className="getmorefo_wrapper">
        <div className="getmorefo_title" id="Partners">
          {language.getMoreFO}
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12 getmorefo_item_wrapper">
            <div className="getmorefo_item">
              <div className="getmorefo_item_picwrapper">
                <img src="../imgs/more_fo_1.png" className="getmorefo_pic" />
              </div>
              <div className="getmorefo_item_textwrapper">
                <div className="getmorefo_item_label">
                  <a
                    href="https://www.aex.plus/page/trade.html?mk_type=BTC&trade_coin_name=FO"
                    target="_blank">
                    {language.more_fo_1}
                  </a>
                </div>
                <div className="getmorefo_item_label">
                  <a
                    href="https://www.aex.plus/page/trade.html?mk_type=CNC&trade_coin_name=FO"
                    target="_blank">
                    {language.more_fo_2}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12 getmorefo_item_wrapper">
            <a
              className="getmorefo_item"
              href="https://newdex.io/trade/eosio-fo-eos"
              target="_blank">
              <div className="getmorefo_item_picwrapper">
                <img src="../imgs/more_fo_3.png" className="getmorefo_pic" />
              </div>
              <div className="getmorefo_item_label">{language.more_fo_3}</div>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12 getmorefo_item_wrapper">
            <a
              className="getmorefo_item"
              href="https://bitrabbit.io/markets/fo_eth"
              target="_blank">
              <div className="getmorefo_item_picwrapper">
                <img src="../imgs/more_fo_4.png" className="getmorefo_pic" />
              </div>
              <div className="getmorefo_item_label">{language.more_fo_4}</div>
            </a>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12 getmorefo_item_wrapper">
            <a
              className="getmorefo_item"
              href="https://www.cointiger.one/zh-cn/#/trade_center?coin=fo_usdt"
              target="_blank">
              <div className="getmorefo_item_picwrapper">
                <img src="../imgs/more_fo_5.png" className="getmorefo_pic" />
              </div>
              <div className="getmorefo_item_label">{language.more_fo_5}</div>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12 getmorefo_item_wrapper">
            <a className="getmorefo_item" href="https://www.zg.com/trade/fo_usdt" target="_blank">
              <div className="getmorefo_item_picwrapper">
                <img src="../imgs/more_fo_6.png" className="getmorefo_pic" />
              </div>
              <div className="getmorefo_item_label">{language.more_fo_6}</div>
            </a>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12 getmorefo_item_wrapper">
            <a
              className="getmorefo_item"
              href="https://www.lbkex.co/exchange.html?asset=fo&post=usdt"
              target="_blank">
              <div className="getmorefo_item_picwrapper">
                <img src="../imgs/more_fo_7.png" className="getmorefo_pic" />
              </div>
              <div className="getmorefo_item_label">{language.more_fo_7}</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)
// AEX的链接：https://www.bit.cc/page/trade.html?mk_type=BTC&trade_coin_name=FO
// TOK的链接：https://www.tok.com/tradingCenter
