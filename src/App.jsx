import React from "react";

//components
import Sidebar from "./components/Sidebar/Sidebar";

//css
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="app__sidebar">
        <Sidebar />
      </div>
      <div className="app__main"></div>
    </div>
  );
};

export default App;
