import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TimeFilter from '../TimeFilter';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

describe('TimeFilter Component', () => {
  const mockOnChange = jest.fn();

  it('renders without crashing', () => {
    render(<TimeFilter value={null} onChange={mockOnChange} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('accepts and formats a date string correctly', () => {
    const dateStr = '2023-10-01T12:00:00Z';
    render(<TimeFilter value={dateStr} onChange={mockOnChange} />);
    expect(screen.getByDisplayValue(dayjs(dateStr).format('DD/MM/YYYY hh:mm A'))).toBeInTheDocument();
  });

  it('calls onChange with ISO string on date selection', () => {
    render(<TimeFilter value={null} onChange={mockOnChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '01/10/2023 12:00 PM' } });
    fireEvent.blur(input);
    expect(mockOnChange).toHaveBeenCalledWith(expect.stringMatching(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/));
  });

  it('uses custom date parser if provided', () => {
    const customParser = jest.fn((date) => (date ? dayjs(date) : null));
    render(<TimeFilter value="2023-10-01" onChange={mockOnChange} dateParser={customParser} />);
    expect(customParser).toHaveBeenCalledWith("2023-10-01");
  });

  it('uses custom date adapter if provided', () => {
    const customAdapter = jest.fn(AdapterDayjs);
    render(<TimeFilter value={null} onChange={mockOnChange} dateAdapter={customAdapter} />);
    expect(customAdapter).toHaveBeenCalled();
  });
});