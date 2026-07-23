import axios from 'axios';
import GitClient from '../components/GitClient';

jest.mock('axios');

describe('Git Client Tests', () => {
  test('should return repository names for techiesyed', async () => {
    const mockRepos = [
      { name: 'Digital-Nurture-JavaFSE' },
      { name: 'spring-boot-demo' },
      { name: 'react-projects' }
    ];
    axios.get.mockResolvedValue({ data: mockRepos });

    const client = new GitClient();
    const repos = await client.getRepositories('techiesyed');

    expect(repos).toHaveLength(3);
    expect(repos[0]).toBe('Digital-Nurture-JavaFSE');
    expect(axios.get).toHaveBeenCalledWith('https://api.github.com/users/techiesyed/repos');
  });
});
