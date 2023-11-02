import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class Foot extends Component {
  render() {
    return (
        <>
        
      <div className='containerBox' style={{width:"100% "}}>
         <div className="contain">
            <div className="pow footStyle">
                Powered by News Reader
            </div>
            <div className="hrs">
              <div className="hr1">
               <hr />
              </div>
            <div className="media">
            <a href="mailto:akashmahendrakar6073@gmail.com" style={{textDecoration:"None",color:"white"}}><i className="fa-solid fa-envelope"></i></a> 
           <a target='_blank' href="https://www.instagram.com/akash__mahendrakar/"><i className="fa-brands fa-instagram"></i></a> 
           <a target='_blank' href="https://github.com/Akash-6073"><i className="fa-brands fa-github"></i></a> 
           <a target='_blank' href="https://www.linkedin.com/in/akash-mahendrakar-59b8a1220/"><i className="fa-brands fa-linkedin"></i></a> 
           <a target='_blank' href="https://wa.me/918919596263"><i className="fa-brands fa-whatsapp " ></i></a>
           </div>
           <div className="hr2">
          <hr />
           </div>
            </div>
           

            {/* <div className="collaborate">
                <form action="">
                    <input type="text" />
                    <input type="email" />
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </form>
            </div> */}
            <div className="cp"> <span> &copy;newsreader All rights reserved &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp; &nbsp;&nbsp;&nbsp; Made with &nbsp; </span><i className="fa-regular fa-heart"></i>&nbsp; <a target='_blank' href="https://akash-6073.github.io/Interactive-Resume/" className='aa success' >Akash</a></div>
         </div>
      </div>
      </>
    )
  }
}
