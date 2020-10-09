import React from 'react';
//import logo from './logo.svg';
//import '../css/form.css';

function Dashboard() {
  return (

    <div className="dashboard-main-wrapper">
          {/* ============================================================== */}
          {/* navbar */}
          {/* ============================================================== */}
          <div className="dashboard-header">
            <nav className="navbar navbar-expand-lg bg-white fixed-top">
              <a className="navbar-brand" href="index.html">Covid-19 Dashboard</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <div className="navbar-nav ml-auto navbar-right-top">
                  <button className="btn btn-md btn-danger" style={{marginRight: '20px'}}>Logout</button>
                </div>
              </div>
            </nav>
          </div>
          {/* ============================================================== */}
          {/* end navbar */}
          {/* ============================================================== */}

          {/* ============================================================== */}
          {/* wrapper  */}
          {/* ============================================================== */}
          <div className="dashboard-wrapper">
            <div className="dashboard-ecommerce">
              <div className="container-fluid dashboard-content ">
                {/* ============================================================== */}
                {/* pageheader  */}
                {/* ============================================================== */}
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="page-header">
                      <h2 className="pageheader-title">Overall Summary</h2>


                    </div>
                  </div>
                </div>
                {/* ============================================================== */}
                {/* end pageheader  */}
                {/* ============================================================== */}
                <div className="ecommerce-widget">

                  <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="card border-3 border-top border-top-primary">
                        <div className="card-body">
                          <h5 className="text-muted">Confirmed</h5>
                          <div className="metric-value d-inline-block">
                            <h1 className="mb-1">12099</h1>
                          </div>
                          <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                            <span className="text-success bg-success-light"></span><span className="ml-1">+5.86%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="card border-3 border-top border-top-primary">
                        <div className="card-body">
                          <h5 className="text-muted">Active</h5>
                          <div className="metric-value d-inline-block">
                            <h1 className="mb-1">1245</h1>
                          </div>
                          <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                            <span className="text-success bg-success-light"></span><span className="ml-1">+10%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="card border-3 border-top border-top-primary">
                        <div className="card-body">
                          <h5 className="text-muted">Recovered</h5>
                          <div className="metric-value d-inline-block">
                            <h1 className="mb-1">13000</h1>
                          </div>
                          <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                            <span className="text-success bg-success-light"><i className="fa fa-fw fa-arrow-up" /></span><span className="ml-1">+5%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="card border-3 border-top border-top-primary">
                        <div className="card-body">
                          <h5 className="text-muted">Deceased</h5>
                          <div className="metric-value d-inline-block">
                            <h1 className="mb-1">1340</h1>
                          </div>
                          <div className="metric-label d-inline-block float-right text-danger font-weight-bold">
                            <span className="text-danger bg-danger-light bg-danger-light "><i className="fa fa-fw fa-arrow-down" /></span><span className="ml-1">-4%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    {/* ============================================================== */}
                    {/* ============================================================== */}
                    {/* recent orders  */}
                    {/* ============================================================== */}
                    <div className="col-xl-9 col-lg-12 col-md-6 col-sm-12 col-12">
                      <div className="card">
                        <h5 className="card-header">Statewise Summary</h5>
                        <div className="card-body p-0">
                          <div className="table-responsive">
                            <table className="table">
                              <thead className="bg-light">
                                <tr className="border-0">
                                  <th className="border-0">#</th>
                                  <th className="border-0">State</th>
                                  <th className="border-0">Confirmed</th>
                                  <th className="border-0">Active</th>
                                  <th className="border-0">Recovered</th>
                                  <th className="border-0">Deceased</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>Product #1 </td>
                                  <td>id000001 </td>
                                  <td>20</td>
                                  <td>$80.00</td>
                                  <td>27-08-2018 01:22:12</td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>Product #1 </td>
                                  <td>id000001 </td>
                                  <td>20</td>
                                  <td>$80.00</td>
                                  <td>27-08-2018 01:22:12</td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>Product #1 </td>
                                  <td>id000001 </td>
                                  <td>20</td>
                                  <td>$80.00</td>
                                  <td>27-08-2018 01:22:12</td>
                                </tr>

                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ============================================================== */}
                    {/* end recent orders  */}
                    {/* ============================================================== */}
                    {/* ============================================================== */}
                    {/* customer acquistion  */}
                    {/* ============================================================== */}
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="card">
                        <h5 className="card-header">Graphs</h5>
                        <div className="card-body">
                          <div className="ct-chart ct-golden-section" style={{height: '354px'}} />
                          <div className="text-center">
                            <span className="legend-item mr-2">
                              <span className="fa-xs text-primary mr-1 legend-tile"><i className="fa fa-fw fa-square-full" /></span>
                              <span className="legend-text">Returning</span>
                            </span>
                            <span className="legend-item mr-2">
                              <span className="fa-xs text-secondary mr-1 legend-tile"><i className="fa fa-fw fa-square-full" /></span>
                              <span className="legend-text">First Time</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ============================================================== */}
                    {/* end customer acquistion  */}
                    {/* ============================================================== */}
                  </div>

                </div>
              </div>
            </div>
            {/* ============================================================== */}
            {/* footer */}
            {/* ============================================================== */}
            <div className="footer">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    Copyright © 2018 Concept. All rights reserved. Dashboard by <a href="https://colorlib.com/wp/">Colorlib</a>.
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="text-md-right footer-links d-none d-sm-block">
                      <a href="javascript: void(0);">About</a>
                      <a href="javascript: void(0);">Support</a>
                      <a href="javascript: void(0);">Contact Us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ============================================================== */}
            {/* end footer */}
            {/* ============================================================== */}
          </div>
          {/* ============================================================== */}
          {/* end wrapper  */}
          {/* ============================================================== */}
        </div>


  );
}

export default Dashboard;
