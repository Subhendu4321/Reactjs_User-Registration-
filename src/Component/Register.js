import React, { Component } from 'react';
import './Register.css';
import { Link,withRouter } from 'react-router-dom';

class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
        this.doRegister = this.doRegister.bind(this);
        this.doBack = this.doBack.bind(this);
    }

    handleFirstName(e){
        this.setState({
            firstName:e.target.value
        })

    }
    handleLastName(e){
        this.setState({
            lastName:e.target.value
        })

    }
    handleEmail(e){
        this.setState({
            email:e.target.value
        })

    }
    handlePassword(e){
        this.setState({
            password:e.target.value
        })

    }
    handleConfirmPassword(e){
        this.setState({
            confirmPassword:e.target.value
        })

        
    }

    doRegister(e){
        if(this.state.password !== this.state.confirmPassword){
            alert("Please enter correct password");
        }
        else{
            alert("Registration Successful");
            localStorage.setItem("firstName",this.state.firstName);
            localStorage.setItem("lastName",this.state.lastName);
            localStorage.setItem("email",this.state.email);
            localStorage.setItem("password",this.state.password);
            this.props.history.push("./userinfo")
        }
    }

    doBack(){
        this.props.history.push("./login")
    }

    render(){
        
        return(
            <div className="Register">
                <div className="Header">
                    <h4>Register Form</h4>
                </div>
                <label>First Name</label>
                <input type="text" placeholder="First Name"
                value={this.state.firstName}
                onChange={this.handleFirstName}></input><br />

                <label>Last Name</label>
                <input type="text" placeholder="Last Name"
                value={this.state.lastName}
                onChange={this.handleLastName}></input><br/>

                <label>Phone Number</label>
                <input type="number" placeholder="Last Name"
                value={this.state.lastName}
                onChange={this.handleLastName}></input><br/>

                <label>Email Id</label>
                <input type="text" placeholder="Enter Email"
                value={this.state.email}
                onChange={this.handleEmail}></input><br/>

                <label>Pasword</label>
                <input type="password"
                value={this.state.password}
                onChange={this.handlePassword}></input><br/>

                <label>Confirm Pasword</label>
                <input type="password"
                value={this.state.confirmPassword}
                onChange={this.handleConfirmPassword}></input><br/>
    
                <button type="submit" className="button-1" onClick={this.doRegister}>Register</button>
                <button type="submit" className="button-2" onClick={this.doBack}>Back</button>
    
            </div>
        )
    }
}

export default withRouter(Register);