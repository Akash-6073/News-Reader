import React, { Component } from 'react'
import loading from '../Components/loading.gif';

export default class Spinner extends Component {
  render() {
    return (
      <div>
        < img src={loading}  style={{height:"25px"}} alt="" /> Fetching
      </div>
    )
  }
}
