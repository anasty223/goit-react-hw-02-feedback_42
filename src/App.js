import "./App.css";
import { Component } from "react";
import Container from "./components/Container/Container";
import Feedback from "./components/Feedback/Feedback";
import Statistics from "./components/Statistics/Statistics";

class App extends Component {
  render() {
    return (
      <>
        <Feedback />
      </>
    );
  }
}

export default App;
