import React, { useEffect } from 'react';

const Filter = ({ persons }) => {
  useEffect(() => {
    const results = person.filter((people) =>
      people.name.toLowerCase().includes(setPersons)
    );
    return results;
  });

  return <div>{results}</div>;
};

export default Filter;
