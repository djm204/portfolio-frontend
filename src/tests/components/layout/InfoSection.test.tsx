import React from 'react';
import { InfoSection } from '../../../components/layout/InfoSection';
import { render } from '@testing-library/react';

it('InfoSection renders without crashing', () => {
  render(<InfoSection>test</InfoSection>, );
});
