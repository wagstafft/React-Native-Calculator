/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import CalculatorButton from '../src/calculatorButton/CalculatorButton';

it('renders correctly', () => {
  renderer.create(
    <CalculatorButton
      text={'1'}
      handlePress={() => {
        console.log('hello');
      }}
    />,
  );
});
