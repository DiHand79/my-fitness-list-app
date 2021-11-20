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
    let tasks1;
    let tasks2;
    // console.log(this.props);
    console.log(this.props.workout.general);
    if(this.props.workout?.general){
      tasks1 = this.props.workout.general.map( task => {
        console.log("Day task: ", task);
        return (
          <Task task={task}/>
          // <div style={style}>
          //   Task: {task.title} {task.sets} {task.count} {task.finished}
          // </div>
        )
      })
    }
    if(this.props.workout?.secondary){
      tasks2 = this.props.workout.secondary.map( task => {
        console.log("Day task: ", task);
        return (
          <Task task={task}/>
          // <div style={style}>
          //   Task: {task.title} {task.sets} {task.count} {task.finished}
          // </div>
        )
      })
    }
    
    let {name, workout} = this.props;
    // let [expanded, tasks, finished] = workout;
    return (
      <li className="day-content">
        <header className="day-header" onClick={this.onClickHeader}>
          <span>{name}</span>
          <span>►</span>
        </header>
        {/* TODO - set as diff component -> DayTasks */}
        <section className={ this.state.expanded ? "day-fitness-tasks" : "day-fitness-tasks hide"}>
          {/* {workout.tasks + this.state.finished}  */}
          <div className="container-tasks general">
            <p className="title">General Tasks:</p>
            {tasks1}
          </div>
          <div className="container-tasks secondary">
            <p className="title">Secondary Tasks:</p>
            {tasks2}
          </div>
        </section>

      </li>
    )
  }


}