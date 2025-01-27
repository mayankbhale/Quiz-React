import React from "react";
import "./Home.css"
function Home(props) {
  return (
    <div className="container__home">
         <h1 style={{textAlign:"center"}}>Select the topic to start quiz</h1>
         <div className="button__holder">
      <button
        // disabled={disabled1}
        id='computer_button'
        className='button1'
        onClick={props.handleClick}>
        Computer
      </button>
      <button
        // disabled={disabled1}
        id='natureandscience'
        className='button1'
        onClick={props.handleClick}>
        Nature & Science
      </button>
      <button
        // disabled={disabled1}
        id='video_games_button'
        className='button1'
        onClick={props.handleClick}>
        Video Games
      </button>
      {/* <button
        // disabled={disabled1}
        id='computer_button'
        className='button1'
        onClick={props.handleClick}>
        Computer
      </button>
      <button
        // disabled={disabled1}
        id='computer_button'
        className='button1'
        onClick={props.handleClick}>
        Computer
      </button>
      <button
        // disabled={disabled1}
        id='computer_button'
        className='button1'
        onClick={props.handleClick}>
        Computer
      </button> */}
      </div>
    </div>
  );
}

export default Home;
