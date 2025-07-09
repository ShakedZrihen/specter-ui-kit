import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TimeFilter from '../TimeFilter';
import dayjs from 'dayjs';

describe('TimeFilter Component', () => {
  it('renders without crashing', () => {
    render(<TimeFilter value={null} onChange={() => {}} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('accepts and formats date correctly', () => {
    const mockOnChange = jest.fn();
    render(<TimeFilter value="2023-10-10T10:00:00Z" onChange={mockOnChange} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue(dayjs("2023-10-10T10:00:00Z").format('DD/MM/YYYY hh:mm A'));
  });

  it('calls onChange with correct date format', () => {
    const mockOnChange = jest.fn();
    render(<TimeFilter value={null} onChange={mockOnChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '10/10/2023 10:00 AM' } });
    fireEvent.blur(input);
    expect(mockOnChange).toHaveBeenCalledWith(expect.stringContaining('2023-10-10T10:00:00'));
  });

  it('uses custom date parser if provided', () => {
    const mockOnChange = jest.fn();
    const customParser = (date) => (date ? dayjs(date).add(1, 'day') : null);
    render(<TimeFilter value="2023-10-10T10:00:00Z" onChange={mockOnChange} dateParser={customParser} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue(dayjs("2023-10-11T10:00:00Z").format('DD/MM/YYYY hh:mm A'));
  });

  it('uses custom date format if provided', () => {
    const mockOnChange = jest.fn();
    render(<TimeFilter value="2023-10-10T10:00:00Z" onChange={mockOnChange} printAs="YYYY-MM-DD" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('2023-10-10');
  });
});