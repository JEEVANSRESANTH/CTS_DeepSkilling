// HOL 16: Form validation - name (min 5), email (@.), password (min 8)
import React, { Component } from 'react';

class MailRegister extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', password: '', errors: {}, submitted: false };
  }

  validate() {
    const { name, email, password } = this.state;
    const errors = {};
    if (name.length < 5)               errors.name     = 'Name must have at least 5 characters.';
    if (!email.includes('@') || !email.includes('.')) errors.email = 'Email must contain @ and .';
    if (password.length < 8)           errors.password = 'Password must have at least 8 characters.';
    return errors;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
    } else {
      this.setState({ errors: {}, submitted: true });
    }
  }

  render() {
    const { name, email, password, errors, submitted } = this.state;
    return (
      <div className="container">
        <h2>Mail Register App - Form Validation</h2>
        <form className="card" onSubmit={this.handleSubmit} style={{ maxWidth: 450 }}>
          <div style={{ marginBottom: '1rem' }}>
            <label>Name</label>
            <input type="text" value={name} onChange={e => this.setState({ name: e.target.value })} />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Email</label>
            <input type="text" value={email} onChange={e => this.setState({ email: e.target.value })} />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Password</label>
            <input type="password" value={password} onChange={e => this.setState({ password: e.target.value })} />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <button className="btn-primary" type="submit">Register</button>
          {submitted && <p className="success">✓ Registration successful!</p>}
        </form>
      </div>
    );
  }
}
export default MailRegister;
