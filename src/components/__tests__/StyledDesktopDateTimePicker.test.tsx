import React from 'react';
import { render } from '@testing-library/react';
import { StyledDesktopDateTimePicker } from '../StyledDesktopDateTimePicker';

describe('StyledDesktopDateTimePicker Component', () => {
  it('renders without crashing', () => {
    render(<StyledDesktopDateTimePicker />);
  });

  // Additional tests for custom styles can be added here
});