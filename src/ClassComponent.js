import { Component } from "react";
import "../src/Styles/counter.css";

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  handleIncrease = () => {
    this.setState((preState) => ({
      count: preState.count + 1,
    }));
  };
  handleDecrease = () => {
    if (this.state.count > 0) {
      this.setState((preState) => ({
        count: preState.count - 1,
      }));
    }
  };

  handleReset = () => {
    this.setState({
      count: 0,
    });
  };
  render() {
    return (
      <div className="counter-box">
        <h2>Class Component</h2>
        <p>{this.state.count}</p>
        <div>
          <button onClick={this.handleIncrease} className="button increase">
            +
          </button>
          <button onClick={this.handleReset} className="button reset">
            Reset
          </button>
          <button onClick={this.handleDecrease} className="button decrease">
            -
          </button>
        </div>
      </div>
    );
  }
}
export default ClassComponent;
