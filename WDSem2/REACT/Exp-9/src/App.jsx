import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  // Using useEffect to simulate fetching API data when the component loads
  useEffect(() => {
    const fetchInitialData = async () => {
      // Simulating a network delay
      setTimeout(() => {
        setUsers([{ name: "ABCD", email: "abcd@gmail.com" }]);
      }, 500);
    };
    fetchInitialData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation check
    if (formData.name && formData.email && formData.password) {
      // Add new user to the list
      setUsers([...users, { name: formData.name, email: formData.email }]);
      
      // Show success message
      setMessage("Registration Successful!");
      
      // Clear the form fields
      setFormData({ name: "", email: "", password: "" });

      // Automatically hide the success message after 3 seconds
      setTimeout(() => setMessage(""), 3000);
    } else {
      setMessage("Error: Please fill all fields.");
    }
  };

  return (
    <div className="app-container">
      <div className="form-card">
        <h2>Registration Form</h2>
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Register</button>
        </form>

        {/* Display Success or Error Message */}
        {message && (
          <p className={`message ${message.includes("Successful") ? "success" : "error"}`}>
            {message}
          </p>
        )}

        {/* Display Registered Users List */}
        {users.length > 0 && (
          <div className="users-list-container">
            <h3>Registered Users</h3>
            <ul>
              {users.map((user, index) => (
                <li key={index}>
                  {user.name} - {user.email}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;