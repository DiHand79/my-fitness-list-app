import React from "react";
import {ReactComponent as ArrowUpSVG} from  "../images/chevron-up-solid.svg";
import "./scrollUp.css";

// https://fontawesome.com/v5.15/icons/chevron-up?style=solid
// https://leungwensen.github.io/svg-icon/

export default function ScrollUp (){
  
  function scrollUp (e){
    e.preventDefault();
    window.scroll(0, 100);
    // const btnUp = document.querySelector('.App-header')
    // window.scroll(0, btnUp.offsetBottom);
  }

  return (
    <a className="scrollUp" href=".App">
      <ArrowUpSVG onClick={scrollUp}/>
    </a>
  )
}