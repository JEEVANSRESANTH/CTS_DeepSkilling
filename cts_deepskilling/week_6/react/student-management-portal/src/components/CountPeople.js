// HOL 8: React State - mall entry/exit counter
import React, { Component } from 'react';

class CountPeople extends Component {
  constructor(props) {
    super(props);
    // HOL 8: State object stores both counters
    this.state = { entryCount: 0, exitCount: 0 };
  }

  UpdateEntry = () => this.setState(prev => ({ entryCount: prev.entryCount + 1 }));
  UpdateExit  = () => this.setState(prev => ({ exitCount:  prev.exitCount  + 1 }));

  render() {
    return (
      <div className="container">
        <h2>Mall Entry/Exit Counter</h2>
        <div className="card">
          <p>People Entered: <strong>{this.state.entryCount}</strong></p>
          <p>People Exited: <strong>{this.state.exitCount}</strong></p>
          <button className="btn-success" onClick={this.UpdateEntry}>Login (Entry)</button>
          <button className="btn-danger"  onClick={this.UpdateExit}>Exit</button>
        </div>
      </div>
    );
  }
}
export default CountPeople;
