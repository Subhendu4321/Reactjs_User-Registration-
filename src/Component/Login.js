import React,{Component} from 'react';
import './Login.css';
import { Link,withRouter } from 'react-router-dom';

class Login extends Component{
    constructor(props){
      super(props);
      this.state={
          userName:'',
          password:''
      }
      this.verifyUser = this.verifyUser.bind(this);
      this.handleUserName = this.handleUserName.bind(this);
      this.handlePassword = this.handlePassword.bind(this);
      this.doRegister = this.doRegister.bind(this);
    }
  
    handleUserName(e){
      this.setState({
          userName:e.target.value
      })
    }
  
    handlePassword(e){
      this.setState({
        
          password:e.target.value
       
      })
    }
  
    verifyUser(e){
      const {userName,password} = this.state;
      // const _userName="subhendu"
      // const _password="1234"
      //const newItem = this.state.currentItem;
      
      if(localStorage.getItem("email") === userName && localStorage.getItem("password") === password){
        alert("Login Successful")
        this.props.history.push('/userinfo')
        
      }
  
    }
    doRegister(){
      this.props.history.push("./register")
    }
    render(){
      console.log(this.props)
      console.log(this.state.password)
      return(
        <div className="Login">
          <div className="header">
            <h4>Login Page</h4>
          </div>
        
            <label>User id</label>
            <input type="text" placeholder="Enter Email Id"
            value = {this.state.userName}
            onChange={this.handleUserName}></input><br />
            <label>Password</label>
            <input type="password" placeholder="Enter Password"
            value = {this.state.password}
            onChange={this.handlePassword}></input><br />
            <button className="button-1" type="submit" onClick={this.verifyUser}>Login</button>
            <button className="button-2" type="submit" onClick={this.doRegister}>Register</button>
            
            {/* <RoutingExample /> */}
  
        </div>
      )
    }
  
  }
  
  export default withRouter(Login);