import { useState } from "react";
import "../index.css";
import apiClient from "./Axios";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault(); // Prevent form reload
    try {
      console.log(email,password);
      
      const result = await apiClient.post(
        "users/login",
        { email, password },
        { withCredentials: true }
      );
      console.log("Login success:", result.data);
      // You can redirect or show success here
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
    }
  };
  const deleteAccount = async () => {};

  return (
    <div className="form-container">
      <form className="form">
        <input
          type="text"
          placeholder="Your Email"
          onChange={(e) => {
            setEmail(e.target.value.toString()
            );
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit" onClick={(e) =>{ login(e)}}>
          Submit
        </button>
      </form>
      <button className="delete-button" onClick={() => deleteAccount()}>
        Delete account
      </button>
    </div>
  );
};

export default Form;
