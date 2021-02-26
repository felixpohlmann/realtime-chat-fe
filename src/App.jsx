import React, { useState } from "react";

//components
import Sidebar from "./components/Sidebar/Sidebar";
import Message from "./components/Message/Message";

//services
import messageService from "./services/message.service";

//css
import "./App.css";

//svg
import sendIcon from "./svg/send.svg";

//sampleData
import sampleData from "./sampleData";

const App = () => {
  const [message, setMessage] = useState(null);

  const handleMessage = () => {
    messageService.storeMessage(message);
  };
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
              <p>Dälen-Chat</p>
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
          <input
            type="text"
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={handleMessage}>
            <img src={sendIcon} alt="send message" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
