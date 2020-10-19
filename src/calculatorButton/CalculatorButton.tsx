import React from 'react';
import {Button, View, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface CalculatorButtonProps {
  text: string;
  handlePress: any;
}

const CalculatorButton = (props: CalculatorButtonProps) => {
  return (
    <View style={styles.calculatorButton}>
      <Button color="#282c34" title={props.text} onPress={props.handlePress} />
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
    borderStyle: 'solid',
  },
});

export default CalculatorButton;
