import "./App.css";
import React from "react";
import Navbar from "./components/layout/Navbar";

class App extends React.Component {
  render() {
    return (
      <div className={App}>
        <Navbar />
      </div>
    );
  }
}

export default App;
