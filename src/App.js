import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import RoutingExample from './Component/Routing_ex';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Login from './Component/Login';
import UserInfo from './Component/UserInfo'
import Register from './Component/Register';


class App extends Component{
  
  render(){
    
    return(
      <div className="App">
        <Router>
          
            <div>
            <Route exact path="/"><Login /></Route>
            <Route exact path="/userInfo">< UserInfo /></Route>
            <Route path="/register"><Register /></Route>
            </div>
          
        </Router>

      </div>
    )
  }

}

export default App;
