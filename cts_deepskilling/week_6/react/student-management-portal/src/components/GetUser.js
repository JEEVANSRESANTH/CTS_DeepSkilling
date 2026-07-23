// HOL 17: Consuming REST API with fetch + componentDidMount
import React, { Component } from 'react';

class GetUser extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null, loading: true, error: null };
  }

  componentDidMount() {
    // HOL 17: Fetch user from randomuser API
    fetch('https://api.randomuser.me/')
      .then(res => res.json())
      .then(data => this.setState({ user: data.results[0], loading: false }))
      .catch(err => this.setState({ error: err.message, loading: false }));
  }

  render() {
    const { user, loading, error } = this.state;
    if (loading) return <div className="container"><p>Loading user...</p></div>;
    if (error)   return <div className="container"><p className="error">{error}</p></div>;
    return (
      <div className="container">
        <h2>Random User (REST API via fetch)</h2>
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <img src={user.picture.large} alt={user.name.first}
               style={{ borderRadius: '50%', width: 100, height: 100 }} />
          <div>
            <p><strong>Title:</strong> {user.name.title}</p>
            <p><strong>Name:</strong> {user.name.first} {user.name.last}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Country:</strong> {user.location.country}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default GetUser;
