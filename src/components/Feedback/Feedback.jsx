import { Component } from "react";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback:0,
  };

 countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state;
    return good+neutral+bad
  }

  handleClick = (e) => {
    this.setState((prevState) => {
      return { [e.target.name]: prevState[e.target.name] + 1 };
    });
  };

  render() {
    return (
      <>
        <div>
          <p>Total feedback: {this.countTotalFeedback()} </p>
          <p>Positive:{this.countPositiveFeedbackPercentage()} %</p>
          <span>
            {<p>Good: {this.state.good}</p>}
          
            <button
              value={this.state.good}
              name="good"
              type="submit"
              onClick={this.handleClick}
             
            >
              Good
            </button>
          </span>
        </div>
        <div>
          <span>
            {<p>Neutarl: {this.state.neutral}</p>}
            <button
              value={this.state.neutral}
              name="neutral"
              type="submit"
              onClick={this.handleClick}
            >
              Neutral
            </button>
          </span>
        </div>
        <div>
          <span>
            {<p>Bad: {this.state.bad}</p>}
            <button
              // value={this.state.bad}
              name="bad"
              type="submit"
              onClick={this.handleClick}
            >
              Bad
            </button>
          </span>
        </div>
      </>
    );
  }
}

export default Feedback;
