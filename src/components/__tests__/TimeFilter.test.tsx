import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TimeFilter from '../TimeFilter';
import dayjs from 'dayjs';

describe('TimeFilter Component', () => {
  it('renders without crashing', () => {
    const { getByLabelText } = render(
      <TimeFilter value={null} onChange={() => {}} label="Select Date" />
    );
    expect(getByLabelText(/select date/i)).toBeInTheDocument();
  });

  it('handles different date formats', () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <TimeFilter
        value="2023-10-01T12:00:00Z"
        onChange={handleChange}
        label="Select Date"
      />
    );
    fireEvent.change(getByLabelText(/select date/i), {
      target: { value: '01/10/2023 12:00 PM' },
    });
    expect(handleChange).toHaveBeenCalledWith(dayjs('2023-10-01T12:00:00Z').format());
  });

  it('supports custom date parsers', () => {
    const customParser = (date: string | Date | null) =>
      date ? dayjs(date).add(1, 'day') : null;
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <TimeFilter
        value="2023-10-01T12:00:00Z"
        onChange={handleChange}
        label="Select Date"
        dateParser={customParser}
      />
    );
    fireEvent.change(getByLabelText(/select date/i), {
      target: { value: '02/10/2023 12:00 PM' },
    });
    expect(handleChange).toHaveBeenCalledWith(dayjs('2023-10-02T12:00:00Z').format());
  });

  it('handles null values gracefully', () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <TimeFilter value={null} onChange={handleChange} label="Select Date" />
    );
    fireEvent.change(getByLabelText(/select date/i), {
      target: { value: '' },
    });
    expect(handleChange).toHaveBeenCalledWith(null);
  });
});