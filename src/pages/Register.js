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
    try{
      const res = await axios.post("http://127.0.0.1:8000/api/user/register",{
        name,
        email,
        address,
        password,
        mobile_no,
      });
      alert(res.data.message);

    }catch(error){
      alert("Error : " + error.response.data.message);
    }
    console.log({ name, email, password });
  };

  return (
    <div className="login-container">
      <h2>Register Yourself</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
         <input type="text" placeholder="Mobile No" onChange={(e) => setMobileNo(e.target.value)} />
          <input type="text" placeholder="Address" onChange={(e) => setAddress(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
