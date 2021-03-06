import React, {Component} from "react";
import Task from "./Task.jsx";
import "./day.css";

export default class Day extends Component{

  constructor(props){
    super(props);

    this.state = {
      expanded: false,
    };

    this.onClickHeader = this.onClickHeader.bind(this);
  }
  
  // componentDidMount(){
  //   console.log("Component Day did mount", this.props);
  // }

  // coponentWillUnmount(){
  //   console.log("Component Day will unmount");
  // }

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
    // console.log("Day props: ", this.props);

    if(this.props.workout?.general){
      tasks1 = this.props.workout.general.map( (task,i) => {
        // console.log("%cDay task: ","background: tomato", task);
        return (
          <Task task={task}
            key={ i + "_" + Math.random()}
          />
        )
      })
    }

    if(this.props.workout?.secondary){
      tasks2 = this.props.workout.secondary.map( (task,i)=> {
        // console.log("%cDay task: ","background: tomato", task);
        return (
          <Task task={task}
            key={ i + "_" + Math.random()}
          />
        )
      })
    }

    let test = this.props.workout.tasks.split(" ")[1] === "сауна";
    // console.log("test", test);
    // let [expanded, tasks, finished] = workout;
    return (
      <li className="day-content">
        <header className={`day-header${test ? "" : " power-day"}`} 
                onClick={this.onClickHeader}>
          <span>{this.props.workout.day}</span>
          <span>►</span>
        </header>
        {/* TODO - set as diff component -> DayTasks */}
        <section className={ this.state.expanded ? "day-fitness-tasks" : "day-fitness-tasks hide"}>
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