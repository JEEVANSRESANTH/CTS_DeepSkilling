// HOL 14: No prop-drilling needed - theme from context
import React from 'react';
import EmployeeCard from './EmployeeCard';

const employees = [
  { id: 1, name: 'Jeevan',  role: 'Java FSE' },
  { id: 2, name: 'Ravi',    role: 'Architect' },
  { id: 3, name: 'Priya',   role: '.NET FSE'  },
];

function EmployeesList() {
  return (
    <div>
      {employees.map(e => <EmployeeCard key={e.id} employee={e} />)}
    </div>
  );
}
export default EmployeesList;
