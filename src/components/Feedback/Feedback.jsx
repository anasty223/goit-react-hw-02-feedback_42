import { Component } from "react";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Container from "../Container/Container";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,

  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  countTotalFeedback = () => {
   const values = Object.values(this.state);
    return values.reduce((total, value) => total + value);
  };

  // onLeaveFeedback = (e) => {
  //   this.setState((prevState) => {
  //     return { [e.target.name]: prevState[e.target.name] + 1 };
  //   });
  // };
onLeaveFeedback = (event) => {
    const nameButton = event.currentTarget.textContent;
    this.setState((prevState) => ({
      [nameButton]: (prevState[nameButton] += 1),
    }));
  };
  render() {
    const { good, neutral, bad } = this.state;
     const keys = Object.keys(this.state)
    return (
      <Container title="Please leave feedback">
         <FeedbackOptions
            options={keys}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotal={this.countTotalFeedback()}
            positiveFeedback={this.countPositiveFeedbackPercentage()}
          />
      </Container>
    );
  }
}

export default Feedback;
