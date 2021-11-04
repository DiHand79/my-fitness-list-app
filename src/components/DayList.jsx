import React from "react";
import Day from "./Day.jsx";
import "./dayList.css";

export default class DayList extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      day1: {
        expanded: false,
        tasks: "кардио грудь бицепс сауна",
        finished: false
      },
      day2: "кардио сауна",
      day3: "кардио спина трицепс сауна",
      day4: "кардио сауна",
      day5: "кардио ноги пресс сауна",
      day6: "кардио сауна",
      day7: "отдых",
    }
  }

  render(){
    return(
      <div className="day-list">
        <Day name="Пн" workout={this.state.day1}/>
        <Day name="Вт" workout={this.state.day2}/>
        <Day name="Ср" workout={this.state.day3}/>
        <Day name="Чт" workout={this.state.day4}/>
        <Day name="Пт" workout={this.state.day5}/>
        <Day name="Сб" workout={this.state.day6}/>
        <Day name="Вс" workout={this.state.day7}/>
      </div>
    )
  }
}