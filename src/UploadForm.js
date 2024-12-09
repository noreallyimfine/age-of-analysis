import React, { useState } from "react";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData,
      });
      console.log("Response:", response);

      if (!response.ok) {
        throw new Error("Failed to upload file");
      }

      const data = await response.json();
      console.log("Data:", data);
      setSummary(data.summary);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while uploading the file.");
    }
  };

  return (
    <div>
      <h1>Age of Analysis</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {summary && (
  <div>
    <h2>Match Summary</h2>
    <table>
      <thead>
        <tr>
          <th>Key</th>
          <th>Name</th>
          <th>Civilization</th>
          <th>Dark Age Villagers</th>
          <th>EAPM</th>
          <th>Feudal Research Time</th>
          <th>Feudal Landing Time</th>
          <th>Winner</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(summary).map(([key, player]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{player.name}</td>
            <td>{player.civ}</td>
            <td>{player.dark_age_vils}</td>
            <td>{player.eapm}</td>
            <td>{player.feudal_research_time}</td>
            <td>{player.feudal_landing_time}</td>
            <td>{player.winner ? "Yes" : "No"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}
    </div>
  );
};

export default UploadForm;
