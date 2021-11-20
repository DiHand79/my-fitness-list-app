// import logo from './logo.svg';
import React from "react";
import DayList from "./components/DayList.jsx";
import './App.css';
// img sources: https://xmuskul.ru

// https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg

class App extends React.Component {
  constructor(){
    super();
    this.title = "myFitnessList"
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
        <DayList />
      </div>
    );
  }
}

export default App;
