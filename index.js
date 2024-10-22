import React, { useState, useEffect } from "react";
import { createRoot } from 'react-dom/client';
import "./style.css";

function App() {
  const [entries, setEntries] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem("entries"));
    if (storedEntries) {
      setEntries(storedEntries);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !occupation) {
      alert("All fields are required!");
      return;
    }

    const newEntry = { firstName, lastName, occupation };

    if (editIndex !== null) {
      const updatedEntries = entries.map((entry, index) => 
        index === editIndex ? newEntry : entry
      );
      setEntries(updatedEntries);
      setEditIndex(null);
    } else {
      setEntries([...entries, newEntry]);
    }

    setFirstName("");
    setLastName("");
    setOccupation("");
  };

  const handleEdit = (index) => {
    const entry = entries[index];
    setFirstName(entry.firstName);
    setLastName(entry.lastName);
    setOccupation(entry.occupation);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
  };

  const filteredEntries = entries.filter(entry => 
    entry.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.occupation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
  };

  const inputStyle = {
    margin: "5px",
    padding: "10px",
    width: "200px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    padding: "10px 20px",
    margin: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#28a745",
    color: "white",
    cursor: "pointer",
  };

  const tableStyle = {
    width: "80%",
    margin: "auto",
    borderCollapse: "collapse",
  };

  const thStyle = {
    borderBottom: "2px solid #ddd",
    padding: "10px",
    textAlign: "left",
    backgroundColor: "#f2f2f2",
  };

  const tdStyle = {
    borderBottom: "1px solid #ddd",
    padding: "10px",
  };

  return (
    <div className="App" style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h1>Enter Details</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Occupation"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          {editIndex !== null ? "Update" : "Submit"}
        </button>
      </form>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ ...inputStyle, width: "80%", margin: "20px auto" }}
      />
      <h2>Entries</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>First Name</th>
            <th style={thStyle}>Last Name</th>
            <th style={thStyle}>Occupation</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEntries.map((entry, index) => (
            <tr key={index}>
              <td style={tdStyle}>{entry.firstName}</td>
              <td style={tdStyle}>{entry.lastName}</td>
              <td style={tdStyle}>{entry.occupation}</td>
              <td style={tdStyle}>
                <button onClick={() => handleEdit(index)} style={{ ...buttonStyle, backgroundColor: "#007bff" }}>Edit</button>
                <button onClick={() => handleDelete(index)} style={{ ...buttonStyle, backgroundColor: "#dc3545" }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
