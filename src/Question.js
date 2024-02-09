import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Question.css'
import neeson1 from './images/neeson-cropped-1.png'
import neeson2 from './images/neeson-cropped-2.png'
import neeson3 from './images/neeson-cropped-3.png'
import neeson4 from './images/neeson-cropped-4.png'
import neeson5 from './images/neeson-cropped-5.png'


function Question() {
  const [buttonPosition, setButtonPosition] = useState(0)
  const [direction, setDirection] = useState(-1)

  let navigate = useNavigate();

  const goToSuccessPage = () => {
    navigate('/yay');
  };

  const handleMouseOver = () => {
    let newDirection = direction;
    if (buttonPosition === 0 || buttonPosition === 4) {
      newDirection = direction * -1
      setDirection(newDirection);
      setButtonPosition(prevPos => prevPos + newDirection);
    } else if (buttonPosition === 1 || buttonPosition === 2 || buttonPosition === 3) {
      setButtonPosition(prevPos => prevPos + direction);
    }
  }

  const buttonStyle = {
    left: 
      buttonPosition === 0 ? "0%" : 
      buttonPosition === 1 ? "8%" : 
      buttonPosition === 2 ? "16%" : 
      buttonPosition === 3 ? "24%" : 
      buttonPosition === 4 ? "32%" : "",
    position: "relative"
  }


  return (
    <div className="App">
      <div className="image-container">
        <img src={neeson5}/>
        <img src={neeson1}/>
        <img src={neeson2}/>
        <img src={neeson3}/>
        <img src={neeson4}/>
      </div>
      <div class="valentine-message">
        joying will you be my valentine?<br></br>
        (pls don't say no or neeson will be sad)
      </div>
      <div className="btns-container">
      <button
          type="submit"
          className="btn-yes"
          onClick={goToSuccessPage}
          >
          YES YES YES
        </button>
        <button
          type="submit"
          className="btn-no"
          onMouseOver={handleMouseOver}
          style={buttonStyle}
          >
          NO.
        </button>
      </div>
    </div>
  );
}

export default Question;
