import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import CalculatorButton from '../calculatorButton/CalculatorButton';
import CalculatorDisplay from '../calculatorDisplay/CalculatorDisplay';

import {Colors} from 'react-native/Libraries/NewAppScreen';

interface CalculatorState {
  lastOperand: string;
  displayValue: string;
  previousDisplayValue: number;
  errors: string[];
}

const Calculator = () => {
  const [state, setState] = useState<CalculatorState>({
    displayValue: '0',
    lastOperand: '',
    previousDisplayValue: 0,
    errors: [],
  });

  function clear() {
    setState({
      displayValue: '0',
      lastOperand: '',
      previousDisplayValue: 0,
      errors: [],
    });
  }

  function clickNum(num: string) {
    let changedState = {
      displayValue: state.displayValue,
      lastOperand: state.lastOperand,
      previousDisplayValue: state.previousDisplayValue,
      errors: state.errors,
    };

    if (changedState.displayValue === '0') {
      changedState.displayValue = num;
    } else {
      changedState.displayValue = changedState.displayValue + num;
    }

    setState(changedState);
  }

  function pressedOperand(operand: string) {
    let changedState = {
      displayValue: state.displayValue,
      lastOperand: state.lastOperand,
      previousDisplayValue: state.previousDisplayValue,
      errors: state.errors,
    };

    if (state.lastOperand === '') {
      changedState.previousDisplayValue = +changedState.displayValue;
      changedState.displayValue = '';
    }

    changedState.lastOperand = operand;

    setState(changedState);
  }

  function pressedEqual() {
    if (state.lastOperand === '') {
      return;
    }

    let changedState = {
      displayValue: state.displayValue,
      lastOperand: state.lastOperand,
      previousDisplayValue: state.previousDisplayValue,
      errors: state.errors,
    };

    let changedDisplayValue = state.previousDisplayValue;

    if (+changedState.displayValue) {
      switch (state.lastOperand) {
        case '+':
          changedDisplayValue += +changedState.displayValue;
          break;
        case '-':
          changedDisplayValue -= +changedState.displayValue;
          break;
        default:
          return;
      }
    }

    changedState.previousDisplayValue = 0;
    changedState.displayValue = changedDisplayValue.toString();
    changedState.lastOperand = '';
    setState(changedState);
  }

  return (
    <>
      <View style={styles.calculatorButtons}>
        <View style={styles.calculatorButtonRow}>
          <CalculatorDisplay
            lastOperand={state.lastOperand}
            displayValue={state.displayValue}
            previousDisplayValue={state.previousDisplayValue}
          />
        </View>
        <View style={styles.calculatorButtonRow}>
          <CalculatorButton text={'7'} handlePress={() => clickNum('7')} />
          <CalculatorButton text={'8'} handlePress={() => clickNum('8')} />
          <CalculatorButton text={'9'} handlePress={() => clickNum('9')} />
          <CalculatorButton text={'Clr'} handlePress={() => clear()} />
        </View>
        <View style={styles.calculatorButtonRow}>
          <CalculatorButton text={'4'} handlePress={() => clickNum('4')} />
          <CalculatorButton text={'5'} handlePress={() => clickNum('5')} />
          <CalculatorButton text={'6'} handlePress={() => clickNum('6')} />
          <CalculatorButton
            text={'-'}
            handlePress={() => pressedOperand('-')}
          />
        </View>
        <View style={styles.calculatorButtonRow}>
          <CalculatorButton text={'1'} handlePress={() => clickNum('1')} />
          <CalculatorButton text={'2'} handlePress={() => clickNum('2')} />
          <CalculatorButton text={'3'} handlePress={() => clickNum('3')} />
          <CalculatorButton
            text={'+'}
            handlePress={() => pressedOperand('+')}
          />
        </View>
        <View style={styles.calculatorButtonRow}>
          <CalculatorButton text={'0'} handlePress={() => clickNum('0')} />
          <CalculatorButton
            text={'*'}
            handlePress={() => pressedOperand('*')}
          />
          <CalculatorButton
            text={'/'}
            handlePress={() => pressedOperand('/')}
          />
          <CalculatorButton text={'='} handlePress={() => pressedEqual()} />
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
    backgroundColor: '#718792',
  },
  calculatorButtons: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.black,
  },
});

export default Calculator;
