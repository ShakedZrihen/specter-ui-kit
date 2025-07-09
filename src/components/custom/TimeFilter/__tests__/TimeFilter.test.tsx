import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TimeFilter from '../TimeFilter';
import dayjs from 'dayjs';

describe('TimeFilter Component', () => {
  it('renders without crashing', () => {
    render(<TimeFilter value={null} onChange={() => {}} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('accepts and formats a date string', () => {
    const dateStr = '2023-10-01T12:00:00Z';
    render(<TimeFilter value={dateStr} onChange={() => {}} />);
    expect(screen.getByDisplayValue(dayjs(dateStr).format('DD/MM/YYYY hh:mm A'))).toBeInTheDocument();
  });

  it('calls onChange with the correct ISO string', () => {
    const handleChange = jest.fn();
    render(<TimeFilter value={null} onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '01/10/2023 12:00 PM' } });
    fireEvent.blur(input);
    expect(handleChange).toHaveBeenCalledWith('2023-10-01T12:00:00.000Z');
  });

  it('handles different date formats with a custom dateParser', () => {
    const customParser = (date) => (date ? dayjs(date, 'MM-DD-YYYY') : null);
    render(<TimeFilter value="10-01-2023" onChange={() => {}} dateParser={customParser} />);
    expect(screen.getByDisplayValue('01/10/2023 12:00 AM')).toBeInTheDocument();
  });

  it('uses a custom dateAdapter', () => {
    const CustomAdapter = AdapterDayjs; // Replace with actual custom adapter if available
    render(<TimeFilter value={null} onChange={() => {}} dateAdapter={CustomAdapter} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});