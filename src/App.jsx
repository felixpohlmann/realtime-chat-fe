import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";

//config
import apiConfig from "./config/api.config";

//components
import Sidebar from "./components/Sidebar/Sidebar";
import Message from "./components/Message/Message";

//services
import messagesService from "./services/messages.service";

//css
import "./App.css";

//svg
import sendIcon from "./svg/send.svg";

const App = (props) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(null);
  const [username, setUsername] = useState("Hallo Welt");

  const chatContainer = useRef(0);

  useEffect(async () => {
    const result = await messagesService.getMessages();
    setMessages(result);
    scrollDown();

    const socket = io(`${apiConfig.apiEnpointLocal}`);
    socket.on("newMessage", async (data) => {
      const result = await messagesService.getMessages();
      setMessages(result);
      scrollDown();
    });

    console.log(props);
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
              <p>Chat</p>
            </div>
            {/* temporary */}
            <p className="Username">User: {props.location.state.username}</p>
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
