// HOL 12: Conditional rendering - Login/Logout toggle
import React, { Component } from 'react';

class GuestPage extends Component {
  render() {
    return (
      <div>
        <h3>Guest Page - Browse Flights</h3>
        <p>Available Flights:</p>
        <ul>
          <li>Chennai → Mumbai | ₹4,500 | 09:00 AM</li>
          <li>Chennai → Delhi  | ₹6,200 | 02:00 PM</li>
          <li>Chennai → Kolkata| ₹5,100 | 06:30 PM</li>
        </ul>
        <p style={{ color: '#888', marginTop: '0.5rem' }}>Please login to book tickets.</p>
      </div>
    );
  }
}

class UserPage extends Component {
  render() {
    return (
      <div>
        <h3>User Page - Book Your Ticket</h3>
        <p>Select your flight and proceed to book.</p>
        <button className="btn-success">Book Now</button>
      </div>
    );
  }
}

class TicketBooking extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <div className="container">
        <h2>Ticket Booking App</h2>
        <div className="card">
          {/* HOL 12: Conditional rendering via ternary */}
          {isLoggedIn
            ? <button className="btn-danger"  onClick={() => this.setState({ isLoggedIn: false })}>Logout</button>
            : <button className="btn-primary" onClick={() => this.setState({ isLoggedIn: true  })}>Login</button>
          }
          <div style={{ marginTop: '1rem' }}>
            {isLoggedIn ? <UserPage /> : <GuestPage />}
          </div>
        </div>
      </div>
    );
  }
}
export default TicketBooking;
