import React from "react";
import "./day.css";
import Task from "./Task.jsx";

export default class Day extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      expanded: false,
      // tasks,
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
    // console.log("onClick");
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
    console.log(this.props);
    let {name, workout} = this.props;
    // let [expanded, tasks, finished] = workout;
    return (
      <li className="day-content">
        <header className="day-header" onClick={this.onClickHeader}>
          <span>{name}</span>
          <span>►</span>
        </header>
        <section className={ this.state.expanded ? "day-fitness-tasks" : "day-fitness-tasks hide"}>
          {workout.tasks + this.state.finished} 
          <div className="container-tasks">
            <h3 className="title">General Tasks:</h3>
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
          </div>
          <div className="container-tasks">
            <h3 className="title">Secondary Tasks:</h3>
            <Task />
            <Task />
            <Task />
          </div>
        </section>
      </li>
    )
  }


}