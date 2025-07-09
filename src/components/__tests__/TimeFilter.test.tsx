import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TimeFilter } from '../TimeFilter';
import dayjs from 'dayjs';

describe('TimeFilter Component', () => {
  const mockOnChange = jest.fn();

  it('renders without crashing', () => {
    render(<TimeFilter value={null} onChange={mockOnChange} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('parses and formats date correctly', () => {
    const testDate = new Date(2023, 9, 10, 14, 30);
    render(<TimeFilter value={testDate} onChange={mockOnChange} />);
    expect(screen.getByDisplayValue(dayjs(testDate).format('DD/MM/YYYY hh:mm A'))).toBeInTheDocument();
  });

  it('calls onChange with correct ISO string', () => {
    const testDate = new Date(2023, 9, 10, 14, 30);
    render(<TimeFilter value={testDate} onChange={mockOnChange} />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '10/10/2023 02:30 PM' } });
    expect(mockOnChange).toHaveBeenCalledWith(testDate.toISOString());
  });

  it('handles null value gracefully', () => {
    render(<TimeFilter value={null} onChange={mockOnChange} />);
    expect(screen.getByRole('textbox')).toHaveValue('');
  });

  it('uses custom date parser if provided', () => {
    const customParser = jest.fn((value) => dayjs(value));
    render(<TimeFilter value="2023-10-10T14:30:00Z" onChange={mockOnChange} dateParser={customParser} />);
    expect(customParser).toHaveBeenCalledWith("2023-10-10T14:30:00Z");
  });
});