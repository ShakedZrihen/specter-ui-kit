import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TimeFilter from '../TimeFilter';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

describe('TimeFilter Component', () => {
  it('renders without crashing', () => {
    render(<TimeFilter value={null} onChange={() => {}} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('accepts and formats a date string', () => {
    const date = '2023-10-10T10:00:00Z';
    render(<TimeFilter value={date} onChange={() => {}} />);
    expect(screen.getByRole('textbox')).toHaveValue(dayjs(date).format('DD/MM/YYYY hh:mm A'));
  });

  it('calls onChange with the correct date format', () => {
    const handleChange = jest.fn();
    render(<TimeFilter value={null} onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '10/10/2023 10:00 AM' } });
    fireEvent.blur(input);
    expect(handleChange).toHaveBeenCalledWith(expect.stringContaining('2023-10-10T10:00:00'));
  });

  it('uses a custom date parser', () => {
    const customParser = jest.fn((date) => (date ? dayjs(date) : null));
    render(<TimeFilter value="2023-10-10" onChange={() => {}} dateParser={customParser} />);
    expect(customParser).toHaveBeenCalledWith('2023-10-10');
  });

  it('supports custom date adapters', () => {
    const CustomAdapter = AdapterDayjs;
    render(<TimeFilter value={null} onChange={() => {}} dateAdapter={CustomAdapter} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});