import React, { Component } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <p>Test</p>
        </Layout>
      </div>
      // <div className="App">
      //   <div className="App-header">
      //     <img className="App-logo" alt="logo" />
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
