import React from "react";

const Filter = ({ onFilterInput, filter }) => {
  return (
    <label>
      Find contacts by name:
      <input
        type="text"
        name="filter"
        onChange={onFilterInput}
        value={filter}
      />
    </label>
  );
};

export default Filter;
