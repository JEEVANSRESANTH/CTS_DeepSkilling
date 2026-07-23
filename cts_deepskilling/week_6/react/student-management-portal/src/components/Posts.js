// HOL 4: Lifecycle hooks - componentDidMount, componentDidCatch
import React, { Component } from 'react';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [], error: null };
  }

  // HOL 4: loadPosts using Fetch API
  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => this.setState({ posts: data.slice(0, 10) }))
      .catch(err => this.setState({ error: err.message }));
  }

  // HOL 4: componentDidMount fires after first render - ideal for API calls
  componentDidMount() {
    this.loadPosts();
  }

  // HOL 4: componentDidCatch handles errors in child component tree
  componentDidCatch(error, info) {
    alert(`Component Error: ${error.message}`);
    console.error('componentDidCatch:', info);
  }

  render() {
    const { posts, error } = this.state;
    if (error) return <p className="error">Error: {error}</p>;
    return (
      <div className="container">
        <h2>Blog Posts (fetched via componentDidMount)</h2>
        {posts.length === 0 && <p>Loading posts...</p>}
        {posts.map(post => (
          <div key={post.id} className="card">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}
export default Posts;
