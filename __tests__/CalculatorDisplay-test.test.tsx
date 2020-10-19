/**
 * @format
 */

import 'react-native';
import React from 'react';
import CalculatorDisplay from '../src/calculatorDisplay/CalculatorDisplay';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(
    <CalculatorDisplay
      displayValue="0"
      lastOperand="+"
      previousDisplayValue={0}
    />,
  );
});
