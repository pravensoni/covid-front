import React, { Component } from 'react';
import '../css/form.css';


class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '',password:'',cpassword:'',terms:false,error:false,msg:false};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;


    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {

    //Validations
    if(this.state.username.length==0){
      this.setState({error:"Please enter your Email"});
      return;
    } else if(this.state.password.length==0){
      this.setState({error:"Please enter your password"});
      return;
    }else if(this.state.password != this.state.cpassword ){
      this.setState({error:"Password and confirmed password doesn't match"});
      return;
    }else if(!this.state.terms){
      this.setState({error:"Please check the box to agree to the terms and conditions"});
      return;
    }

    //calling register API
    const api_url = process.env.REACT_APP_API;
    fetch(api_url+"/register", {
          method : 'POST',
          headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 'username': this.state.username,'password':this.state.password }),

      },).then(res => res.json())
      .then((data) => {
        //alert(data);
        if(data.isSuccess){
          this.setState({error:false});
          this.setState({msg:true});
          this.setState({username:''});
          this.setState({password:''});
          this.setState({cpassword:''});
        }else{
          this.setState({error:data.msg});
        }
      });
  }

  render() {
    return (

    <div class="splash-container">
        <div class="card">
            <div class="card-header">
                <h3 class="mb-1">Registration Form</h3>
                <p>Please enter your information.</p>
            </div>
            <div class="card-body">
            {this.state.msg && <><medium style={{ color: 'green' }}>You have successfully registered. Please <a href="/" class="text-secondary">Login Here.</a></medium><br /></>}
                <div class="form-group">
                    <input class="form-control form-control-lg" type="email" value={this.state.username} onChange={this.handleChange} name="username" required="" placeholder="E-mail" autocomplete="off"/>
                </div>
                <div class="form-group">
                    <input class="form-control form-control-lg" id="pass1" type="password" value={this.state.password} onChange={this.handleChange} name="password" required="" placeholder="Password"/>
                </div>
                <div class="form-group">
                    <input class="form-control form-control-lg" id="pass2" type="password" value={this.state.cpassword} onChange={this.handleChange} name="cpassword" required="" placeholder="Confirm Password"/>
                </div>
                {this.state.error && <><medium style={{ color: 'red' }}>{this.state.error}</medium><br /></>}
                <div class="form-group pt-2">
                    <button class="btn btn-block btn-primary" onClick={this.handleSubmit}>Register My Account</button>
                </div>
                <div class="form-group">
                    <label class="custom-control custom-checkbox">
                        <input class="custom-control-input" type="checkbox" value={this.state.terms} onChange={this.handleChange} name="terms" /><span class="custom-control-label">By creating an account, you agree to the <a href="#">terms and conditions</a></span>
                    </label>
                </div>

            </div>
            <div class="card-footer bg-white">
                <p>Already member? <a href="/" class="text-secondary">Login Here.</a></p>
            </div>
        </div>
    </div>

  );
}
}

export default RegistrationForm;
