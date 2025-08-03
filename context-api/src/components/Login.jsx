import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const { setUserDetails } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserDetails({ userName, pass });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        style={{ marginBottom: "10px", display: "block" }}
      />
      <input
        type="text"
        placeholder="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        style={{ marginBottom: "10px", display: "block" }}
      />
      <button
        onClick={handleSubmit}
        style={{ display: "block", alignItems: "center", justifyContent:"center" }}
      >
        Submit
      </button>
    </div>
  );
};

export default Login;
