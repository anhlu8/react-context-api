import React, { Component } from 'react';
import MyProvider from "./Context";
import Test from './components/Test';
class App extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <p>I am the app</p>
          <Test />
        </div>
      </MyProvider>
    );
  }
}


export default App;


