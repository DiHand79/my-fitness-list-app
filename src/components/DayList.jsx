import React from "react";
import Day from "./Day.jsx";
import "./dayList.css";

export default function DayList(props) {
  console.log("DayList props", props);
  // const [ state ] = props;
  // const weekDay = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  const days = props.state.map( (day,i) => {
    // console.log("day", day);
    return <Day workout={day} 
        key={ i + "_" + Math.random()}
    />
  })

  return(
    <div className="day-list">
      {days}
    </div>
  )
}