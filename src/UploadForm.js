import React, { useState } from "react";
import PlayerCard from "./PlayerCard";
import WinnerBanner from "./WinnerBanner";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [players, setPlayers] = useState(null);
  const [winner, setWinner] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to upload file");
      }

      const data = await response.json();

      setPlayers(data.summary.players); // Update to match backend object structure
      setWinner(data.summary.winner);
      setError("");

    } catch (error) {
      console.error("Error:", error);
      setError(error.message || "An error occurred while processing the file.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Age of Analysis</h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <input type="file" onChange={handleFileChange} className="mb-4" />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Upload
        </button>
        {error && <div className="text-red-500 font-bold">{error}</div>}
      </form>
      {winner && <WinnerBanner winner={winner} />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {players &&
          Object.entries(players).map(([key, player]) => (
            <PlayerCard key={key} player={player} />
          ))}
      </div>
    </div>
  );
};

export default UploadForm;
