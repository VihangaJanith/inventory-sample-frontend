import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Components/Home';
import Create from './Components/Create';
import Edit from './Components/Edit';
import Details from './Components/Details';
import Dv from './Components/Dv';





export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="container">
        <Route path="/" exact component={Home}></Route>
        <Route path="/add" exact component={Create}></Route>
        <Route path="/update/:id" exact component={Edit}></Route>
        
       <Route path="/post/:id" exact component={Details}></Route>
     
    








      </div>
      </BrowserRouter>
    )
  }
}
