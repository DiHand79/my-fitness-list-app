import React, {Component} from "react";
import "./task.css";

class Task extends Component  {
  // MORE MODERN -> BUT need save to local & read from if saved before
  
  // TODO create 2 component:
  // 1 FULL day 
  // 2 Light Day - cardio+ 
  
  fullDay = {
              finished: false,
              sets: 3,
              count: 15,
              weight: 100,
            };
  lightDay = {
              finished: false,
              time: 30,
              weight: 92,
            };

  test = this.props.task.title.trim() === "сауна" || this.props.task.title.trim() === "кардио"
  dayTask =  this.test ? this.lightDay : this.fullDay;
  
  state = this.dayTask;

  onFinished = ()=>{
    console.log(`Finished ${this.props.task.title} : ${this.state.finished}`)
    this.setState( prevState => ({
      finished: !prevState.finished
      })
    );
  }

  onChangeSets = (e)=>{
    console.log("Changed: ", e.target.value);
    this.setState( () => ({sets: e.target.value}))
  }

  onChangeCount = (e)=>{
    console.log("Changed: ", e.target.value);
    this.setState( prevState => ({
      count: e.target.value
    }))
  }

  onChangeWeight = (e)=>{
    console.log("Changed: ", e.target.value);
    this.setState( prevState => ({
      weight: e.target.value
    }))
  }

  onChangeTime = (e)=>{
    console.log("Changed: ", e.target.value);
    this.setState( () => ({time: e.target.value}))
  }

  render(){
    console.log( this.props.task.title, " dayTask ", this.dayTask);
    // let {title, sets, count, weight, img, finished} = task
    const style = {
      color: this.state.finished ? "darkblue" : "#333",
      background: this.state.finished ? "lightblue" : "white",
    };

    return(
      <div className="task" style={style}>

        <div className="taskTitle">Task: {this.props.task.title}</div>
        <div className="container">
          
          <section className="footerStyle">       
            {/* {this.dayTask} */}

            {/* {this.props.task.title.split(" ")[1] === "сауна" ? this.lightDay : this.fullDay} */}
            
            <div>
              <p className="title">{this.test ? "Время:" : "Подходы:"}</p>
              <input className="inputStyle" 
                      type="number" 
                      // step="1" 
                      onChange={this.test ? this.onChangeTime : this.onChangeSets}
                      value={this.test ? this.state.time : this.state.sets}/>
            </div>
            {this.test ? null : ( <div>
              <p className="title">Кол-во:</p>
              <input className="inputStyle" 
                      type="number" 
                      onChange={this.onChangeCount}
                      value={this.state.count}/>
            </div>)}
           
            <div>
              <p className="title"> Вес:</p>
              <input className="inputStyle" 
                      type="number" 
                      onChange={this.onChangeWeight}
                      value={ this.test ? this.state.weight : this.state.weight}/>
            </div>
            <div>
              <p className="title">Фсе:</p>
              <input className="inputStyle" type="checkbox" 
                    checked={this.state.finished} 
                    onChange={this.onFinished}
              />
            </div>
          </section>
          {/* <a href={this.task.img}> */}
            <img className="imgStyle" src={this.props.task.img} alt="img" width="50%"/>
          {/* </a> */}
        </div>
      </div>
    )
  }
}

export default Task