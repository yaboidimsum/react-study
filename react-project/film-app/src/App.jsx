import { useState } from "react";
import "./App.css";

const Name = (props) => {
  return <h1>My name is: {props.name}</h1>;
};

const App = () => {
  const name = "React App";
  const isNameShowing = true;
  return (
    <>
      <div className="App">
        <h1>Hello {24 + 45}</h1>
        {isNameShowing ? <h2>{name}</h2> : <h1>There is no name</h1>}
      </div>
      <Name name="Test" />
      <Name name="Test1" />
      <Name name="Test2" />
      <Name name="Test3" />
    </>
  );
};

export default App;
