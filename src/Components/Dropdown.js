import React, { Component } from 'react'

export default class Dropdown extends Component {
constructor(){
    super();
    this.state={
        ctry:"India"
    }
}
    dropdown(x){
            if(x=="in"){
                this.setState({ctry:"India"})
            }
            if(x=="us")
            {
                this.setState({ctry:"US"})
            }
    }
  render() {
  
    return (
        <>
        <div class="btn-group">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {this.state.ctry} <i class="fa-solid fa-earth-americas"></i>
  </button>
  <div class="dropdown-menu">
  <a class="dropdown-item" href="#" onClick={()=>this.dropdown("in")}>India </a>
          {/* <a class="dropdown-item" href="#" onClick={()=>this.dropdown("us")}>US</a> */}
  </div>
</div>
</>
    )
  }
}
