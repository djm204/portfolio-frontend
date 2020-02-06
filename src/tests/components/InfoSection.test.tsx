import React from 'react';
import ReactDOM from 'react-dom';
import { InfoSection } from '../../components/layout/InfoSection';

it('InfoSection renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InfoSection>test</InfoSection>, div);
});
