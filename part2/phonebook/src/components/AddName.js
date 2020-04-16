import React from 'react';

const AddName = ({ name, handleNameChange }) => {
  return (
    <form>
      <h3>Add a new</h3>
      name: <input value={name} onChange={handleNameChange} />
    </form>
  );
};

export default AddName;
