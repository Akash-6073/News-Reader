import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import Bussiness from '../Images/busy.jpg'
import Entertainment from '../Images/enter.jpg'
import Health from '../Images/health.jpg'
import Science from '../Images/science.jpg'
import Sports from '../Images/sports.jpg'
import Technology from '../Images/tech.jpg'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Foot from './Foot';

export class News extends Component {
 
static defaultProps={
  country:"in",
  pageSize:9,
  category:"sports",
  name:"News Monkey",
  color:"red",
  img:{}
}

static propTypes={
  pageSize:PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
}

  constructor (props) {
    super(props);
    console.log("Hi iam a news constructor");
    this.state ={
      articles : [],
      loading :false,
      page:1
    }
    document.title=this.props.name==="News Reader" ? "News Reader" : this.props.name + " - News Reader"  
  }
  
  async updateNews(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d588650fda7c4d69b81aad8db61849ec&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({loading:false})

    this.setState({
      articles : parsedata.articles,
      totalResults:parsedata.totalResults
    })
    console.log(parsedata)
  }
  
  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d588650fda7c4d69b81aad8db61849ec&page=1&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    
    let data = await fetch(url);
    let parsedata = await data.json();
            this.setState({loading:false})

    this.setState({
      articles : parsedata.articles,
      totalResults:parsedata.totalResults
    })
    console.log(parsedata)
  }

  handleNext = async ()=>{
            // console.log("next");
            
            // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d588650fda7c4d69b81aad8db61849ec&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
            // this.setState({loading:true})
            // let data = await fetch(url);
            // let parsedata = await data.json();
            // this.setState({loading:false})

            // this.setState({
            //   articles : parsedata.articles
            // })
            // this.setState(
            //   {
            //     page:this.state.page+1
            //   })
            this.setState({page:this.state.page+1})
            this.updateNews()

}
  handlePrev = async ()=>{
            // console.log("previous");
            // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d588650fda7c4d69b81aad8db61849ec&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
            // this.setState({loading:true})
            
            // let data = await fetch(url);
            // let parsedata = await data.json();
            // this.setState({loading:false})

            // this.setState({
            //   articles : parsedata.articles
            // })
            // this.setState(
            //   {
            //     page:this.state.page-1
            //   })
            this.setState({page:this.state.page-1})
            this.updateNews()


  }
  render() {
    let {name}=this.props;
    return (
      <div className=' bcards' style={{position:"relative"}}>
            <h1 className='text-center newsreader' style={{fontFamily:"Ubuntu, sans-serif"}}>  <img src={this.props.img}  style={{height:"40px",background:this.props.color,borderRadius:"15px",textAlign:"center",top:"85px"}} alt="" />  &nbsp;           {this.props.category==="general" ? 'News Reader -  Top Headlines':this.props.name+" - Latest"}              </h1>
            <div  className='text-center'>
            {this.state.loading &&   < Spinner/>}
            </div>
            <div className="d-flex cards mt-4">
                {!this.state.loading && this.state.articles.map((element)=>{
                  return<div className="col-md-4" style={{padding:"0"}} key={element.url}>
                              <NewsItem   title={element.title?element.title:""} description={element.description?element.description.slice(0,95):""} Imgurl={element.urlToImage} newsUrl={element.url} author={element.author?element.author:"unknown"} date={element.publishedAt} sourceName={element.source.name} />
                  </div>
                })}
            </div>
            <div className="  prevNext d-flex justify-content-between pb-3 my-4 " >
                  <button  type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrev}>&larr; Previous</button>
                  <button type="button" disabled={Math.ceil(this.state.page>this.state.totalResults/this.props.pageSize)}  className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
            </div>
            {!this.state.loading && <Foot/>}
      </div>
    )
  }
}
export default News
