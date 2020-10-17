import React from 'react';
import {Button, View, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface CalculatorButtonProps {
  text: string;
}

const CalculatorButton = (props: CalculatorButtonProps) => {
  return (
    <View style={styles.calculatorButton}>
      <Button title={props.text} />
    </View>
  );
};

const styles = StyleSheet.create({
  calculatorButton: {
    width: 75,
    paddingHorizontal: 2,
    borderColor: Colors.white,
    borderRadius: 2,
    borderWidth: 1,
    borderStyle: "solid",
  },
});

export default CalculatorButton;
