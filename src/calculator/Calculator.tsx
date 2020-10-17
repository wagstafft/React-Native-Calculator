import React from 'react';
import {View, StyleSheet} from 'react-native';

import CalculatorButton from '../calculatorButton/CalculatorButton';
import CalculatorDisplay from '../calculatorDisplay/CalculatorDisplay';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const Calculator = () => {
  return (
    <>
      <View style={styles.calculatorButtons}>
        <View style={styles.calculatorButtonRow}>
          <CalculatorDisplay />
        </View>
        <View style={styles.calculatorButtonRow}>
          <CalculatorButton text={'7'} />
          <CalculatorButton text={'8'} />
          <CalculatorButton text={'9'} />
          <CalculatorButton text={'Clr'} />
        </View>
        <View style={styles.calculatorButtonRow}>
          <CalculatorButton text={'4'} />
          <CalculatorButton text={'5'} />
          <CalculatorButton text={'6'} />
          <CalculatorButton text={'-'} />
        </View>
        <View style={styles.calculatorButtonRow}>
          <CalculatorButton text={'1'} />
          <CalculatorButton text={'2'} />
          <CalculatorButton text={'3'} />
          <CalculatorButton text={'+'} />
        </View>
        <View style={styles.calculatorButtonRow}>
          <CalculatorButton text={'0'} />
          <CalculatorButton text={'*'} />
          <CalculatorButton text={'/'} />
          <CalculatorButton text={'='} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  calculatorButtonRow: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    backgroundColor: '#282c34',
    borderColor: Colors.black,
  },
  calculatorButtons: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.black,
  },
});

export default Calculator;
