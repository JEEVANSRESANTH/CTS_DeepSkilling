// HOL 11: Event handling - synthetic events, multiple method calls, argument passing
import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = { rupees: '', euros: '' };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const euros = (parseFloat(this.state.rupees) / 89.5).toFixed(2);
    this.setState({ euros });
  }

  render() {
    return (
      <div style={{ marginTop: '1rem', padding: '1rem', background: '#e3f2fd', borderRadius: 8 }}>
        <h4>Currency Converter (₹ → €)</h4>
        <form onSubmit={this.handleSubmit}>
          <input type="number" placeholder="Enter Rupees" value={this.state.rupees}
                 onChange={e => this.setState({ rupees: e.target.value })} style={{ width: 200, marginRight: 8 }} />
          <button className="btn-primary" type="submit">Convert</button>
        </form>
        {this.state.euros && <p style={{ marginTop: '0.5rem' }}>€ {this.state.euros}</p>}
      </div>
    );
  }
}

class EventExamples extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, message: '' };
  }

  increment    = () => this.setState(p => ({ counter: p.counter + 1 }));
  sayHello     = () => this.setState({ message: 'Hello from event handler!' });
  // HOL 11: Multiple methods on one button
  handleIncrementWithHello = () => { this.increment(); this.sayHello(); }
  // HOL 11: Passing argument to handler
  handleWelcome = (msg) => this.setState({ message: msg });
  // HOL 11: Synthetic event
  handleOnPress = (e) => { e.preventDefault(); this.setState({ message: 'I was clicked (synthetic event)' }); }

  render() {
    return (
      <div className="container">
        <h2>Event Handling Examples</h2>
        <div className="card">
          <p>Counter: <strong>{this.state.counter}</strong></p>
          {/* HOL 11: Multiple methods invoked on single button click */}
          <button className="btn-primary" onClick={this.handleIncrementWithHello}>Increment + Say Hello</button>
          <button className="btn-danger"  onClick={() => this.setState(p => ({ counter: p.counter - 1 }))}>Decrement</button>
          {/* HOL 11: Argument passing */}
          <button className="btn-success" onClick={() => this.handleWelcome('Welcome!')}>Say Welcome</button>
          {/* HOL 11: Synthetic event */}
          <button onClick={this.handleOnPress}>OnPress (Synthetic Event)</button>
          {this.state.message && <p style={{ marginTop: '0.75rem', color: '#1976d2' }}>{this.state.message}</p>}
          <CurrencyConvertor />
        </div>
      </div>
    );
  }
}
export default EventExamples;
