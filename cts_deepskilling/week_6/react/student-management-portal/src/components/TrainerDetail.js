// HOL 6: Route params - trainer detail page
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import trainers from './TrainersMock';

function TrainerDetail() {
  const { id } = useParams();
  const trainer = trainers.find(t => t.trainerId === parseInt(id));
  if (!trainer) return <div className="container"><p>Trainer not found.</p></div>;
  return (
    <div className="container">
      <div className="card">
        <h2>{trainer.name}</h2>
        <p><strong>Email:</strong> {trainer.email}</p>
        <p><strong>Phone:</strong> {trainer.phone}</p>
        <p><strong>Technology:</strong> {trainer.technology}</p>
        <p><strong>Skills:</strong> {trainer.skills}</p>
      </div>
      <Link to="/trainers">← Back to Trainers</Link>
    </div>
  );
}
export default TrainerDetail;
