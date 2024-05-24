import React, { useContext } from "react";
import context from "../context";

export default function Search() {
  const setName = useContext(context);
  const handleChange = (e) => {
    setName?.setName(e.target.value);
  };

  return (
    <div className="mb-3 d-flex">
      <label for="search" className="form-label">
        Filter by name:
      </label>
      <input
        type="text"
        className="form-control"
        id="search"
        placeholder="Enter college name"
        onChange={handleChange}
      />
    </div>
  );
}
