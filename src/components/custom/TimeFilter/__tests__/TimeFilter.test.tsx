import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TimeFilter from '../TimeFilter';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

describe('TimeFilter Component', () => {
  it('renders with default props', () => {
    render(<TimeFilter value={null} onChange={() => {}} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('accepts and formats a date string', () => {
    const date = '2023-10-01T12:00:00Z';
    render(<TimeFilter value={date} onChange={() => {}} />);
    expect(screen.getByRole('textbox')).toHaveValue(dayjs(date).format('DD/MM/YYYY hh:mm A'));
  });

  it('calls onChange with ISO string on date accept', () => {
    const handleChange = jest.fn();
    render(<TimeFilter value={null} onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '01/10/2023 12:00 PM' } });
    fireEvent.blur(input);
    expect(handleChange).toHaveBeenCalledWith(expect.stringMatching(/2023-10-01T12:00:00.000Z/));
  });

  it('uses custom date parser and format', () => {
    const customParser = (date: string | Date | null) => (date ? dayjs(date) : null);
    const customFormat = 'YYYY-MM-DD';
    render(<TimeFilter value={'2023-10-01'} onChange={() => {}} dateParser={customParser} printAs={customFormat} />);
    expect(screen.getByRole('textbox')).toHaveValue('2023-10-01');
  });

  it('allows custom date adapter', () => {
    const customAdapter = AdapterDayjs;
    render(<TimeFilter value={null} onChange={() => {}} dateAdapter={customAdapter} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});