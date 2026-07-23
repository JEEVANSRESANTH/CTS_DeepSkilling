// HOL 3: Function component with props
import React from 'react';
import '../stylesheets/mystyle.css';

function CalculateScore({ name, school, total, goal }) {
  const average = (total / goal) * 100;
  return (
    <div className="calculator-container">
      <h2>Student Score Calculator</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>School:</strong> {school}</p>
      <p><strong>Total Score:</strong> {total}</p>
      <p><strong>Goal:</strong> {goal}</p>
      <p className="result">Average Score: {average.toFixed(2)}%</p>
    </div>
  );
}
export default CalculateScore;
