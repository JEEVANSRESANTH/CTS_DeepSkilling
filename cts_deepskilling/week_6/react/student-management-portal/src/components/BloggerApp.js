// HOL 13: Multiple conditional rendering - ternary, &&, switch, element variable
import React, { useState } from 'react';

const BookDetails = () => (
  <div>
    <h3>📚 Book Details</h3>
    <p>Title: Clean Code | Author: Robert C. Martin | Pages: 464</p>
  </div>
);

const BlogDetails = () => (
  <div>
    <h3>📝 Blog Details</h3>
    <p>Title: Spring Boot Microservices | Author: Jeevan | Reads: 1,200</p>
  </div>
);

const CourseDetails = () => (
  <div>
    <h3>🎓 Course Details</h3>
    <p>Course: DN 5.0 Java FSE | Duration: 8 weeks | Enrolled: 350</p>
  </div>
);

function BloggerApp() {
  const [active, setActive] = useState('book');

  // HOL 13: Element variable pattern
  let content;
  switch (active) {
    case 'book':   content = <BookDetails />;   break;
    case 'blog':   content = <BlogDetails />;   break;
    case 'course': content = <CourseDetails />; break;
    default:       content = null;
  }

  return (
    <div className="container">
      <h2>Blogger App (Conditional Rendering)</h2>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <button className="btn-primary" onClick={() => setActive('book')}>Books</button>
        <button className="btn-primary" onClick={() => setActive('blog')}>Blogs</button>
        <button className="btn-primary" onClick={() => setActive('course')}>Courses</button>
      </div>
      {/* HOL 13: && short-circuit rendering */}
      {active === 'book'   && <p style={{ color: '#888' }}>Showing book section</p>}
      <div className="card">{content}</div>
    </div>
  );
}
export default BloggerApp;
