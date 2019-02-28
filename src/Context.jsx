import React, { Component, createContext } from 'react';

// Instantiate Context
const MyApp = createContext()

// export Context Provider
export default class MyProvider extends Component {
  state = {
    name: 'Anh',
    age: 100,
    cool: true
  }
  render() {
    return (
      <MyApp.Provider value={{
        state: this.state,
        growAYearOlder: () => this.setState({
          age: this.state.age + 1
        })
      }}>
        {this.props.children}
      </MyApp.Provider>
    )
  }
};

export const Consumer = MyApp.Consumer;