import "./task.css";

const Task = ({task}) => {
  let {title, sets, count, img, finished} = task
  console.log("TASK: \n", title, sets, count, img, finished);
  // console.log(this.props);
  const style = {
    color: finished ? "darkblue" : "#333",
    background: finished ? "lightblue" : "white",
  };

  return(
    <div className="task" style={style}>

      <div className="container">
        
        <section className="footerStyle">       
        <div className="taskTitle">Task: {title}</div>
          <div>
            <p className="title">Подходы:</p>
            <input className="inputStyle" type="number" step="1" value={sets}/>
          </div>
          <div>
            <p className="title">Кол-во:</p>
            <input className="inputStyle" type="number" value={count}/>
          </div>
          <div>
            <p className="title">Фсе:</p>
            <input className="inputStyle" type="checkbox" checked={finished}/>
          </div>
        </section>
        <a href={img}>
          <img className="imgStyle" src={img} alt="img" width="50%"/>
        </a>
      </div>
    </div>
  )
}

export default Task