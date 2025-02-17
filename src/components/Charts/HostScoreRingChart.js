import React from "react";
import {Progress} from 'antd';
import themeStyle from "utils/themeStyle.js";
import {t} from "utils/text.js";


export default function HostScoreRingChart({color, data}) {
    const scoreConfig = {
        1: {
            color: "#C33730",
            icon: "bad-icon",
            text: "poor",
          },
        2: {
            color: "#F99600",
            icon: "general-icon",
            text: "general",
        },
        3: {
            color: "#2EBBB9",
            icon: "good-icon",
            text: "good",
        },
        4: {
            color: "#06A561",
            icon: "excellent-icon",
            text: "excellent",
        },
      };
      const level = data.level || 1;
      const scoreLevelObj = scoreConfig[level] 
    return (
        <>
            <div className='h-full'>
                <div className="rounded-t mb-0 py-3 bg-transparent">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full max-w-full flex-grow flex-1">
                            <h6 className={"uppercase mb-1 text-xs font-semibold " + themeStyle.title[color]}>
                                {t('host_score')}
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="py-4 flex-auto">
                    <div className="relative flex flex-col justify-between items-center h-300-px">
                        <div className='mt-4'>
                        { (
                            data.level && scoreLevelObj?
                            <Progress
                            strokeColor={scoreLevelObj.color}
                            type="circle"
                            percent={100}
                            format={() => (
                                <div className="flex flex-col items-center">
                                  <img
                                    src={
                                      require(`../../assets/img/${scoreLevelObj["icon"]}.png`)
                                        .default
                                    }
                                    alt=""
                                    style={{ width:'35px',height:'35px' }}
                                  />
                                  <div
                                    className="mt-10-px font-bold"
                                    style={{ color: scoreLevelObj.color,fontSize:'18px' }}
                                  >
                                    {t(scoreLevelObj["text"])}
                                  </div>
                                </div>
                              )}
                            />:''
                        ) }
                            
                        </div>
                        {/* Divider */}
                        <hr className="my-4 md:min-w-full"/>
                        <div className='w-full text-left'>
                            <div>
                                {t('last_updated')}
                            </div>
                            <div>
                                { data.lastUpdated ? new Date(data.lastUpdated).toLocaleString() : '--' }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
