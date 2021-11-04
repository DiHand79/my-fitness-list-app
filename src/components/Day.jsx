import React from "react";
import "./day.css";

export default class Day extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      expanded: false,
      data: this.props.workout,
      finished: false 
    };

    this.onClickHeader = this.onClickHeader.bind(this);
  }
  
  componentDidMount(){
    console.log("Component Day did mount");
  }

  coponentWillUnmount(){
    console.log("Component Day will unmount");
  }

  onClickHeader(){
    console.log("onClick");
    // this.setState({data: "clicked"}) // simple async BUT no synhronic data garanty
    this.setState(prevState => ({  // prevState, state, props
        expanded: !prevState.expanded,
        // finished: true  
      })
    );
  }


  //  TODO - clear this state & move up to global state
  //  update onClicked for move up state data

  //  extend design fitness tasks - checkboxes, photo, sets, weights


  render(){
    return (
      <li className="day-content">
        <header className="day-header" onClick={this.onClickHeader}>
          <span>{this.props.name}</span>
          <span>►</span>
        </header>
        <section className={ this.state.expanded ? "day-fitness-tasks" : "day-fitness-tasks hide"}>
          {this.state.data + this.state.finished} 
        </section>
      </li>
    )
  }


}