import { Component } from "react";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
      bad: 0,
    total:0,
  };
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;

        this.setState({total:good+neutral+bad})
    }
       
  handleChangeGood = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };
  handleChangeNeutral = () => {
    this.setState((prevState) => ({
  neutral: prevState.neutral + 1,
   }));
  };
  handleChangeBad = () => {
    this.setState((prevState) => ({
     bad: prevState.bad + 1,
 }));
  };

  render() {
    return (
      <>
        <div>
                <p>Total: {this.state.total} </p>
          <span>
           
            {this.state.good}
            <button
              type="submit"
              onClick={this.handleChangeGood}
            onSubmit={this.handleSubmit}
            
            onChange={this.countTotalFeedback}
            >
              Good
            </button>
          </span>
        </div>
        <div>
     
          <span>
     
            {this.state.neutral}
            <button
              type="submit"
              onClick={this.handleChangeNeutral}
              onSubmit={this.handleSubmit}
             onChange={this.countTotalFeedback}
            >
              Neutral
            </button>
          </span>
        </div>
        <div>
       
          <span>
       
            {this.state.bad}
            <button
              type="submit"
              onClick={this.handleChangeBad}
                        onSubmit={this.handleSubmit}
                        onChange={this.countTotalFeedback}
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
