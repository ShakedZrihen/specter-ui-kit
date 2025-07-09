import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TimeFilter from '../TimeFilter';
import dayjs from 'dayjs';

describe('TimeFilter Component', () => {
  const mockOnChange = jest.fn();

  it('renders without crashing', () => {
    const { getByLabelText } = render(
      <TimeFilter value={null} onChange={mockOnChange} label="Test Label" />
    );
    expect(getByLabelText('Test Label')).toBeInTheDocument();
  });

  it('calls onChange with correct date format', () => {
    const { getByLabelText } = render(
      <TimeFilter value={null} onChange={mockOnChange} label="Test Label" />
    );
    const input = getByLabelText('Test Label');
    fireEvent.change(input, { target: { value: '2023-10-10T10:00:00' } });
    fireEvent.blur(input);

    expect(mockOnChange).toHaveBeenCalledWith('2023-10-10T10:00:00.000Z');
  });

  it('parses default value correctly', () => {
    const defaultValue = dayjs('2023-10-10T10:00:00');
    const { getByDisplayValue } = render(
      <TimeFilter
        value={null}
        defaultValue={defaultValue.toISOString()}
        onChange={mockOnChange}
        label="Test Label"
      />
    );
    expect(getByDisplayValue(defaultValue.format('DD/MM/YYYY hh:mm A'))).toBeInTheDocument();
  });

  it('uses custom date parser if provided', () => {
    const customParser = jest.fn((date) => dayjs(date));
    render(
      <TimeFilter
        value="2023-10-10T10:00:00"
        onChange={mockOnChange}
        dateParser={customParser}
        label="Test Label"
      />
    );
    expect(customParser).toHaveBeenCalledWith('2023-10-10T10:00:00');
  });

  it('uses custom date adapter if provided', () => {
    const customAdapter = jest.fn();
    render(
      <TimeFilter
        value="2023-10-10T10:00:00"
        onChange={mockOnChange}
        dateAdapter={customAdapter}
        label="Test Label"
      />
    );
    expect(customAdapter).toHaveBeenCalled();
  });
});