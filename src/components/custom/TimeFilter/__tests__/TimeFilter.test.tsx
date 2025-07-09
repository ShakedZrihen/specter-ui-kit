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

  it('accepts a date string and formats it correctly', () => {
    const testDate = '2023-10-10T10:00:00Z';
    render(<TimeFilter value={testDate} onChange={() => {}} />);
    expect(screen.getByRole('textbox')).toHaveValue(dayjs(testDate).format('DD/MM/YYYY hh:mm A'));
  });

  it('calls onChange with correct ISO string on date accept', () => {
    const handleChange = jest.fn();
    render(<TimeFilter value={null} onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '10/10/2023 10:00 AM' } });
    fireEvent.blur(input);
    expect(handleChange).toHaveBeenCalledWith(expect.stringMatching(/2023-10-10T10:00:00.000Z/));
  });

  it('uses custom date parser if provided', () => {
    const customParser = jest.fn((date) => (date ? dayjs(date) : null));
    render(<TimeFilter value="2023-10-10" onChange={() => {}} dateParser={customParser} />);
    expect(customParser).toHaveBeenCalledWith("2023-10-10");
  });

  it('formats date using custom format if provided', () => {
    const testDate = '2023-10-10T10:00:00Z';
    render(<TimeFilter value={testDate} onChange={() => {}} printAs="YYYY-MM-DD" />);
    expect(screen.getByRole('textbox')).toHaveValue(dayjs(testDate).format('YYYY-MM-DD'));
  });
});