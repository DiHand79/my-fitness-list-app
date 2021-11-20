import React from "react";
import Day from "./Day.jsx";
import "./dayList.css";

export default function DayList({state}) {

  const weekDay = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  const days = state.map( (day,i) => {
    return <Day name={weekDay[i]} 
        workout={day} 
        key={ i + "_" + Math.random()}
    />
  })

  return(
    <div className="day-list">
      {days}
    </div>
  )
}