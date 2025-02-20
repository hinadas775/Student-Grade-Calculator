import React, { useState } from "react";
import axios from "axios"; // Ensure axios is installed via npm
import "../style/ResetPassword/ResetPassword.css";

const ResetPassword = () => {
  const proImage = "/image/Proposed IIIT Bhagalpur Building1.jpg";

  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = email
      ? { type: "email", email }
      : { type: "phone", phoneNumber };

    try {
      const response = await axios.post(
        "https://api.example.com/reset-password", // Replace with your actual API endpoint
        payload
      );
      alert(response.data.message || "Password reset successfully!");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert(
        error.response?.data?.error || "Failed to send reset request. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reset">
      <img
        src={proImage}
        alt="IIIT Bhagalpur Building"
        className="reset-image"
      />
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="row1">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            disabled={loading}
          />
        </div>
        <h1>Or</h1>
        <div className="row1">
          <label>Phone Number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
            disabled={loading}
          />
        </div>
        <button
          type="submit"
          className="btn-submit"
          disabled={loading}
        >
          {loading ? "Sending..." : "Password Reset Code"}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
