// HOL 15: Controlled form components - controlled input + textarea
import React, { Component } from 'react';

class ComplaintRegister extends Component {
  constructor(props) {
    super(props);
    this.state = { employeeName: '', complaint: '', refNumber: '' };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // HOL 15: Generate reference number on submit
    const ref = 'REF-' + Date.now();
    alert(`Complaint submitted! Reference Number: ${ref}`);
    this.setState({ refNumber: ref, employeeName: '', complaint: '' });
  }

  render() {
    return (
      <div className="container">
        <h2>Ticket Raising App - Complaint Register</h2>
        <form className="card" onSubmit={this.handleSubmit} style={{ maxWidth: 500 }}>
          <div style={{ marginBottom: '1rem' }}>
            <label>Employee Name</label>
            <input type="text" value={this.state.employeeName}
                   onChange={e => this.setState({ employeeName: e.target.value })}
                   placeholder="Enter your name" required />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Complaint</label>
            <textarea rows={4} value={this.state.complaint}
                      onChange={e => this.setState({ complaint: e.target.value })}
                      placeholder="Describe your complaint..." required />
          </div>
          <button className="btn-primary" type="submit">Submit Complaint</button>
          {this.state.refNumber && (
            <p className="success">Reference: {this.state.refNumber}</p>
          )}
        </form>
      </div>
    );
  }
}
export default ComplaintRegister;
