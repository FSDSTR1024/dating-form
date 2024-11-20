import { useState } from "react";

import "./basicLoginForm.css";

const BasicLoginForm = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit", event);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    if (formData.username.length < 3) {
      setError("El username debe tener al menos 3 caracteres");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <h2>Basic login form</h2>
      <form onSubmit={handleSubmit}>
        <p>Username</p>
        <input type="text" name="username" onChange={handleChange} />
        <p className="error">{error}</p>
        <p>Password</p>
        <input type="password" name="password" onChange={handleChange} />
        <button type="submit">Entrar</button>
      </form>
      <p>{JSON.stringify({ formData })}</p>
    </div>
  );
};

export default BasicLoginForm;
