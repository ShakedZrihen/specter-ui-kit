import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TimeFilter } from '../TimeFilter';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

describe('TimeFilter Component', () => {
  it('renders without crashing', () => {
    render(<TimeFilter value={null} onChange={() => {}} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('accepts a date string and formats it correctly', () => {
    const date = '2023-10-05T14:48:00.000Z';
    render(<TimeFilter value={date} onChange={() => {}} />);
    expect(screen.getByDisplayValue(dayjs(date).format('DD/MM/YYYY hh:mm A'))).toBeInTheDocument();
  });

  it('calls onChange with the correct ISO string', () => {
    const handleChange = jest.fn();
    render(<TimeFilter value={null} onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '05/10/2023 02:48 PM' } });
    fireEvent.blur(input);
    expect(handleChange).toHaveBeenCalledWith('2023-10-05T14:48:00.000Z');
  });

  it('uses a custom date parser if provided', () => {
    const customParser = jest.fn((date) => dayjs(date));
    render(<TimeFilter value="2023-10-05" onChange={() => {}} dateParser={customParser} />);
    expect(customParser).toHaveBeenCalledWith("2023-10-05");
  });

  it('allows custom date adapter injection', () => {
    const CustomAdapter = jest.fn(AdapterDayjs);
    render(<TimeFilter value={null} onChange={() => {}} dateAdapter={CustomAdapter} />);
    expect(CustomAdapter).toHaveBeenCalled();
  });
});