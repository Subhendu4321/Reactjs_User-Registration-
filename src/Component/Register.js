import React, { Component } from 'react';
import './Register.css';
import { Link,withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
     margin:'10px'
    },
    Register:{
        backgroundColor: '#fff',
        minHeight: '381px',
        width: '400px',
        margin: '40px auto'
    }

  
  });

class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            confirmPassword:'',
            phoneNumber:''
        }
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
        this.doRegister = this.doRegister.bind(this);
        this.doBack = this.doBack.bind(this);
        this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
    }

    handlePhoneNumber(e){
        this.setState({
            phoneNumber:e.target.value
        })
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
            localStorage.setItem("phoneNumber",this.state.phoneNumber);
            this.props.history.push("./userinfo")
        }
    }

    doBack(){
        this.props.history.push("./login")
    }

    render(){
        const { classes } = this.props;
        return(
            <Card className={classes.Register}>
                <CardHeader className="header" title="Registration Page" titleTypographyProps="Registration Page">

                </CardHeader>

                <CardContent className="cardContent">
                    <TextField id="firstName" label="First Name" variant="outlined" color="primary" className="userid" style={{padding:9}}
                    value={this.state.firstName}
                    onChange={this.handleFirstName}/>
                    <TextField id="lastName" label="Last Name" variant="outlined" color="primary" className="password"style={{padding:9}}
                    value={this.state.lastName}
                    onChange={this.handleLastName}/>
                    <TextField id="phoneNum" label="Phone Number" variant="outlined" color="primary" className="password"style={{padding:9}}
                    value={this.state.phoneNumber}
                    onChange={this.handlePhoneNumber}/>
                    <TextField id="email_id" label="Email Id" variant="outlined" color="primary" className="userid" style={{padding:9}}
                    value={this.state.email}
                    onChange={this.handleEmail}/>
                    <TextField type="password" id="Password" label="Password" variant="outlined" color="primary" className="password"style={{padding:9}}
                    value={this.state.password}
                    onChange={this.handlePassword}/>
                    <TextField type="password" id="confirmPassword" label="Confirm Password" variant="outlined" color="primary" className="password"style={{padding:9}}
                    value={this.state.confirmPassword}
                    onChange={this.handleConfirmPassword}/>

                    <div className="buttonClass">
                        <Button variant="contained" color="primary" className={classes.button} type="submit" onClick={this.verifyUser } style={{padding:9}} onClick={this.doRegister}>Register</Button>
                        <Button variant="contained" color="primary" className={classes.button} type="submit" onClick={this.doRegister} style={{padding:9}} onClick={this.doBack}>Back</Button>
                    </div>


                    {/* <label>First Name</label>
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
                    onChange={this.handleConfirmPassword}></input><br/> */}
        
                    {/* <button type="submit" className="button-1" onClick={this.doRegister}>Register</button>
                    <button type="submit" className="button-2" onClick={this.doBack}>Back</button> */}
                </CardContent>
                
    
            </Card>
        )
    }
}

export default withStyles(styles)(withRouter(Register));