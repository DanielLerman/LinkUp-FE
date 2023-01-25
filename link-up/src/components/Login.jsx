import React, { useContext } from "react";
import {LinkUpContext} from "../context/context.jsx"



function Login() {
    const { user, setUser } = useContext(LinkUpContext);

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    onClose();

    const data = { email, password };
    try {
      const res = await axios.post("http://localhost:8080/login", data);

     
      alert("User logged successfully");
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.id);
     
     setLoginUser(true);
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <p>We've missed you!</p>
      <label className="email-label">
        Email:
        <input className="input-log" type="email" name="email" />
      </label>
      <label>
        Password:
        <input className="input-log" type="password" name="password" />
      </label>

      <div className="btns">
        <button type="submit"> Login</button>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </form>
  );
}

export default Login;