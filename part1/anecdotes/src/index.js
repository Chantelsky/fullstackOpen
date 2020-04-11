import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = ({ title }) => <h1>{title}</h1>;

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(new Array(anecdotes.length).fill(0));

  const handleReset = () => {
    selected > anecdotes.length - 2
      ? setSelected(0)
      : setSelected(selected + 1);
  };

  const addVote = () => {
    const countCopy = [...count];
    countCopy[selected] += 1;
    setCount(countCopy);
  };

  const findMaxVotes = (arr) => arr.indexOf(Math.max(...arr));

  return (
    <>
      <Header title={'Anecdote of the day'} />
      {props.anecdotes[selected]}
      <p>has {count[selected]} points</p>
      <div>
        <button onClick={addVote}>vote</button>
        <button onClick={handleReset}>Next anecdote</button>
      </div>
      <Header title={'Anecdote with the most votes'} />
      <div>{props.anecdotes[findMaxVotes(count)]}</div>
    </>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
