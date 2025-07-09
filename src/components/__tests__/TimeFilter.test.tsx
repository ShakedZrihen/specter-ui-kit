import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TimeFilter from '../TimeFilter';
import dayjs from 'dayjs';

describe('TimeFilter Component', () => {
  const mockOnChange = jest.fn();

  it('renders without crashing', () => {
    render(<TimeFilter value={null} onChange={mockOnChange} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('accepts and formats a Date object', () => {
    const date = new Date(2023, 9, 5, 14, 30);
    render(<TimeFilter value={date} onChange={mockOnChange} />);
    expect(screen.getByDisplayValue(dayjs(date).format('DD/MM/YYYY hh:mm A'))).toBeInTheDocument();
  });

  it('calls onChange with ISO string on date selection', () => {
    const date = new Date(2023, 9, 5, 14, 30);
    render(<TimeFilter value={null} onChange={mockOnChange} />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: dayjs(date).format('DD/MM/YYYY hh:mm A') } });
    expect(mockOnChange).toHaveBeenCalledWith(date.toISOString());
  });

  it('handles null value gracefully', () => {
    render(<TimeFilter value={null} onChange={mockOnChange} />);
    expect(screen.getByRole('textbox')).toHaveValue('');
  });

  it('allows custom date parser', () => {
    const customParser = (date: string | Date | null) => (date ? dayjs(date).add(1, 'day') : null);
    const date = new Date(2023, 9, 5, 14, 30);
    render(<TimeFilter value={date} onChange={mockOnChange} dateParser={customParser} />);
    expect(screen.getByDisplayValue(dayjs(date).add(1, 'day').format('DD/MM/YYYY hh:mm A'))).toBeInTheDocument();
  });
});