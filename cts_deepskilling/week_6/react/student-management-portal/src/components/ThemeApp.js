// HOL 14: ThemeContext Provider wraps the tree
import React, { useState } from 'react';
import ThemeContext from '../context/ThemeContext';
import EmployeesList from './EmployeesList';

function ThemeApp() {
  const [theme, setTheme] = useState('light');
  return (
    <div className="container">
      <h2>Employee Management — Context API Theme</h2>
      {/* HOL 14: Provider sets value for all nested consumers */}
      <ThemeContext.Provider value={theme}>
        <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
                className="btn-primary" style={{ marginBottom: '1rem' }}>
          Toggle Theme (current: {theme})
        </button>
        <EmployeesList />
      </ThemeContext.Provider>
    </div>
  );
}
export default ThemeApp;
