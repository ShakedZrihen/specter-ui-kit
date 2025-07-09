import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TimeFilter from '../TimeFilter';
import dayjs from 'dayjs';

describe('TimeFilter Component', () => {
  const mockOnChange = jest.fn();

  it('renders without crashing', () => {
    render(<TimeFilter value={null} onChange={mockOnChange} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('accepts and formats a Date object', () => {
    const date = new Date(2023, 9, 1, 12, 0);
    render(<TimeFilter value={date} onChange={mockOnChange} />);
    expect(screen.getByDisplayValue(dayjs(date).format('DD/MM/YYYY hh:mm A'))).toBeInTheDocument();
  });

  it('accepts and formats an ISO string', () => {
    const isoString = '2023-10-01T12:00:00.000Z';
    render(<TimeFilter value={isoString} onChange={mockOnChange} />);
    expect(screen.getByDisplayValue(dayjs(isoString).format('DD/MM/YYYY hh:mm A'))).toBeInTheDocument();
  });

  it('calls onChange with ISO string on date select', () => {
    render(<TimeFilter value={null} onChange={mockOnChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '01/10/2023 12:00 PM' } });
    fireEvent.blur(input);
    expect(mockOnChange).toHaveBeenCalledWith('2023-10-01T12:00:00.000Z');
  });

  it('handles null value gracefully', () => {
    render(<TimeFilter value={null} onChange={mockOnChange} />);
    expect(screen.getByRole('textbox')).toHaveValue('');
  });

  it('uses custom date parser if provided', () => {
    const customParser = jest.fn((date) => (date ? dayjs(date).add(1, 'day') : null));
    render(<TimeFilter value="2023-10-01" onChange={mockOnChange} dateParser={customParser} />);
    expect(customParser).toHaveBeenCalledWith("2023-10-01");
  });
});