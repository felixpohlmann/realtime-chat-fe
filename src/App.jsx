import React, { useState, useEffect, useRef } from "react";

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
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(null);

  const chatContainer = useRef(0);

  let intervalID = null;

  useEffect(async () => {
    const result = await messagesService.getMessages();
    setMessages(result);
    scrollDown();

    const interval = setInterval(async () => {
      const result = await messagesService.getMessages();
      setMessages(result);
      scrollDown();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleMessage = () => {
    if (message) {
      messagesService.storeMessage(message);
      setMessage("");
    }
    scrollDown();
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      handleMessage();
    }
  };

  const scrollDown = () => {
    const scroll =
      chatContainer.current.scrollHeight - chatContainer.current.clientHeight;
    chatContainer.current.scrollTo(0, scroll);
  };

  if (!messages) {
    return <p>Loading... ihr keks</p>;
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
          <div className="chat__messages" ref={chatContainer}>
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
            onKeyPress={(e) => onKeyPress(e)}
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
