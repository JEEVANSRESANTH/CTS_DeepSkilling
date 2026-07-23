// HOL 19: Fetch GitHub repos and display
import React, { Component } from 'react';
import GitClient from './GitClient';

class GitClientApp extends Component {
  constructor(props) {
    super(props);
    this.state = { repos: [], username: 'seshadrimr', loading: false };
    this.gitClient = new GitClient();
  }

  fetchRepos = () => {
    this.setState({ loading: true });
    this.gitClient.getRepositories(this.state.username)
      .then(repos => this.setState({ repos, loading: false }))
      .catch(() => this.setState({ loading: false }));
  }

  render() {
    return (
      <div className="container">
        <h2>GitHub Repository Viewer</h2>
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
          <input style={{ width: 250 }} value={this.state.username}
                 onChange={e => this.setState({ username: e.target.value })}
                 placeholder="GitHub username" />
          <button className="btn-primary" onClick={this.fetchRepos}>Fetch Repos</button>
        </div>
        {this.state.loading && <p>Loading...</p>}
        <ul>
          {this.state.repos.map((r, i) => <li key={i} className="card" style={{ padding: '0.5rem 1rem' }}>{r}</li>)}
        </ul>
      </div>
    );
  }
}
export default GitClientApp;
