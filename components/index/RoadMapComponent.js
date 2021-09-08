export default ({ language }) => (
    <div>
        <a name="roadmap" style={{ height: 0 }} />
        <div className="index-roadmap">
            <div className="roadmap-wrap">
                <div className="top">
                    <div className="roadmap-title" id="Roadmap">
                        {language.Roadmap}
                    </div>
                </div>
                <div className="roadmap-bottom">
                    <div className="roadmap-process row row1">
                        {/*<div className="col-sm-12 col-xs-12 col-md-1 nopadding mileStones"></div>*/}
                        <div className="col-sm-12 col-xs-12 col-md-2 nopadding mileStones">
                            <div className="process-date  animate a-delay2">{language.Date1}</div>
                            <div className="process-line">
                                <img src="../imgs/icon-light.png" />
                            </div>
                            <div className="process-underline phone-display  animate a-delay2 " />
                            <div className="process-disc  animate a-delay2 " id="Date1_disc">
                                {language.Date1_disc}
                            </div>
                        </div>
                        <div className="col-sm-12 col-xs-12 col-md-2 nopadding mileStones">
                            <div className="process-date  animate a-delay7 " id="Date2">
                                {language.Date2}
                            </div>
                            <div className="process-line">
                                <img src="../imgs/icon-light.png" />
                            </div>
                            <div className="process-underline  animate a-delay7 " />
                            <div className="process-disc  animate a-delay7 " id="Date2_disc">
                                {language.Date2_disc}
                            </div>
                        </div>
                        <div className="col-sm-12 col-xs-12 col-md-2 nopadding mileStones">
                            <div className="process-date  animate a-delay12 " id="Date3">
                                {language.Date3}
                            </div>
                            <div className="process-line">
                                <img src="../imgs/icon-light.png" />
                            </div>
                            <div className="process-underline animate a-delay12 " />
                            <div className="process-disc animate a-delay12 " id="Date3_disc">
                                {language.Date3_disc}
                            </div>
                        </div>
                        <div className="col-sm-12 col-xs-12 col-md-2 nopadding mileStones">
                            <div className="process-date animate a-delay17 " id="Date4">
                                {language.Date4}
                            </div>
                            <div className="process-line">
                                <img src="../imgs/icon-light.png" />
                            </div>
                            <div className="process-underline animate a-delay17 " />
                            <div className="process-disc animate a-delay17 " id="Date4_disc">
                                {language.Date4_disc}
                            </div>
                        </div>
                        <div className="col-sm-12 col-xs-12 col-md-2 nopadding mileStones">
                            <div className="process-date animate a-delay22 " id="Date5">
                                {language.Date5}
                            </div>
                            <div className="process-line">
                                <img src="../imgs/icon-light.png" />
                            </div>
                            <div className="process-underline animate a-delay22 " />
                            <div className="process-disc animate a-delay22 " id="Date5_disc">
                                {language.Date5_disc}
                            </div>
                        </div>
                        {/*<div className="col-sm-12 col-xs-12 col-md-2 nopadding mileStones">
                            <div className="process-date animate a-delay52 " id="waiting">
                                {language.Waiting}
                            </div>
                            <div className="process-line blank">
                                <img src="../imgs/icon-light.png" />
                            </div>
                            <div className="process-underline animate a-delay52 " />
                            <div className="process-disc animate a-delay52 wait" id="waiting_disc">
                                {language.Waiting_disc}
                            </div>
                        </div>*/}
                    </div>
                </div>
            </div>
        </div>
    </div>
)
