import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TimeFilter from '../TimeFilter';
import dayjs from 'dayjs';

describe('TimeFilter Component', () => {
  it('renders without crashing', () => {
    render(<TimeFilter value={null} onChange={() => {}} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('accepts and formats a Date object', () => {
    const date = new Date('2023-10-01T12:00:00Z');
    render(<TimeFilter value={date} onChange={() => {}} />);
    expect(screen.getByRole('textbox')).toHaveValue(dayjs(date).format('DD/MM/YYYY hh:mm A'));
  });

  it('calls onChange with ISO string when a date is selected', () => {
    const handleChange = jest.fn();
    render(<TimeFilter value={null} onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '01/10/2023 12:00 PM' } });
    fireEvent.blur(input);
    expect(handleChange).toHaveBeenCalledWith(expect.stringMatching(/2023-10-01T12:00:00.000Z/));
  });

  it('uses custom dateParser if provided', () => {
    const customParser = jest.fn((date) => (date ? dayjs(date).add(1, 'day') : null));
    render(<TimeFilter value="2023-10-01" onChange={() => {}} dateParser={customParser} />);
    expect(customParser).toHaveBeenCalledWith("2023-10-01");
  });

  it('uses custom printAs format if provided', () => {
    const date = new Date('2023-10-01T12:00:00Z');
    render(<TimeFilter value={date} onChange={() => {}} printAs="YYYY-MM-DD" />);
    expect(screen.getByRole('textbox')).toHaveValue(dayjs(date).format('YYYY-MM-DD'));
  });
});