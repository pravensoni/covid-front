import React, { Component } from 'react';
import '../css/form.css';
import { setUserSession } from '../utils/Common';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '',password:'',error:false};

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

  }



  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;


    this.setState({
      [name]: value
    });
  }

  handleLogin(event) {

    //Validations
    if(this.state.username.length==0){
      this.state.error = "Please enter your username";
      this.handleChange(event);
      return;
    } else if(this.state.password.length==0){
      this.state.error = "Please enter your password";
      this.handleChange(event);
      return;
    }




    //calling login API
    const api_url = process.env.REACT_APP_API;
    fetch(api_url+"/login", {
          method : 'POST',
          headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 'username': this.state.username,'password':this.state.password }),


      },).then(res => res.json())
      .then((data) => {
        //alert(data);
        if(data.isValid){
          setUserSession(data.token,data.msg);
          console.log(data);
          this.props.history.push('/dashboard');
        }else{
          this.setState({error:data.msg});
        }

      });


  }

  render() {
    return (
      <div class="splash-container">
          <div class="card ">
              <div class="card-header text-center"><a href="../index.html"></a><span class="splash-description">Please enter your information.</span></div>
              <div class="card-body">
                  <form>
                      <div class="form-group">
                          <input class="form-control form-control-lg" value={this.state.username} onChange={this.handleChange} name="username" id="username" type="text" placeholder="Email" />
                      </div>
                      <div class="form-group">
                          <input class="form-control form-control-lg" value={this.state.password} onChange={this.handleChange} name="password" id="password" type="password" placeholder="Password"/>
                      </div>
                      <div class="form-group">
                          <label class="custom-control custom-checkbox">
                              <input class="custom-control-input" type="checkbox"/><span class="custom-control-label">Remember Me</span>
                          </label>
                      </div>
                      {this.state.error && <><medium style={{ color: 'red' }}>{this.state.error}</medium><br /></>}
                      <button type="button" class="btn btn-primary btn-lg btn-block" onClick={this.handleLogin}>Sign in</button>
                  </form>
              </div>
              <div class="card-footer bg-white p-0  ">
                  <div class="card-footer-item card-footer-item-bordered">
                      <a href="/register" class="footer-link">Create An Account</a></div>
                  <div class="card-footer-item card-footer-item-bordered">
                      <a href="#" class="footer-link">Forgot Password</a>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default LoginForm;
