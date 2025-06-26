import { useState } from "react";
import "../index.css";
import apiClient from "./Axios";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const login = async (e) => {
    e.preventDefault(); // Prevent form reload
    try {
      const result = await apiClient.post(
        "users/login",
        { email, password },
        { withCredentials: true }
      );
      setToken(result?.data?.token);
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
    }
  };
  const deleteAccount = async () => {
    if (!token) {
      alert("You must be logged in to delete the account.");
      return;
    }

    try {
      const result = await apiClient.delete("users/delete", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
      console.log("Account deleted:", result.data);
    } catch (error) {
      console.error("Delete failed:", error.response?.data || error.message);
    }
  };

  return (
    <div className="form-container">
      <form className="form">
        <input
          type="text"
          placeholder="Your Email"
          onChange={(e) => {
            setEmail(e.target.value.toString());
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={(e) => {
            login(e);
          }}
        >
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
