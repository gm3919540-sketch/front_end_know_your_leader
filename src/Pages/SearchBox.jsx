import React, { useState } from 'react';

function SearchBox({ onSearch, onReset }) {

  const [name, setName] = useState("");
  const [party, setParty] = useState("");
  const [state, setState] = useState("");
  const [constituency, setConstituency] = useState("");

  const handleSearch = () => {
    onSearch(
      name.trim() === "" ? null : name,
      party.trim() === "" ? null : party,
      state.trim() === "" ? null : state,
      constituency.trim() === "" ? null : constituency
    );
  };

  const handleResetClick = () => {
    setName("");
    setParty("");
    setState("");
    setConstituency("");
    onReset();
  };

  return (
    <div className="p-4 flex flex-wrap gap-4">

      <input
        type="text"
        placeholder="Candidate Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border px-3 py-2 rounded"
      />

      <select
        value={party}
        onChange={(e) => setParty(e.target.value)}
        className="border px-3 py-2 rounded"
      >
        <option value="">Select Party</option>
        <option value="BJP">BJP</option>
        <option value="INC">INC</option>
        <option value="People's Reform Party">People's Reform Party</option>
      </select>

      <select
        value={state}
        onChange={(e) => setState(e.target.value)}
        className="border px-3 py-2 rounded"
      >
        <option value="">Select State</option>
        <option value="Himachal Pradesh">Himachal Pradesh</option>
        <option value="Punjab">Punjab</option>
      </select>

      <input
        type="text"
        placeholder="Constituency"
        value={constituency}
        onChange={(e) => setConstituency(e.target.value)}
        className="border px-3 py-2 rounded"
      />

      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Search
      </button>

      <button
        onClick={handleResetClick}
        className="bg-gray-400 text-white px-4 py-2 rounded"
      >
        Reset
      </button>

    </div>
  );
}

export default SearchBox;