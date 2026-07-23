// Student Management Portal - HOL 4 through HOL 19 unified app
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Posts            from './components/Posts';            // HOL 4
import CohortDetails    from './components/CohortDetails';    // HOL 5
import TrainersList     from './components/TrainersList';     // HOL 6
import TrainerDetail    from './components/TrainerDetail';    // HOL 6
import OnlineShopping   from './components/OnlineShopping';   // HOL 7
import CountPeople      from './components/CountPeople';      // HOL 8
import CricketApp       from './components/CricketApp';       // HOL 9
import OfficeSpaceRental from './components/OfficeSpaceRental'; // HOL 10
import EventExamples    from './components/EventExamples';    // HOL 11
import TicketBooking    from './components/TicketBooking';    // HOL 12
import BloggerApp       from './components/BloggerApp';       // HOL 13
import ThemeApp         from './components/ThemeApp';         // HOL 14
import ComplaintRegister from './components/ComplaintRegister'; // HOL 15
import MailRegister     from './components/MailRegister';     // HOL 16
import GetUser          from './components/GetUser';          // HOL 17
import GitClientApp     from './components/GitClientApp';     // HOL 19

const navLinks = [
  ['/posts',       'HOL4: Blog Posts'],
  ['/cohorts',     'HOL5: Cohorts'],
  ['/trainers',    'HOL6: Trainers'],
  ['/shopping',    'HOL7: Shopping'],
  ['/counter',     'HOL8: Counter'],
  ['/cricket',     'HOL9: Cricket'],
  ['/offices',     'HOL10: Offices'],
  ['/events',      'HOL11: Events'],
  ['/tickets',     'HOL12: Tickets'],
  ['/blogger',     'HOL13: Blogger'],
  ['/theme',       'HOL14: Theme'],
  ['/complaint',   'HOL15: Complaint'],
  ['/register',    'HOL16: Register'],
  ['/user',        'HOL17: Fetch User'],
  ['/gitclient',   'HOL19: Git Client'],
];

function Home() {
  return (
    <div className="container">
      <h2>Student Management Portal</h2>
      <p style={{ color: '#666', marginBottom: '1rem' }}>
        React HOL 4–19 — select a hands-on from the nav above.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
        {navLinks.map(([path, label]) => (
          <Link key={path} to={path}
                style={{ padding: '0.5rem 1rem', background: '#1976d2', color: 'white',
                         borderRadius: 4, textDecoration: 'none' }}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav style={{ flexWrap: 'wrap' }}>
        <Link to="/" style={{ fontWeight: 700 }}>🏠 Portal</Link>
        {navLinks.map(([path, label]) => (
          <Link key={path} to={path} style={{ fontSize: '0.85rem' }}>{label}</Link>
        ))}
      </nav>
      <Routes>
        <Route path="/"               element={<Home />} />
        <Route path="/posts"          element={<Posts />} />
        <Route path="/cohorts"        element={<CohortDetails />} />
        <Route path="/trainers"       element={<TrainersList />} />
        <Route path="/trainers/:id"   element={<TrainerDetail />} />
        <Route path="/shopping"       element={<OnlineShopping />} />
        <Route path="/counter"        element={<CountPeople />} />
        <Route path="/cricket"        element={<CricketApp flag={true} />} />
        <Route path="/offices"        element={<OfficeSpaceRental />} />
        <Route path="/events"         element={<EventExamples />} />
        <Route path="/tickets"        element={<TicketBooking />} />
        <Route path="/blogger"        element={<BloggerApp />} />
        <Route path="/theme"          element={<ThemeApp />} />
        <Route path="/complaint"      element={<ComplaintRegister />} />
        <Route path="/register"       element={<MailRegister />} />
        <Route path="/user"           element={<GetUser />} />
        <Route path="/gitclient"      element={<GitClientApp />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
