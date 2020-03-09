import React,{Component} from 'react';
import './UserInfo.css'
import { Link,withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import FormDialog from '../Component/Dialog';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';


const styles = theme => ({
    button: {
     margin:'10px'
    },
    UserInfo:{
        backgroundColor: '#fff',
        minHeight: '381px',
        width: '400px',
        margin: '40px auto',
    }

  
  });
class UserInfo extends Component{
    constructor(props){
        super(props);
        this.state={
            isopen:false
            
        }
        this.doBack = this.doBack.bind(this);
        // this.updatePhoneNumber = this.updatePhoneNumber.bind(this);
    }
    // updatePhoneNumber(e){
    //     this.setState({
    //         phoneNumber:e.target.value
    //     })

    // }
    // setPhoneNumber(e){
        
    //     localStorage.setItem("phoneNumber",this.state.phoneNumber);

    // }

        
    
    getName(){
        const fullName= localStorage.getItem("firstName") +" " +localStorage.getItem("lastName");
        return fullName;
    }
    doBack(){
        this.props.history.push("./")
    }
    doEdit=()=>{
        this.setState({isopen:!this.state.isopen})
    }
    render(){
        const { classes } = this.props;
        return(
            <Card className={classes.UserInfo}>
                <CardHeader className="header" title="Profile Page" titleTypographyProps="Profile Page">
                <Avatar alt="profile image" src="E:\React_JS\project_1\src\Component\Images" />

                </CardHeader>
                    <CardContent className="cardContent">
                        <TextField id="Name" label="Name" variant="outlined" color="primary" className="userid" style={{padding:9}}
                        value={this.getName()}
                        />
                        
                        <TextField id="phoneNum" label="Phone Number" variant="outlined" color="primary" className="password"style={{padding:9}}
                        value={localStorage.getItem("phoneNumber")}
                        />
                        <TextField id="email_id" label="Email Id" variant="outlined" color="primary" className="userid" style={{padding:9}}
                        value={localStorage.getItem("email")}/>

                        <div className="buttonClass">
                            <Button variant="contained" color="primary" className={classes.button} type="submit" onClick={this.verifyUser } style={{padding:9}}
                            onClick={this.doBack}>Back</Button>
                        
                        </div>
                        <div className="buttonClass">
                            <Button variant="contained" color="primary" className={classes.button} type="submit" onClick={this.verifyUser } style={{padding:9}}
                            onClick={this.doEdit}>Edit</Button>
                        
                        </div>
                    </CardContent>


                {/* <label>Name</label>
                <input type="text" value={this.getName()}></input><br />

                <label>Email Id</label>
                <input type="text" value={localStorage.getItem("email")}></input><br/>

                <button type="submit" onClick={this.doBack}>Back</button> */}

                {/* <label>Email Id</label>
                <input type="text"></input><br/> */}
                <FormDialog  isopen={this.state.isopen} onEdit={this.doEdit}/> 

            </Card>

        )
    }
}




export default withStyles(styles)(withRouter(UserInfo));