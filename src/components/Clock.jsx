import React from "react"
// import { useState, useEffect } from "react/hoocks";
import "./clock.css";

export default class Clock extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      timer: new Date()
    };
  }

  componentDidMount(){
    this.timerID = setInterval(
     ()=> this.setState({timer: new Date()}), 1000
    )
  }

  componentWillUnmount(){
    clearInterval(this.timerID)
  }

  render(){
    return(
      <div className="timer-container">
          {this.state.timer.toLocaleDateString() + "  :  " + this.state.timer.toLocaleTimeString()} 
        {/* <div className="timer days"> 
          {this.state.timer.toLocaleDateString()} 
        </div> */}
        {/* <div className="timer hours"> 
          {this.state.timer.toLocaleTimeString()} 
        </div> */}
      </div>
    )
  }
}