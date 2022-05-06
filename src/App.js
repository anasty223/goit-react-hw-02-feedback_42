import "./App.css";
import { Component } from "react";
import Container from "./components/Container/Container";
import Feedback from "./components/Feedback/Feedback";
import Statistics from "./components/Statistics/Statistics";

class App extends Component {
  state = {
    value: 0,
  };

  render() {
    return (
      <Container>
        <h1>Please leave feedback</h1>

        <Feedback />

        {/* <Statistics
          good={this.state.value}
          neutral={this.state.value}
          bad={this.state.value}
        /> */}
      </Container>
    );
  }
}

export default App;
