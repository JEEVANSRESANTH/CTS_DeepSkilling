// HOL 14: useContext to consume ThemeContext
import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

function EmployeeCard({ employee }) {
  // HOL 14: Retrieve context value without prop drilling
  const theme = useContext(ThemeContext);
  const isDark = theme === 'dark';
  return (
    <div style={{
      background: isDark ? '#333' : '#fff',
      color: isDark ? '#fff' : '#333',
      padding: '1rem', borderRadius: 8, marginBottom: '0.5rem',
      border: '1px solid #ccc'
    }}>
      <strong>{employee.name}</strong> — {employee.role}
      <button className={isDark ? 'btn-danger' : 'btn-primary'}
              style={{ marginLeft: '1rem', padding: '0.25rem 0.75rem' }}>
        View
      </button>
    </div>
  );
}
export default EmployeeCard;
