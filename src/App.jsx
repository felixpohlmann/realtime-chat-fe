import React, { useState, useEffect } from "react";

//components
import Sidebar from "./components/Sidebar/Sidebar";
import Message from "./components/Message/Message";

//services
import messagesService from "./services/messages.service";

//css
import "./App.css";

//svg
import sendIcon from "./svg/send.svg";

const App = () => {
  const [message, setMessage] = useState(null);
  const [messages, setMessages] = useState(null);

  useEffect(async () => {
    const result = await messagesService.getMessages();
    setMessages(result);
  }, []);

  const handleMessage = () => {
    if (message) {
      messagesService.storeMessage(message);
      setMessage("");
    }
  };

  if (!messages) {
    return <p>Loading...</p>;
  }

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
              {messages.map((message, index) => (
                <li key={index}>
                  <Message content={message.content} />
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
            value={message}
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
