import React from 'react';

import {Text, StyleSheet, View} from 'react-native';

interface CalculatorDisplayProps {
  displayValue: string;
  previousDisplayValue: number;
  lastOperand: string;
}

function getDisplayString(props: CalculatorDisplayProps): string {
  let displayString = `${
    props.previousDisplayValue ? props.previousDisplayValue : ''
  }`;
  displayString += `${props.lastOperand ? props.lastOperand : ''}`;
  displayString += `${props.displayValue ? props.displayValue : ''}`;
  return displayString;
}

const CalculatorDisplay = (props: CalculatorDisplayProps) => {
  return (
    <View style={styles.display}>
      <Text>{getDisplayString(props)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  display: {
    backgroundColor: '#455a64',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CalculatorDisplay;
