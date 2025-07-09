import React from 'react';
import { render, screen } from '@testing-library/react';
import { StyledDesktopDateTimePicker } from '../StyledDesktopDateTimePicker';
import dayjs from 'dayjs';

describe('StyledDesktopDateTimePicker Component', () => {
  it('renders with correct label', () => {
    render(<StyledDesktopDateTimePicker label="Test Label" value={dayjs()} onAccept={jest.fn()} format="DD/MM/YYYY" defaultValue={dayjs()} />);
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  it('renders with correct default value', () => {
    const defaultValue = dayjs('2023-10-10T14:30:00Z');
    render(<StyledDesktopDateTimePicker label="Test" value={null} onAccept={jest.fn()} format="DD/MM/YYYY" defaultValue={defaultValue} />);
    expect(screen.getByDisplayValue(defaultValue.format('DD/MM/YYYY'))).toBeInTheDocument();
  });
});