import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dropdown from './Dropdown';


export class Navbar extends Component {
 country="Country"

 change(x){
  console.log(x);
 }
  render() {
    
    return (
      <div className=''>
        <nav className="navbar navbar-expand-lg navbar-dark navbarflex  activeLink" style={{position:"fixed",width:"100%",top:"0",zIndex:"2" ,backgroundColor:"#000"}}>
  <Link className="navbar-brand " style={{fontFamily:"Young Serif, serif"}} to="/"><span className='nwsr '> <span style={{color:'#ff004f'}} className='success'> News</span> Reader</span></Link> 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse navLists navflex" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto listItems" style={{fontFamily:"Roboto Condensed, sans-serif",fontSize:"20px"}}>
      
 

      <li className="nav-item  "><Link className="nav-link" to="/Home">Home <span className="sr-only">(current)</span></Link></li>

      <li className="nav-item  "><Link className="nav-link" to="/business" >Business <span className="sr-only">(current)</span></Link></li>
      
      <li className="nav-item  "><Link className="nav-link" to="/entertainment">Entertainment <span className="sr-only">(current)</span></Link></li>
      
      <li className="nav-item  "><Link className="nav-link" to="/health">Health <span className="sr-only">(current)</span></Link></li>
      
      <li className="nav-item  "><Link className="nav-link" to="/science">Science <span className="sr-only">(current)</span></Link></li>
      
      <li className="nav-item  "><Link className="nav-link" to="/sports">Sports <span className="sr-only">(current)</span></Link></li>
      
      <li className="nav-item  "><Link className="nav-link" to="/technology">Technology <span className="sr-only">(current)</span></Link></li>
    </ul>
    <div className='pcbtns' >
              <form action="">
              <Dropdown change={this.change} />
              <button type="button" class="btn login" style={{color:"white",background:"#ff004f"}}>Login &nbsp;<i class="fa-solid fa-user"></i></button> &nbsp;
              </form>
  </div>
   
  </div>
  

</nav>              
      </div>
    )
  }
}

export default Navbar
