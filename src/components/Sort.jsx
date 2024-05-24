import React, { useContext } from "react";
import context from "../context";

export default function Sort() {
  const setSort = useContext(context)
  const handleChange = (e) => {
    setSort?.setSort(e.target.value);
  };

  return (
    <div className="filter" onChange={handleChange}>
      <select class="form-select" aria-label="Default select example">
        <option selected>Sort By</option>
        <option value="1">Name</option>
        <option value="2">Rankings</option>
        <option value="3">Fees</option>
        <option value="4">Reverse</option>
        <option value="5">Rating</option>
      </select>
    </div>
  );
}
