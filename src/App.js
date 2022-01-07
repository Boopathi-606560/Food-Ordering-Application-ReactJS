import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import OrderListComponent from './components/OrderListComponent';
import Login from './components/Login';
import HeaderComponent from './components/HeaderComponent';
import Hotels from './components/Hotels';
import Orders from './components/Orders';
import FooterComponent from './components/FooterComponent';
import SignUpComponent from './components/SignUpComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                
                    <Switch> 
                          <Route path = "/" exact component = {SignUpComponent}></Route>
                          <Route path = "/login" exact component = {Login}></Route>
                          <Route path = "/dashboard" component = {OrderListComponent}></Route>
                          <Route path = "/hotels" component = {Hotels}></Route>
                          <Route exact path="/order/:id" component={Orders}></Route>
                    </Switch>
               
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
