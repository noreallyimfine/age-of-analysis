import React from "react";

const PlayerCard = ({ player }) => {
  return (
    <div className="grid grid-cols-2 justify-items-center gap-8 mt-8">
    <div className="border rounded-lg shadow-lg p-4 bg-white">
      <h3 className="text-xl font-bold mb-2">{player.name}</h3>
      <p className="text-gray-700">
        <strong>Civilization:</strong> {player.civ}
      </p>
      <p className="text-gray-700">
        <strong>Dark Age Villagers:</strong> {player.dark_age_vils}
      </p>
      <p className="text-gray-700">
        <strong>EAPM:</strong> {player.eapm}
      </p>
      <p className="text-gray-700">
        <strong>Feudal Research Time:</strong> {player.feudal_research_time}
      </p>
      <p className="text-gray-700">
        <strong>Feudal Landing Time:</strong> {player.feudal_landing_time}
      </p>
      <p className="text-gray-700">
        <strong>Dark Age Idle TC Time:</strong> {player.dark_age_idle_tc_time}
      </p>
      <p className="text-gray-700">
        <strong>Winner:</strong> {player.winner ? "✅ Yes" : "❌ No"}
      </p>
    </div>
    </div>
  );
};

export default PlayerCard;
