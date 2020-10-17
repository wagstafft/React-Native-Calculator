/**
 * @format
 */

import 'react-native';
import React from 'react';
import Calculator from '../src/calculator/Calculator';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Calculator />);
});
