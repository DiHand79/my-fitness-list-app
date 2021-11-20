// import logo from './logo.svg';
import React from "react";
import DayList from "./components/DayList.jsx";
import './App.css';
// img sources: https://xmuskul.ru

// https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg

class App extends React.Component {
  constructor(){
    super();
    this.state = {

      workout: [
        {
          // expanded: false,
          tasks: "кардио грудь бицепс пресс сауна",
          general: [
            {
              title: "отжимания",
              sets: 3, 
              count: 15,
              weight:90,
              img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            },
            {
              title: "грудь от себя прямо",
              sets: 3, 
              count: 15,
              weight:90,
              img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            },
            {
              title: "грудь от себя наверх",
              sets: 3, 
              count: 15,
              weight:90,
              img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            },
            {
              title: "бабочка",
              sets: 3, 
              count: 15,
              weight:90,
              img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            },
            {
              title: "отжимания",
              sets: 3, 
              count: 15,
              weight:90,
              img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            },
          ],
          secondary: [
            {
              title: "бицепс гантели или штанга",
              sets: 3, 
              count: 15,
              weight:90,
              img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            },
            {
              title: "бицепс гантели или штанга",
              sets: 3, 
              count: 15,
              weight:90,
              img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            },
            {
              title: "бицепс гантели или штанга",
              sets: 3, 
              count: 15,
              weight:90,
              img: "https://xmuskul.ru/uprazhneniya/wp-content/uploads/2017/05/prisedaniya.jpg",
            }
          ],
        },
        {
          tasks: "кардио сауна",
          general: [
            {
              title: "кардио",
              sets: 1, 
              count: 40,
              weight: 93,
              img: "https://content.rozetka.com.ua/goods/images/big/127280387.jpg",
            }
          ],
          secondary: [
            {
              title: "сауна",
              sets: 3, 
              count: 5,
              img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Sauna_2.jpg",
            }
          ]
        },
        {
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
        {
          tasks: "кардио сауна",
          general: [
            {
              title: "кардио",
              sets: 1, 
              count: 40,
              weight: 93,
              img: "https://content.rozetka.com.ua/goods/images/big/127280387.jpg",
            }
          ],
          secondary: [
            {
              title: "сауна",
              sets: 3, 
              count: 5,
              img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Sauna_2.jpg",
            }
          ]
        },
        {
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
        {
          tasks: "кардио сауна",
          general: [
            {
              title: "кардио",
              sets: 1, 
              count: 40,
              weight: 93,
              img: "https://content.rozetka.com.ua/goods/images/big/127280387.jpg",
            }
          ],
          secondary: [
            {
              title: "сауна",
              sets: 3, 
              count: 5,
              img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Sauna_2.jpg",
            }
          ]
        },
        // {
        //   // expanded: false,
        //   tasks: "отдіх",
        //   // finished: false
        // },
      ]
    }
    this.title = "myFitnessList";
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
      </div>
    );
  }
}

export default App;
