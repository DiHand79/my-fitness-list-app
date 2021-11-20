import React, {Component} from "react";
import "./task.css";

class Task extends Component  {
  constructor(props){
    super(props);

    const {task} = props

    this.task = task;

    this.state = {
      finished: false
    }

    this.onFinished = this.onFinished.bind(this)
  }

  onFinished(){
    console.log(`Finished ${this.task.title} : ${this.state.finished}`)
    this.setState( prevState => ({
      finished: !prevState.finished
      })
    );
  }

  render(){
    // let {title, sets, count, weight, img, finished} = task
    const style = {
      color: this.state.finished ? "darkblue" : "#333",
      background: this.state.finished ? "lightblue" : "white",
    };

    return(
      <div className="task" style={style}>

        <div className="container">
          
          <section className="footerStyle">       
          <div className="taskTitle">Task: {this.task.title}</div>
            <div>
              <p className="title">Подходы:</p>
              <input className="inputStyle" type="number" step="1" value={this.task.sets}/>
            </div>
            <div>
              <p className="title">Кол-во:</p>
              <input className="inputStyle" type="number" value={this.task.count}/>
            </div>
            <div>
              <p className="title">Вес:</p>
              <input className="inputStyle" type="number" value={this.task.weight}/>
            </div>
            <div>
              <p className="title">Фсе:</p>
              <input className="inputStyle" type="checkbox" 
                    checked={this.state.finished} 
                    onClick={this.onFinished}
              />
            </div>
          </section>
          <a href={this.task.img}>
            <img className="imgStyle" src={this.task.img} alt="img" width="50%"/>
          </a>
        </div>
      </div>
    )
  }
}

export default Task