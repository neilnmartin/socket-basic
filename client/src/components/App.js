import React, { Component } from "react";
import UserForm from "./UserForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <UserForm />
      </div>
    );
  }
}

export default App;
