import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

function RoutingExample(){
    return(
        <div>
            <Router>
                <div>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                    </ul>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />

                </div>

            </Router>
        </div>
    )
}

function Home(){
    return(
        <div>
            <h1>Home</h1>
            <p>This is home page</p>
            <button >click me</button>
        </div>
    )
}

function About(){
    return(
        <div>
            <h1>About</h1>
            <p>This is about page</p>
        </div>
    )
}

export default RoutingExample;