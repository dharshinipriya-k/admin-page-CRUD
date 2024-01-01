import React from 'react'

function Card({data}) {
  return <>
  {
    data.isProgress?<>
    <div className="col-xl-3 col-md-6 mb-4">
                <div className={`card border-left-${data.color} shadow h-100 py-2"`}>
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className={`text-xs font-weight-bold text-${data.color} text-uppercase mb-1`}>
                          {data.title}
                        </div>
                        <div className="row no-gutters align-items-center">
                          <div className="col-auto">
                            <div className="h5 mb-0 mr-3 ml-2 font-weight-bold text-gray-800">
                              {data.content}%
                            </div>
                          </div>
                          <div className="col">
                            <div className="progress progress-sm mr-2">
                              <div
                                className={`progress-bar bg-${data.color}`}
                                role="progressbar"
                                style={{
                                  width: `${data.content}%`,
                                  ariaValueNow: `${data.content}`,
                                  ariaValueMin: "0",
                                  ariaValueMax: "100",
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    </>:<>
    <div className="col-xl-3 col-md-6 mb-4">
                <div className={`card border-left-${data.color} shadow h-100 py-2`}>
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className={`text-xs font-weight-bold text-${data.color} text-uppercase mb-1`}>
                          {data.title}
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                        {data.content}
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className={`fas ${data.icon} fa-2x text-gray-300`}></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    </>
  }
  </>
}

export default Card