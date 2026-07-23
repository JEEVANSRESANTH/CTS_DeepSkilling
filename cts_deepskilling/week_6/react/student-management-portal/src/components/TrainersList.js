// HOL 6: React Router - list with clickable trainer names
import React from 'react';
import { Link } from 'react-router-dom';
import trainers from './TrainersMock';

function TrainersList() {
  return (
    <div className="container">
      <h2>Trainers List</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {trainers.map(t => (
          <li key={t.trainerId} className="card">
            {/* HOL 6: Link for SPA navigation */}
            <Link to={`/trainers/${t.trainerId}`} style={{ fontWeight: 600, color: '#1976d2' }}>
              {t.name}
            </Link>
            <span style={{ marginLeft: '1rem', color: '#666' }}>{t.technology}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TrainersList;
