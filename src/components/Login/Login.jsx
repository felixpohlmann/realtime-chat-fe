import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");

  return (
    <div className="login">
      <div>
        <p>Welcome</p>
        <input
          type="text"
          placeholder="choose a username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button>Login</button>
      </div>
    </div>
  );
};

export default Login;
