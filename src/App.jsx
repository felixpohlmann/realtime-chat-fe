import React from "react";

//components
import Sidebar from "./components/Sidebar/Sidebar";
import Message from "./components/Message/Message";

//css
import "./App.css";

//svg
import sendIcon from "./svg/send.svg";

//sampleData
import sampleData from "./sampleData";

const App = () => {
  return (
    <div className="app">
      <div className="app__sidebar">
        <Sidebar />
      </div>
      <div className="app__main">
        <div className="chat">
          <div className="chat__header">
            <div className="contact__pic"></div>
            <div className="contact__name">
              <p>John Due</p>
            </div>
          </div>
          <div className="chat__messages">
            <ul>
              {sampleData.map((message, index) => (
                <li
                  key={index}
                  style={{
                    justifyContent: message.received
                      ? "flex-start"
                      : "flex-end",
                  }}
                >
                  <Message
                    content={message.content}
                    received={message.received}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="input">
          <input type="text" placeholder="Message" />
          <button>
            <img src={sendIcon} alt="send message" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
