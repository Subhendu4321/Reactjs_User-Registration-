import React,{Component} from 'react';
import './UserInfo.css'
import { Link,withRouter } from 'react-router-dom';


class UserInfo extends Component{
    constructor(props){
        super(props);
        this.doBack = this.doBack.bind(this);
    }
    getName(){
        const fullName= localStorage.getItem("firstName") +" " +localStorage.getItem("lastName");
        return fullName;
    }
    doBack(){
        this.props.history.push("./login")
    }
    render(){
        return(
            <div className="UserInfo">
                <div className="Header">
                    <h4>User Profile</h4>
                </div>
                <label>Name</label>
                <input type="text" value={this.getName()}></input><br />

                <label>Email Id</label>
                <input type="text" value={localStorage.getItem("email")}></input><br/>

                <button type="submit" onClick={this.doBack}>Back</button>

                {/* <label>Email Id</label>
                <input type="text"></input><br/> */}


            </div>

        )
    }
}




export default withRouter(UserInfo);