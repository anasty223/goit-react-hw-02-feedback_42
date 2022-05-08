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
        <Feedback />
      </Container>
    );
  }
}

export default App;
