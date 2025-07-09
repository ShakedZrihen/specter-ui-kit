import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TimeFilter from '../TimeFilter';
import dayjs from 'dayjs';

describe('TimeFilter Component', () => {
  it('renders without crashing', () => {
    const { getByLabelText } = render(
      <TimeFilter value={null} onChange={() => {}} />
    );
    expect(getByLabelText(/date/i)).toBeInTheDocument();
  });

  it('accepts and formats a date string correctly', () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <TimeFilter value="2023-10-01T12:00:00Z" onChange={handleChange} />
    );

    const input = getByLabelText(/date/i);
    fireEvent.change(input, { target: { value: '01/10/2023 12:00 PM' } });
    expect(handleChange).toHaveBeenCalledWith('2023-10-01T12:00:00.000Z');
  });

  it('uses custom date parser if provided', () => {
    const customParser = (date: string | Date | null) =>
      date ? dayjs(date).add(1, 'day') : null;
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <TimeFilter
        value="2023-10-01T12:00:00Z"
        onChange={handleChange}
        dateParser={customParser}
      />
    );

    const input = getByLabelText(/date/i);
    fireEvent.change(input, { target: { value: '02/10/2023 12:00 PM' } });
    expect(handleChange).toHaveBeenCalledWith('2023-10-02T12:00:00.000Z');
  });

  it('formats date using custom format if provided', () => {
    const { getByLabelText } = render(
      <TimeFilter
        value="2023-10-01T12:00:00Z"
        onChange={() => {}}
        printAs="YYYY-MM-DD"
      />
    );

    const input = getByLabelText(/date/i);
    expect(input).toHaveValue('2023-10-01');
  });
});