import React from "react";
import Day from "./Day.jsx";
import "./dayList.css";

export default class DayList extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      day1: {
        // expanded: false,
        tasks: "кардио грудь бицепс пресс сауна",
        general: [
          {
            title: "отжимания",
            sets: 3, 
            count: 15,
            img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            finished: false
          },
          {
            title: "отжимания",
            sets: 3, 
            count: 15,
            img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            finished: false
          },
          {
            title: "отжимания",
            sets: 3, 
            count: 15,
            img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            finished: false
          },
          {
            title: "отжимания",
            sets: 3, 
            count: 15,
            img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            finished: false
          },
          {
            title: "отжимания",
            sets: 3, 
            count: 15,
            img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            finished: false
          },
        ],
        secondary: [
          {
            title: "отжимания",
            sets: 3, 
            count: 15,
            img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            finished: false
          },
          {
            title: "отжимания",
            sets: 3, 
            count: 15,
            img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            finished: false
          },
          {
            title: "отжимания",
            sets: 3, 
            count: 15,
            img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            finished: false
          },
          {
            title: "отжимания",
            sets: 3, 
            count: 15,
            img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            finished: false
          },
          {
            title: "отжимания",
            sets: 3, 
            count: 15,
            img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            finished: false
          },
        ],
      },
      day2: {
        // expanded: false,
        tasks: "кардио сауна",
        general: [
          {
            title: "кардио",
            sets: 1, 
            count: 1,
            img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            finished: false
          }
        ]
        // finished: false
      },
      day3: {
        // expanded: false,
        tasks: "кардио спина трицепс пресс сауна",
        general: [
          {
            title: "подтягивания",
            sets: 3, 
            count: 15,
            img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            finished: false
          },
          {
            title: "отжимания",
            sets: 3, 
            count: 15,
            img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            finished: false
          },
          {
            title: "отжимания",
            sets: 3, 
            count: 15,
            img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            finished: false
          },
          {
            title: "отжимания",
            sets: 3, 
            count: 15,
            img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            finished: false
          },
          {
            title: "отжимания",
            sets: 3, 
            count: 15,
            img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            finished: false
          },
        ],
        secondary: [
          {
            title: "подтягивания",
            sets: 3, 
            count: 15,
            img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            finished: false
          },
          {
            title: "отжимания",
            sets: 3, 
            count: 15,
            img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            finished: false
          },
          {
            title: "отжимания",
            sets: 3, 
            count: 15,
            img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            finished: false
          },
          {
            title: "отжимания",
            sets: 3, 
            count: 15,
            img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            finished: false
          },
          {
            title: "отжимания",
            sets: 3, 
            count: 15,
            img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            finished: false
          },
        ],
        // finished: false
      },
      day4: {
        // expanded: false,
        tasks: "кардио сауна",
        general: [
          {
            title: "кардио",
            sets: 1, 
            count: 1,
            img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            finished: false
          }
        ]
        // finished: false
      },
      day5: {
        // expanded: false,
        tasks: "кардио ноги плечи пресс сауна",
        general: [
          {
            title: "приседания",
            sets: 3, 
            count: 15,
            img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            finished: false
          },
          {
            title: "приседания",
            sets: 3, 
            count: 15,
            img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            finished: false
          },
          {
            title: "приседания",
            sets: 3, 
            count: 15,
            img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            finished: false
          },
          {
            title: "приседания",
            sets: 3, 
            count: 15,
            img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            finished: false
          },
          {
            title: "приседания",
            sets: 3, 
            count: 15,
            img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            finished: false
          },
        ],
        secondary: [
          {
            title: "приседания",
            sets: 3, 
            count: 15,
            img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            finished: false
          },
          {
            title: "приседания",
            sets: 3, 
            count: 15,
            img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            finished: false
          },
          {
            title: "приседания",
            sets: 3, 
            count: 15,
            img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            finished: false
          },
          {
            title: "приседания",
            sets: 3, 
            count: 15,
            img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            finished: false
          },
          {
            title: "приседания",
            sets: 3, 
            count: 15,
            img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            finished: false
          },
        ],
        // finished: false
      },
      day6: {
        // expanded: false,
        tasks: "кардио сауна",
        general: [
          {
            title: "кардио",
            sets: 1, 
            count: 1,
            img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            finished: false
          }
        ]
        // finished: false
      },
      day7: {
        // expanded: false,
        tasks: "отдіх",
        // finished: false
      },
    }
  }

  render(){
    return(
      <div className="day-list">
        <Day name="Пн" workout={this.state.day1} id={Math.random()}/>
        <Day name="Вт" workout={this.state.day2} id={Math.random()}/>
        <Day name="Ср" workout={this.state.day3} id={Math.random()}/>
        <Day name="Чт" workout={this.state.day4} id={Math.random()}/>
        <Day name="Пт" workout={this.state.day5} id={Math.random()}/>
        <Day name="Сб" workout={this.state.day6} id={Math.random()}/>
        <Day name="Вс" workout={this.state.day7} id={Math.random()}/>
      </div>
    )
  }
}