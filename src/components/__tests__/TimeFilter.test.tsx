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

  it('accepts a date string and formats it correctly', () => {
    const dateStr = '2023-10-01T12:00:00Z';
    render(<TimeFilter value={dateStr} onChange={mockOnChange} />);
    expect(screen.getByDisplayValue(dayjs(dateStr).format('DD/MM/YYYY hh:mm A'))).toBeInTheDocument();
  });

  it('calls onChange with the correct ISO string when a date is selected', () => {
    const dateStr = '2023-10-01T12:00:00Z';
    render(<TimeFilter value={dateStr} onChange={mockOnChange} />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '01/10/2023 12:00 PM' } });
    expect(mockOnChange).toHaveBeenCalledWith(new Date(dateStr).toISOString());
  });

  it('uses the default date adapter if none is provided', () => {
    render(<TimeFilter value={null} onChange={mockOnChange} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('allows custom date parsing through the dateParser prop', () => {
    const customParser = jest.fn((date) => (date ? dayjs(date).add(1, 'day') : null));
    render(<TimeFilter value="2023-10-01" onChange={mockOnChange} dateParser={customParser} />);
    expect(customParser).toHaveBeenCalledWith("2023-10-01");
  });
});