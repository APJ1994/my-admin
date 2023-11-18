import React from 'react'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Navbar from './Navbar'


export const Dashboard = () => {
  
  return (
    
 <React.Fragment>
 <div>
  <Sidebar/>
  <div className="wrapper d-flex flex-column min-vh-100 bg-light">
    <Navbar/>
    <div className="body flex-grow-1 px-3">
      <div className="container-lg">
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="card mb-4 text-white bg-primary">
              <div className="card-body pb-0 d-flex justify-content-between align-items-start">
                <div>
                  <div className="fs-4 fw-semibold">
                    26K{" "}
                    <span className="fs-6 fw-normal">
                      (-12.4%
                      <svg className="icon">
                        <use xlinkHref="../vendors/@coreui/icons/svg/free.svg#cil-arrow-bottom" />
                      </svg>
                      )
                    </span>
                  </div>

                  <div>Users</div>
                </div>

                <div className="dropdown">
                  <button
                    aria-expanded="false"
                    aria-haspopup="true"
                    className="btn btn-transparent text-white p-0"
                    data-coreui-toggle="dropdown"
                    type="button">
                    <svg className="icon">
                      <use xlinkHref="./vendors/@coreui/icons/svg/free.svg#cil-options" />
                    </svg>
                  </button>

                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="c-chart-wrapper mt-3 mx-3"
                style={{
                  height: "70px",
                }}>
                <canvas className="chart" height="70" id="card-chart1" />
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="card mb-4 text-white bg-info">
              <div className="card-body pb-0 d-flex justify-content-between align-items-start">
                <div>
                  <div className="fs-4 fw-semibold">
                    $6.200{" "}
                    <span className="fs-6 fw-normal">
                      (40.9%
                      <svg className="icon">
                        <use xlinkHref=".../vendors/@coreui/icons/svg/free.svg#cil-arrow-top" />
                      </svg>
                      )
                    </span>
                  </div>

                  <div>Income</div>
                </div>

                <div className="dropdown">
                  <button
                    aria-expanded="false"
                    aria-haspopup="true"
                    className="btn btn-transparent text-white p-0"
                    data-coreui-toggle="dropdown"
                    type="button">
                    <svg className="icon">
                      <use xlinkHref="../vendors/@coreui/icons/svg/free.svg#cil-options" />
                    </svg>
                  </button>

                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="c-chart-wrapper mt-3 mx-3"
                style={{
                  height: "70px",
                }}>
                <canvas className="chart" height="70" id="card-chart2" />
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="card mb-4 text-white bg-warning">
              <div className="card-body pb-0 d-flex justify-content-between align-items-start">
                <div>
                  <div className="fs-4 fw-semibold">
                    2.49%{" "}
                    <span className="fs-6 fw-normal">
                      (84.7%
                      <svg className="icon">
                        <use xlinkHref="../vendors/@coreui/icons/svg/free.svg#cil-arrow-top" />
                      </svg>
                      )
                    </span>
                  </div>

                  <div>Conversion Rate</div>
                </div>

                <div className="dropdown">
                  <button
                    aria-expanded="false"
                    aria-haspopup="true"
                    className="btn btn-transparent text-white p-0"
                    data-coreui-toggle="dropdown"
                    type="button">
                    <svg className="icon">
                      <use xlinkHref="../vendors/@coreui/icons/svg/free.svg#cil-options" />
                    </svg>
                  </button>

                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="c-chart-wrapper mt-3"
                style={{
                  height: "70px",
                }}>
                <canvas className="chart" height="70" id="card-chart3" />
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="card mb-4 text-white bg-danger">
              <div className="card-body pb-0 d-flex justify-content-between align-items-start">
                <div>
                  <div className="fs-4 fw-semibold">
                    44K{" "}
                    <span className="fs-6 fw-normal">
                      (-23.6%
                      <svg className="icon">
                        <use xlinkHref="../vendors/@coreui/icons/svg/free.svg#cil-arrow-bottom" />
                      </svg>
                      )
                    </span>
                  </div>

                  <div>Sessions</div>
                </div>

                <div className="dropdown">
                  <button
                    aria-expanded="false"
                    aria-haspopup="true"
                    className="btn btn-transparent text-white p-0"
                    data-coreui-toggle="dropdown"
                    type="button">
                    <svg className="icon">
                      <use xlinkHref="../vendors/@coreui/icons/svg/free.svg#cil-options" />
                    </svg>
                  </button>

                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="c-chart-wrapper mt-3 mx-3"
                style={{
                  height: "70px",
                }}>
                <canvas className="chart" height="70" id="card-chart4" />
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </div>

   <Footer/>
  </div>
</div>;

  
   </React.Fragment>
  )
}

 
 