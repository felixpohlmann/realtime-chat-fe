import React from "react";

import "./Message.css";

const Message = (props) => {
  return (
    <div className="message">
      <p className="content">{props.content}</p>
      <p className="time">17:24</p>
    </div>
  );
};

export default Message;
