import { useState } from "react";
import "./signup.css";
import axios from "axios";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  function handleClick(e) {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  }

  function Signup() {
    const { name, email, address, phone } = user;
    if (name && email && address && phone) {
      axios.post("http://localhost:3002/signup", user);
      alert(`welcome ${name}`);
      let path = "/home";
      navigate(path);
    } else {
      alert("invalid input");
    }
  }

  return (
    <Container maxWidth="lg" className="signup" sx={{ mt: "20vh" }}>
      <h1>Signup</h1>
      <input
        className="input"
        name="name"
        value={user.name}
        onChange={handleClick}
        type="text"
        placeholder="Enter your name"
      ></input>
      <input
        className="input"
        name="email"
        value={user.email}
        onChange={handleClick}
        type="text"
        placeholder="Enter your email"
      ></input>
      <input
        className="input"
        name="address"
        value={user.password}
        onChange={handleClick}
        type="text"
        placeholder="address"
      ></input>
      <input
        className="input"
        name="phone"
        value={user.reEnterPassword}
        onChange={handleClick}
        type="number"
        placeholder="phone number"
      ></input>
      <button className="button" onClick={Signup}>
        signup
      </button>
    </Container>
  );
};

export default Signup;
