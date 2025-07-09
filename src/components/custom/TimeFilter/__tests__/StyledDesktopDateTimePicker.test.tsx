import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StyledDesktopDateTimePicker } from '../StyledDesktopDateTimePicker';

describe('StyledDesktopDateTimePicker Component', () => {
  it('renders without crashing', () => {
    const { getByRole } = render(
      <StyledDesktopDateTimePicker
        value={null}
        onChange={() => {}}
        renderInput={(params) => <input {...params} />}
      />
    );
    expect(getByRole('textbox')).toBeInTheDocument();
  });
});