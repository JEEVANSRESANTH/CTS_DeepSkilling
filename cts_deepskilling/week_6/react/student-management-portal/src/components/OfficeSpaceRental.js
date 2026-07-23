// HOL 10: JSX syntax, inline CSS, expressions, lists
import React from 'react';

const offices = [
  { id: 1, name: 'TechHub Cowork', rent: 45000, address: 'Anna Nagar, Chennai' },
  { id: 2, name: 'SpaceX Office', rent: 75000, address: 'OMR, Chennai' },
  { id: 3, name: 'InnoSpace',     rent: 55000, address: 'Velachery, Chennai' },
  { id: 4, name: 'WorkNest',      rent: 90000, address: 'Guindy, Chennai' },
];

function OfficeSpaceRental() {
  return (
    <div className="container">
      {/* HOL 10: JSX heading element */}
      <h2>Office Space Rental Portal</h2>

      {/* HOL 10: JSX image */}
      <img src="https://via.placeholder.com/800x200?text=Office+Space"
           alt="Office Space" style={{ width: '100%', borderRadius: 8, marginBottom: '1rem' }} />

      {/* HOL 10: Loop through list of objects */}
      {offices.map(office => (
        <div key={office.id} className="card">
          <h3>{office.name}</h3>
          <p><strong>Address:</strong> {office.address}</p>
          {/* HOL 10: Inline conditional CSS - red if <60000, green if >=60000 */}
          <p>
            <strong>Rent: </strong>
            <span style={{ color: office.rent < 60000 ? 'red' : 'green', fontWeight: 700 }}>
              ₹{office.rent.toLocaleString()}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
export default OfficeSpaceRental;
