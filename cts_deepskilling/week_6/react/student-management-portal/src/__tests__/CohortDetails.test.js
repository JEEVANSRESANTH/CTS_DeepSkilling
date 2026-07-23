import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CohortDetails from '../components/CohortDetails';

describe('Cohort Details Component', () => {
  test('renders without crashing', () => {
    render(<CohortDetails />);
    expect(screen.getByText('Cohort Dashboard')).toBeInTheDocument();
  });

  test('displays ongoing cohort in green', () => {
    render(<CohortDetails />);
    const ongoingTitle = screen.getByText('DN 5.0 Java FSE');
    expect(ongoingTitle).toHaveStyle('color: green');
  });

  test('displays all three cohorts', () => {
    render(<CohortDetails />);
    expect(screen.getByText('DN 5.0 Java FSE')).toBeInTheDocument();
    expect(screen.getByText('DN 5.0 .NET FSE')).toBeInTheDocument();
    expect(screen.getByText('DN 4.0 Python')).toBeInTheDocument();
  });

  test('completed cohorts shown in blue', () => {
    render(<CohortDetails />);
    const completed = screen.getByText('DN 5.0 .NET FSE');
    expect(completed).toHaveStyle('color: blue');
  });
});
