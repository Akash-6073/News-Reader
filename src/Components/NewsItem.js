import React, { Component } from 'react'

export class NewsItem extends Component {
   observe = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting)
      {
        entry.target.classList.add('zoomShow');
      }
    })
  })
  
   hide=document.querySelectorAll(".zoomHide").forEach((el)=>this.observe.observe(el));
  render() {
  let    {title,description,Imgurl ,newsUrl , author , date , sourceName} = this.props;
    return (
      <div className='my-5 '>
        
         <div className="card" style={{margin:"15px 25px"}}> 
         <span className="position-absolute    translate-middle badge rounded-pill bg-success" style={{color:"white" , left:"0" , zIndex:"1" , top:"-12px",overflow:"hidden"}}>
    {sourceName}  
  </span>
              <img src= {Imgurl?Imgurl:"https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg"} className="card-img-top" alt="..."/>
              
              
              <div className="card-body">
                
                <h5 className="card-title"  style={{fontFamily:"Ubuntu, sans-serif",fontWeight:"bolder"}}>{title}</h5> 
                <p className="card-text" style={{fontFamily:"Roboto Condensed, sans-serif"}}>{description}...</p>
                <p className="card-text" style={{fontFamily:"Roboto Condensed, sans-serif"}}><small className="text-muted">Last updated at <span className='text-danger success'>{new Date(date).toDateString()}</span></small></p>
                <a href={newsUrl} target='_blank' className="btn btn-primary btn-sn">Read More</a>
              </div>
              
          </div>
      </div>
    )
  }
}

export default NewsItem
