import React, { useState } from "react";
import "../style/Login.css"; // same CSS use kar rahe hain
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const [mobile_no, setMobileNo] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/user/register", {
        name,
        email,
        address,
        password,
        mobile_no,
      });

      if (res && res.data && res.data.message) {
        alert(res.data.message);
      } else {
        alert("User registered, but no message returned!");
      }

    } catch (error) {
      console.error("Registration error:", error);

      if (error.response) {
        // Server responded with an error (like 400 or 500)
        alert("Error: " + error.response.data.message);
      } else if (error.request) {
        // Request was made but no response
        alert("No response from server. Please check if backend is running.");
      } else {
        // Something else (like network/CORS)
        alert("Error: " + error.message);
      }
    }

    console.log({ name, email, password });
  };


  return (
    <div className="login-container">
      <h2>Register Yourself</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Your Name" autocomplete="one-time-code" onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Enter Your Email" autocomplete="one-time-code" onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder="Enter Your Mobile No" autocomplete="one-time-code" onChange={(e) => setMobileNo(e.target.value)} />
        <input type="text" placeholder="Enter Your Address" autocomplete="one-time-code" onChange={(e) => setAddress(e.target.value)} />
        <input type="password" placeholder="Create Your Password" autocomplete="one-time-code" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
