// import logo from './logo.svg';
import React from "react";
import DayList from "./components/DayList.jsx";
import Clock from "./components/Clock.jsx";
import {workout} from "./workout.js";
import './App.css';
// img sources: https://xmuskul.ru
// https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg

// <script src="https://unpkg.com/formik/dist/formik.umd.production.min.js"></script>
// https://formik.org/docs/overview

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      workout: JSON.parse(workout), //[], //[],
      changed: false
    }
    this.workout = workout;
    this.title = "myFitnessList";
  }

  componentDidMount(){
    if(localStorage.getItem("workout")){
      this.setState({workout: JSON.parse(localStorage.workout)})
    } else localStorage.setItem("workout", JSON.stringify(this.state.workout));
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <span>
            {this.title}
          </span>
        </header>
        <DayList state={this.state.workout}/>
        <Clock />
      </div>
    );
  }
}

export default App;
