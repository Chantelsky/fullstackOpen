import React from 'react';

const Results = ({ name, number }) => {
  return (
    <>
      <h2>Numbers</h2>
      <p>Name: {name}</p>
      <p>Number:{number}</p>
    </>
  );
};

export default Results;
