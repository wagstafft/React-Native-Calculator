import React from 'react';
import {Text} from 'react-native';

import CalculatorButton from '../calculatorButton/CalculatorButton';
import CalculatorDisplay from '../calculatorDisplay/CalculatorDisplay';
const Calculator = () => {
  return (
    <>
      <Text>Calculator</Text>
      <CalculatorDisplay />
      <CalculatorButton />
    </>
  );
};

export default Calculator;
