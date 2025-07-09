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

  it('accepts and formats a date string', () => {
    render(<TimeFilter value="2023-10-10T10:00:00Z" onChange={mockOnChange} />);
    expect(screen.getByRole('textbox')).toHaveValue('10/10/2023 10:00 AM');
  });

  it('accepts and formats a Date object', () => {
    render(<TimeFilter value={new Date('2023-10-10T10:00:00Z')} onChange={mockOnChange} />);
    expect(screen.getByRole('textbox')).toHaveValue('10/10/2023 10:00 AM');
  });

  it('calls onChange with the correct date format', () => {
    render(<TimeFilter value={null} onChange={mockOnChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '10/10/2023 10:00 AM' } });
    fireEvent.blur(input);
    expect(mockOnChange).toHaveBeenCalledWith(dayjs('2023-10-10T10:00:00Z').format());
  });

  it('uses a custom date parser', () => {
    const customParser = (date: string | Date | null) => (date ? dayjs(date).add(1, 'day') : null);
    render(<TimeFilter value="2023-10-10T10:00:00Z" onChange={mockOnChange} dateParser={customParser} />);
    expect(screen.getByRole('textbox')).toHaveValue('11/10/2023 10:00 AM');
  });

  it('uses a custom date format', () => {
    render(<TimeFilter value="2023-10-10T10:00:00Z" onChange={mockOnChange} printAs="YYYY-MM-DD" />);
    expect(screen.getByRole('textbox')).toHaveValue('2023-10-10');
  });
});