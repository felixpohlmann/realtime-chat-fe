import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");

  const history = useHistory();

  const handleRedirect = () => {
    history.push("chat", { username });
  };

  return (
    <div className="login">
      <div>
        <p>Welcome</p>
        <input
          type="text"
          placeholder="choose a username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleRedirect}>Login</button>
      </div>
    </div>
  );
};

export default Login;
