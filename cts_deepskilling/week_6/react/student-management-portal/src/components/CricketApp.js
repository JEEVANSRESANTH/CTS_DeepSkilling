// HOL 9: ES6 features - map, arrow, destructuring, spread
import React from 'react';

const players = [
  { name: 'Rohit Sharma', score: 85 }, { name: 'Virat Kohli', score: 91 },
  { name: 'KL Rahul', score: 62 },    { name: 'Shubman Gill', score: 78 },
  { name: 'Hardik Pandya', score: 55 },{ name: 'Rishabh Pant', score: 88 },
  { name: 'Ravindra Jadeja', score: 45 },{ name: 'Jasprit Bumrah', score: 20 },
  { name: 'Mohammed Shami', score: 15 },{ name: 'Kuldeep Yadav', score: 30 },
  { name: 'Axar Patel', score: 50 },
];

// HOL 9: ES6 destructuring
const [odd1, even1, odd2, even2, ...rest] = players;

// HOL 9: Spread - merge two arrays
const T20players     = [{ name: 'T20 Player A', score: 95 }, { name: 'T20 Player B', score: 70 }];
const RanjiPlayers   = [{ name: 'Ranji Player X', score: 88 }, { name: 'Ranji Player Y', score: 60 }];
const mergedPlayers  = [...T20players, ...RanjiPlayers];

function ListofPlayers() {
  // HOL 9: map() + arrow function
  const allPlayers = players.map(p => <li key={p.name}>{p.name} — Score: {p.score}</li>);
  // HOL 9: filter() with arrow function
  const lowScorers = players.filter(p => p.score < 70).map(p => <li key={p.name}>{p.name} ({p.score})</li>);

  return (
    <div>
      <h3>All Players (ES6 map)</h3>
      <ul>{allPlayers}</ul>
      <h3>Players with score below 70 (ES6 filter + arrow)</h3>
      <ul>{lowScorers}</ul>
    </div>
  );
}

function IndianPlayers() {
  return (
    <div>
      <h3>Destructuring: Odd & Even Team</h3>
      <p>Odd Team: {odd1.name}, {odd2.name}</p>
      <p>Even Team: {even1.name}, {even2.name}</p>
      <h3>Spread: Merged T20 + Ranji Players</h3>
      <ul>{mergedPlayers.map(p => <li key={p.name}>{p.name} — {p.score}</li>)}</ul>
    </div>
  );
}

// HOL 9: Conditional rendering via flag
function CricketApp({ flag = true }) {
  return (
    <div className="container">
      <h2>Cricket App (ES6 Features)</h2>
      <div className="card">
        {flag ? <ListofPlayers /> : <IndianPlayers />}
      </div>
    </div>
  );
}
export default CricketApp;
