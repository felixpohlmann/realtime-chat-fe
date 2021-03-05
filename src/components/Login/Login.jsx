import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");

  const history = useHistory();

  const handleRedirect = () => {
    history.push("chat", { username });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      handleRedirect();
    }
  };

  return (
    <div className="login">
      <div>
        <p>Welcome</p>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          onKeyPress={onKeyPress}
        />
        <button onClick={handleRedirect}>Login</button>
      </div>
    </div>
  );
};

export default Login;
