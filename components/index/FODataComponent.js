export default ({ data, language }) => (
    <div className="index-fodata">
        <div className="fodata-wrap">
            <div className="earthpic">
                <img src="../imgs/data-picture.png" />
                <div className="data1 dataposition">
                    <div className="left">
                        <img src="../imgs/icon-data1.png" />
                    </div>
                    <div className="right">
                        <div id="Block">{language.Block}</div>
                        <div className="number">{data.BlockNumber}</div>
                    </div>
                </div>
                <div className="data2 dataposition">
                    <div className="left">
                        <img src="../imgs/icon-data2.png" />
                    </div>
                    <div className="right">
                        <div id="Smarttoken">{language.Smarttoken}</div>
                        <div className="number">{data.smartTokens}</div>
                    </div>
                </div>
                <div className="data3 dataposition">
                    <div className="left">
                        <img src="../imgs/icon-data3.png" />
                    </div>
                    <div className="right">
                        <div id="Deals">{language.Deals}</div>
                        <div id="TransactionNumber" className="number">
                            {data.TransactionNumber}
                        </div>
                    </div>
                </div>
                <div className="data4 dataposition">
                    <div className="left">
                        <img src="../imgs/icon-data4.png" />
                    </div>
                    <div className="right">
                        <div id="Users">{language.Users}</div>
                        <div id="NumberOfUsers" className="number">
                            {data.NumberOfUsers}
                        </div>
                    </div>
                </div>
                {/*<div className="data5 dataposition">
                    <div className="left">
                        <img src="../imgs/icon-data5.png" />
                    </div>
                    <div className="right">
                        <div id="FoNum">{language.FoNum}</div>
                        <div className="number">{data.FOCirculation} &nbsp;FO</div>
                    </div>
                </div>*/}
                <div className="data5 dataposition">
                    <div className="left">
                        <img src="../imgs/icon-data6.png" />
                    </div>
                    <div className="right">
                        <div id="FoNum">{language.FOUSDTNum}</div>
                        <div className="number">{data.FODCirculation} &nbsp;FOUSDT</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
