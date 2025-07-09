import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TimeFilter from '../TimeFilter';
import dayjs from 'dayjs';

describe('TimeFilter Component', () => {
  it('renders without crashing', () => {
    render(<TimeFilter value={null} onChange={() => {}} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('accepts different date formats', () => {
    const date = new Date();
    render(<TimeFilter value={date} onChange={() => {}} />);
    expect(screen.getByRole('textbox')).toHaveValue(dayjs(date).format('DD/MM/YYYY hh:mm A'));
  });

  it('calls onChange with ISO string on date selection', () => {
    const handleChange = jest.fn();
    render(<TimeFilter value={null} onChange={handleChange} />);
    
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '01/01/2023 12:00 AM' } });
    fireEvent.blur(screen.getByRole('textbox'));

    expect(handleChange).toHaveBeenCalledWith(expect.stringMatching(/2023-01-01T00:00:00.000Z/));
  });

  it('uses custom date parser if provided', () => {
    const customParser = jest.fn((date) => (date ? dayjs(date) : null));
    render(<TimeFilter value="2023-01-01" onChange={() => {}} dateParser={customParser} />);
    expect(customParser).toHaveBeenCalledWith("2023-01-01");
  });

  it('formats date according to printAs prop', () => {
    const date = new Date();
    render(<TimeFilter value={date} onChange={() => {}} printAs="YYYY-MM-DD" />);
    expect(screen.getByRole('textbox')).toHaveValue(dayjs(date).format('YYYY-MM-DD'));
  });
});