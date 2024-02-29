import { Component } from "react";
import "./index.css";

class Speedometer extends Component {
  state = { speed: 0 };

  onAccelerate = () => {
    if(this.state.speed >=0 && this.state.speed < 200){
    this.setState((prevState)=>({speed: prevState.speed + 10}))}
  };

  onBrake = () => {
    if(this.state.speed >0 && this.state.speed < 200){
      this.setState((prevState)=>({speed: prevState.speed - 10}))}
  };
  
  render() {
    const {speed} = this.state;
    return (
      <div className="speedometer">
        <h1>SpeedoMeter</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <p>The Speed is {speed} mph </p>
        <div className="buttons">
          <button className="btn1" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button className="btn2" onClick={this.onBrake}>Brake</button>
        </div>
      </div>
    );
  }
}

export default Speedometer;
