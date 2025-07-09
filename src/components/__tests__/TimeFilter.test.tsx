import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TimeFilter from '../TimeFilter';
import dayjs from 'dayjs';

describe('TimeFilter Component', () => {
  it('should render without crashing', () => {
    const { getByLabelText } = render(
      <TimeFilter value={null} onChange={() => {}} />
    );
    expect(getByLabelText(/date/i)).toBeInTheDocument();
  });

  it('should call onChange with ISO string when a date is selected', () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <TimeFilter value={null} onChange={handleChange} />
    );

    const input = getByLabelText(/date/i);
    fireEvent.change(input, { target: { value: '2023-10-10T10:00' } });

    expect(handleChange).toHaveBeenCalledWith('2023-10-10T10:00:00.000Z');
  });

  it('should use custom date parser if provided', () => {
    const customParser = jest.fn((date) => (date ? dayjs(date) : null));
    render(
      <TimeFilter
        value="2023-10-10"
        onChange={() => {}}
        dateParser={customParser}
      />
    );

    expect(customParser).toHaveBeenCalledWith('2023-10-10');
  });

  it('should format date according to printAs prop', () => {
    const { getByDisplayValue } = render(
      <TimeFilter
        value="2023-10-10T10:00:00.000Z"
        onChange={() => {}}
        printAs="YYYY-MM-DD"
      />
    );

    expect(getByDisplayValue('2023-10-10')).toBeInTheDocument();
  });
});