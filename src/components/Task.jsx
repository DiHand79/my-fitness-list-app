import React, {Component} from "react";
import "./task.css";

class Task extends Component  {
  // MORE MODERN -> BUT need save to local & read from if saved before
  
  // TODO create 2 component:
  // 1 FULL day 
  //     2 Light Day - cardio+ 
  // 3 anhor to header opened day
  // 4 if open one day - other - collapsed
  // 5 global state 
  // 6 save global state to local storage - may be best - use btn - UPDATE data

  
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
  // test = this.props.task.title.slice(" ")[1] === "сауна";
  state =  this.test ? this.lightDay : this.fullDay;

  onFinished = ()=>{
    // console.log(`Finished ${this.props.task.title} : ${this.state.finished}`)
    this.setState( prevState => ({
      finished: !prevState.finished
      })
    );
  }

  onChangeSets = (e)=>{
    // console.log("Changed: ", e.target.value);
    this.setState( () => ({sets: e.target.value}))
  }

  onChangeCount = (e)=>{
    // console.log("Changed: ", e.target.value);
    this.setState( prevState => ({
      count: e.target.value
    }))
  }

  onChangeWeight = (e)=>{
    // console.log("Changed: ", e.target.value);
    this.setState( prevState => ({
      weight: e.target.value
    }))
  }

  onChangeTime = (e)=>{
    // console.log("Changed: ", e.target.value);
    this.setState( () => ({time: e.target.value}))
  }

  render(){
    // console.log( this.props.task.title, " dayTask ", this.dayTask);
    // let {title, sets, count, weight, img, finished} = task
    const style = {
      // color: this.state.finished ? "darkblue" : "#333",
      background: this.state.finished ? "lightblue" : "white",
    };
    // console.log(this.props.task.title, this.test, this.state);
    return(
      <div className="task" style={style}>

        <div className="taskTitle">Task: {this.props.task.title}</div>
        <div className="container">
          
          <form className="footerStyle">       
            {/* {this.dayTask} */}

            {/* {this.props.task.title.split(" ")[1] === "сауна" ? this.lightDay : this.fullDay} */}
            
            <label className="title">{this.test ? "Время:" : "Подходы:"}
              <input className="inputStyle" 
                      type="number" 
                      // step="1" 
                      onChange={this.test ? this.onChangeTime : this.onChangeSets}
                      value={this.test ? this.state.time : this.state.sets}/>
            </label>

            {this.test ? 
                  null : 
              ( <label className="title">Кол-во:
                  <input className="inputStyle" 
                          type="number" 
                          onChange={this.onChangeCount}
                          value={this.state.count}/>
                </label>  )
            }
            
            
            {this.test ? 
                  null : 
              ( <label className="title"> Вес:
                <input className="inputStyle" 
                        type="number" 
                        onChange={this.onChangeWeight}
                        value={ this.test ? this.state.weight : this.state.weight}/>
              </label>)
            }

            <label className="title">Фсе:
              <input className="inputStyle" type="checkbox" 
                    checked={this.state.finished} 
                    onChange={this.onFinished}
              />
            </label>

          </form>
          {/* <a href={this.task.img}> */}
            <img className="imgStyle" src={this.props.task.img} alt="img" width="50%"/>
          {/* </a> */}
        </div>
      </div>
    )
  }
}

export default Task