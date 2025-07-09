import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StyledDesktopDateTimePicker } from '../StyledDesktopDateTimePicker';

describe('StyledDesktopDateTimePicker Component', () => {
  it('renders without crashing', () => {
    render(<StyledDesktopDateTimePicker />);
  });
});