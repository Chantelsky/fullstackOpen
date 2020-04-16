import React from 'react';

const AddNumber = ({ value, handleNumberChange }) => {
  return (
    <form>
      number:{' '}
      <input type='number' value={value} onChange={handleNumberChange} />
    </form>
  );
};

export default AddNumber;
