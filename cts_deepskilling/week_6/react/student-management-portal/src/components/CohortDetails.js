// HOL 5: CSS Module + inline dynamic styles
import React from 'react';
import styles from '../stylesheets/CohortDetails.module.css';

const cohorts = [
  { id: 1, name: 'DN 5.0 Java FSE', status: 'ongoing', trainer: 'Ravi Kumar', count: 35 },
  { id: 2, name: 'DN 5.0 .NET FSE', status: 'completed', trainer: 'Priya S', count: 30 },
  { id: 3, name: 'DN 4.0 Python', status: 'completed', trainer: 'Suresh M', count: 28 },
];

function CohortDetails() {
  return (
    <div className="container">
      <h2>Cohort Dashboard</h2>
      {cohorts.map(c => (
        <div key={c.id} className={styles.box}>
          {/* HOL 5: Inline dynamic style based on status */}
          <h3 style={{ color: c.status === 'ongoing' ? 'green' : 'blue' }}>{c.name}</h3>
          <dl>
            <dt>Status</dt><dd>{c.status}</dd>
            <dt>Trainer</dt><dd>{c.trainer}</dd>
            <dt>Count</dt><dd>{c.count}</dd>
          </dl>
        </div>
      ))}
    </div>
  );
}
export default CohortDetails;
