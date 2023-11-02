import './App.css';
import './style/Responsive.css'
import './style/Utils.css'
import './style/style.css'
 import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import Foot from './Components/Foot';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Bussiness from '../src/Images/busy.jpg'
import Entertainment from '../src/Images/enter.jpg'
import Health from '../src/Images/health.jpg'
import Science from '../src/Images/science.jpg'
import Sports from '../src/Images/sports.jpg'
import Technology from '../src/Images/tech.jpg'
import Newsimg from '../src/Images/news.jpg'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dropdown from './Components/Dropdown';
 
 export default class App extends Component {
  pageSize=9;
 state={
  country:"in"
 }
 
   render() {
     return (
       <>
        <Router>
         <Navbar heading={this.heading} str={this.state.country} onchange={this.onChange} />
       <div className="main">
         <Routes>
                <Route exact path='/News-Reader' element ={  <News key="general" country={this.state.country} pageSize={this.pageSize} category="general" name="News Reader" img={Newsimg} color=" whitesmoke" />}>  </Route>
                <Route exact path='/home' element ={  <News key="general" country={this.state.country} pageSize={this.pageSize} category="general" name="Home" img={Newsimg} color=" whitesmoke" />}>  </Route>
                <Route exact path='/business' element ={  <News key="business" country={this.state.country} pageSize={this.pageSize} category="business" name="Bussiness" img={Bussiness} color=" #14765a" />}>  </Route>
                <Route exact path='/entertainment' element ={  <News key="entertainment" country={this.state.country} pageSize={this.pageSize} category="entertainment" name="Entertainment" img={Entertainment} color=" #c98628" />}>  </Route>
                <Route exact path='/general' element ={  <News key="general" country={this.state.country} pageSize={this.pageSize} category="general" name=""  color=" orange" />}>  </Route>
                <Route exact path='/health' element ={  <News key="health" country={this.state.country} pageSize={this.pageSize} category="health" name="Health" img={Health} color=" #ec0548" />}>  </Route>
                <Route exact path='/science' element ={  <News key="science" country={this.state.country} pageSize={this.pageSize} category="science" name="Science" img={Science} color=" #c39cd9" />}>  </Route>
                <Route exact path='/sports' element ={  <News key="sports" country={this.state.country} pageSize={this.pageSize} category="sports" name="Sports" img={Sports} color=" #d5d713" />}>  </Route>
                <Route exact path='/technology' element ={  <News key="technology" country={this.state.country} pageSize={this.pageSize} category="technology" name="Technology" img={Technology} color=" #ff7b10" />}>  </Route>
         </Routes>
         </div>
         </Router>
         </>
     )
   }
 }
 
