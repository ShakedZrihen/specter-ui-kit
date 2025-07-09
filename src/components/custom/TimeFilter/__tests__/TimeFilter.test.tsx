import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TimeFilter } from '../TimeFilter';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

describe('TimeFilter Component', () => {
  const mockOnChange = jest.fn();

  it('renders correctly with default props', () => {
    render(
      <TimeFilter
        label="Select Date"
        onChange={mockOnChange}
        dateAdapter={AdapterDayjs}
      />
    );

    expect(screen.getByText('Select Date')).toBeInTheDocument();
  });

  it('calls onChange with correct date format', () => {
    render(
      <TimeFilter
        label="Select Date"
        onChange={mockOnChange}
        value={dayjs().toISOString()}
        dateAdapter={AdapterDayjs}
      />
    );

    const calendarIcon = screen.getByRole('button');
    fireEvent.click(calendarIcon);

    // Simulate date selection
    const date = dayjs().add(1, 'day');
    fireEvent.click(screen.getByText(date.format('DD')));

    expect(mockOnChange).toHaveBeenCalledWith(date.toISOString());
  });

  it('handles null value correctly', () => {
    render(
      <TimeFilter
        label="Select Date"
        onChange={mockOnChange}
        dateAdapter={AdapterDayjs}
      />
    );

    const trashIcon = screen.getByRole('button', { name: /trash/i });
    fireEvent.click(trashIcon);

    expect(mockOnChange).toHaveBeenCalledWith(null);
  });

  it('supports custom date parser', () => {
    const customDateParser = (date: string | Date) =>
      typeof date === 'string' ? new Date(date) : date;

    render(
      <TimeFilter
        label="Select Date"
        onChange={mockOnChange}
        value={new Date().toISOString()}
        dateAdapter={AdapterDayjs}
        dateParser={customDateParser}
      />
    );

    expect(screen.getByText('Select Date')).toBeInTheDocument();
  });
});