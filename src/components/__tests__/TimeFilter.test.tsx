import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TimeFilter from '../TimeFilter';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

describe('TimeFilter Component', () => {
  it('renders without crashing', () => {
    const { getByLabelText } = render(
      <TimeFilter
        value={null}
        onChange={() => {}}
        label="Select Date"
      />
    );
    expect(getByLabelText('Select Date')).toBeInTheDocument();
  });

  it('accepts and formats a date correctly', () => {
    const mockOnChange = jest.fn();
    const { getByLabelText } = render(
      <TimeFilter
        value={new Date('2023-10-01T10:00:00Z')}
        onChange={mockOnChange}
        label="Select Date"
        printAs="YYYY-MM-DD"
      />
    );

    const input = getByLabelText('Select Date');
    fireEvent.change(input, { target: { value: '2023-10-01' } });
    expect(mockOnChange).toHaveBeenCalledWith('2023-10-01T10:00:00.000Z');
  });

  it('uses custom date parser', () => {
    const customParser = (date: string | Date | null) => {
      return date ? dayjs(date) : null;
    };
    const { getByLabelText } = render(
      <TimeFilter
        value="2023-10-01"
        onChange={() => {}}
        label="Select Date"
        dateParser={customParser}
      />
    );

    const input = getByLabelText('Select Date');
    expect(input).toHaveValue('01/10/2023');
  });

  it('handles null value gracefully', () => {
    const { getByLabelText } = render(
      <TimeFilter
        value={null}
        onChange={() => {}}
        label="Select Date"
      />
    );

    const input = getByLabelText('Select Date');
    expect(input).toHaveValue('');
  });
});