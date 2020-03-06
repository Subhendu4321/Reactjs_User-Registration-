import React,{Component} from 'react';
import './Login.css';
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
  }

});

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
      const { classes } = this.props;
      console.log(this.state.password)
      return(
        <Card className="Login">
          <CardHeader className="header" title="Login Page" titleTypographyProps="Login Page">
            
          </CardHeader>
        
          <CardContent className="cardContent">
            <TextField id="user_id" label="User Id" variant="outlined" color="primary" className="userid" style={{padding:9}} value = {this.state.userName} onChange={this.handleUserName}/>
            <TextField type="password" id="password" label="Password" variant="outlined" color="primary" className="password"style={{padding:9}} value = {this.state.password} onChange={this.handlePassword}/>
            {/* <label>User id</label>
              <input type="text" placeholder="Enter Email Id"
              value = {this.state.userName}
              onChange={this.handleUserName}></input><br /> */}
              {/* <label>Password</label>
              <input type="password" placeholder="Enter Password"
              value = {this.state.password}
              onChange={this.handlePassword}></input><br /> */}
              <div className="buttonClass">
                <Button variant="contained" color="primary" className={classes.button} type="submit" onClick={this.verifyUser } style={{padding:9}}>Login</Button>
                <Button variant="contained" color="primary" className={classes.button} type="submit" onClick={this.doRegister} style={{padding:9}}>Register</Button>
              </div>
              
              {/* <RoutingExample /> */}
          </CardContent>
  
        </Card>
      )
    }
  
  }
  
  export default withStyles(styles)(withRouter(Login));