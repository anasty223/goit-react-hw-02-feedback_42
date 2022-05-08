import { Component } from "react";
import Statistics from "../Statistics/Statistics";
import Button from "../FeedbackOptions/Buttons-FeedbackOptions";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: false,
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  handleClick = (e) => {
    this.setState((prevState) => {
      return { [e.target.name]: prevState[e.target.name] + 1 };
    });
  };

  render() {
    return (
      <div>
        <p>Total feedback: {this.countTotalFeedback()} </p>

        <p>Positive feedback:{this.countPositiveFeedbackPercentage()} % </p>

        <Button onHandleClick={this.handleClick} />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          countTotalFeedback={this.countTotalFeedback()}
        />
      </div>
    );
  }
}

export default Feedback;
