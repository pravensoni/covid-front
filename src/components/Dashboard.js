import React, { Component } from 'react';
import '../css/form.css';
import { removeUserSession,getToken } from '../utils/Common';
import { withRouter } from "react-router-dom";
import DataChart from './DataChart';



class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {overallData:{},statewisedata:[],type:'confirmed'};
    this.props = props;
    this.handleChange = this.handleChange.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }


  componentDidMount() {

            const api_url = process.env.REACT_APP_API;
            const options = {
              method: 'GET',
                  headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  'Authorization': getToken(),
                  }
              }

            fetch(api_url+'/overalldata',options)
            .then(res => res.json())
            .then((data) => {
              this.setState({ overallData: data });
              console.log(data);
            })
            .catch(console.log);

            fetch(api_url+'/statewisedata',options)
            .then(res => res.json())
            .then((data) => {
              this.setState({ statewisedata : data });
              console.log(data);
            })
            .catch(console.log);
         }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;


    this.setState({
      [name]: value
    });
  }

  handleLogout(event) {
    removeUserSession();
    this.props.history.push('/dashboard');

  }

  render() {
    return (

    <div className="dashboard-main-wrapper">
          {/* ============================================================== */}
          {/* navbar */}
          {/* ============================================================== */}
          <div className="dashboard-header">
            <nav className="navbar navbar-expand-lg bg-white fixed-top">
              <a className="navbar-brand" href="/">Covid-19 Dashboard</a>
              <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <div className="navbar-nav ml-auto navbar-right-top">
                  <button className="btn btn-md btn-danger" style={{marginRight: '20px'}} onClick={this.handleLogout}>Logout</button>
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
                            <h1 className="mb-1">{this.state.overallData.confirmed}</h1>
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
                            <h1 className="mb-1">{this.state.overallData.active}</h1>
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
                            <h1 className="mb-1">{this.state.overallData.recovered}</h1>
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
                            <h1 className="mb-1">{this.state.overallData.deceased}</h1>
                          </div>
                          <div className="metric-label d-inline-block float-right text-danger font-weight-bold">
                            <span className="text-danger bg-danger-light bg-danger-light "><i className="fa fa-fw fa-arrow-down" /></span><span className="ml-1">-4%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">

                    <div className="col-xl-6 col-lg-12 col-md-6 col-sm-12 col-12">
                      <div className="card">
                        <h5 className="card-header">Statewise Summary</h5>
                        <div className="card-body p-0">
                          <div className="table-responsive">
                            <table className="table">
                              <thead className="bg-light">
                                <tr className="border-0">

                                  <th className="border-0">State</th>
                                  <th className="border-0">Confirmed</th>
                                  <th className="border-0">Active</th>
                                  <th className="border-0">Recovered</th>
                                  <th className="border-0">Deceased</th>
                                </tr>
                              </thead>
                              <tbody>

                                {this.state.statewisedata.map((data) => (
                                  <tr>

                                    <td>{data.state}</td>
                                    <td>{data.confirmed}</td>
                                    <td>{data.active}</td>
                                    <td>{data.recovered}</td>
                                    <td>{data.deceased}</td>
                                  </tr>
                                ))}

                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="card">
                        <h5 className="card-header">Pattern over time
                        <select className="float-right" value={this.state.type} onChange={this.handleChange} name="type">
                        <option value="confirmed">Confirmed</option>
                        <option value="active">Active</option>
                        <option value="recovered">Recovered</option>
                        <option value="deceased">Deceased</option>
                        </select></h5>
                        <div className="card-body">
                          { this.state.type=='confirmed' && <DataChart type={this.state.type}/>}
                          { this.state.type=='active' && <DataChart type={this.state.type}/>}
                          { this.state.type=='recovered' && <DataChart type={this.state.type}/>}
                          { this.state.type=='deceased' && <DataChart type={this.state.type}/>}
                        </div>
                      </div>


                    </div>

                  </div>
<center><button className="btn btn-md btn-danger d-block d-sm-none" style={{marginRight: '20px',float:'center'}} onClick={this.handleLogout}>Logout</button></center>
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
                    Copyright © 2020 . All rights reserved..
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
}

export default withRouter(Dashboard);
