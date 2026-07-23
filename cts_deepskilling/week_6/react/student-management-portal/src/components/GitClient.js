// HOL 19: axios module for GitHub API calls - unit tested with Jest mock
import axios from 'axios';

class GitClient {
  getRepositories(username) {
    return axios.get(`https://api.github.com/users/${username}/repos`)
      .then(res => res.data.map(repo => repo.name));
  }
}
export default GitClient;
