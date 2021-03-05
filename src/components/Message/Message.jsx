import React from "react";

import "./Message.css";

const Message = (props) => {
  return (
    <div className="message">
      <p className="content">{props.message.content}</p>
      {props.showName ? <p className="time">{props.message.sentby}</p> : null}
    </div>
  );
};

export default Message;
