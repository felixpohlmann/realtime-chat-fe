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
      <div className="app__main">
        <div className="chat">
          <div className="chat__header">chat header</div>
          <div className="chat__messages">chat messages</div>
        </div>
      </div>
    </div>
  );
};

export default App;
