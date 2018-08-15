import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import ButtonGroup from "./ButtonGroup";
import { store } from "./store";
//import reducer from "./reducers";
//import { createStore } from "redux";

//const initialState = { tech: "React " };
//const store = createStore(reducer, initialState);

class App extends Component {
  // the state object has been removed. 
  //it's gonna be redux instead.
  // state = {
  //   tech: "Redux"
  // };

  
  render() {
    return [
      <HelloWorld key={1} tech={store.getState().tech} />,
      <ButtonGroup key={2} technologies={["React", "Elm", "React-redux"]} />
    ];
  }
}

export default App;
