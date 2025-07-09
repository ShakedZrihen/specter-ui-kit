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
    expect(handleChange).toHaveBeenCalledWith(dayjs('2023-10-10T10:00:00').format());
  });

  it('supports custom date parsers', () => {
    const customParser = (date) => (date ? dayjs(date).add(1, 'day') : null);
    render(<TimeFilter value="2023-10-10" onChange={() => {}} dateParser={customParser} />);
    expect(screen.getByRole('textbox')).toHaveValue(dayjs('2023-10-11').format('DD/MM/YYYY hh:mm A'));
  });

  it('supports custom date formats', () => {
    render(<TimeFilter value="2023-10-10" onChange={() => {}} printAs="YYYY-MM-DD" />);
    expect(screen.getByRole('textbox')).toHaveValue('2023-10-10');
  });
});