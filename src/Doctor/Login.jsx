import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = {
      UserID: userID,
      Password: password,
    };

    try {
      const response = await fetch("YOUR_PHP_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Login successful");
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || "Login failed");
      }
    } catch (error) {
      console.error("Error while logging in:", error);
      setErrorMessage("Login failed");
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label htmlFor="UserID">User ID</label>
        <input
          type="text"
          id="UserID"
          placeholder="User ID"
          value={userID}
          onChange={(e) => setUserID(e.target.value)}
        />
        <br />

        <label htmlFor="Password">Password</label>
        <input
          type="password"
          id="Password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <input type="submit" value="Log In" />
        <br />
        <p>{errorMessage}</p>
        or
        <Link to="/Signup">Sign Up</Link>
      </form>
    </div>
  );
}

export default Login;
