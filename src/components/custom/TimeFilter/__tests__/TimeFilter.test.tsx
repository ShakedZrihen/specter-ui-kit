import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TimeFilter from '../TimeFilter';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

describe('TimeFilter Component', () => {
  it('renders without crashing', () => {
    const { getByLabelText } = render(
      <TimeFilter
        value={null}
        onChange={() => {}}
        dateAdapter={AdapterDayjs}
      />
    );
    expect(getByLabelText(/date/i)).toBeInTheDocument();
  });

  it('calls onChange with the correct date format', () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <TimeFilter
        value={null}
        onChange={handleChange}
        dateAdapter={AdapterDayjs}
      />
    );

    const input = getByLabelText(/date/i);
    fireEvent.change(input, { target: { value: '2023-10-10T10:00' } });
    fireEvent.blur(input);

    expect(handleChange).toHaveBeenCalledWith('2023-10-10T10:00:00.000Z');
  });

  it('parses and formats date correctly with custom dateParser and printAs', () => {
    const customDateParser = (date: string | Date | null): Date | null => {
      if (typeof date === 'string') {
        return new Date(date);
      }
      return date;
    };

    const { getByLabelText } = render(
      <TimeFilter
        value="2023-10-10T10:00:00.000Z"
        onChange={() => {}}
        dateParser={customDateParser}
        printAs="YYYY-MM-DD"
        dateAdapter={AdapterDayjs}
      />
    );

    const input = getByLabelText(/date/i);
    expect(input).toHaveValue('2023-10-10');
  });
});