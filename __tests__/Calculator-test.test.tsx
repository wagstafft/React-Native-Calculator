/**
 * @format
 */

import 'react-native';
import React from 'react';
import Calculator from '../src/calculator/Calculator';
import {render, fireEvent} from '@testing-library/react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

function pressButtonByText(element: any) {
  if (element) {
    element.length > 1
      ? fireEvent.press(element[1])
      : fireEvent.press(element[0]);
  }
}

function pressSeriesOfButtonsByText(getAllByText: any, searchText: string) {
  for (let char of searchText) {
    pressButtonByText(getAllByText(char));
  }
}

beforeEach(() => {});

it('renders correctly', () => {
  renderer.create(<Calculator />);
});

it('displays single character presses correctly', () => {
  for (let i = 1; i <= 9; i++) {
    const {getAllByText} = render(<Calculator />);
    expect(getAllByText(i.toString()).length === 2).toBeFalsy();
    pressButtonByText(getAllByText(i.toString()));
    expect(getAllByText(i.toString()).length === 2).toBeTruthy();
    pressButtonByText(getAllByText(i.toString()));
    expect(getAllByText(i.toString()).length === 2).toBeFalsy();
  }
});

it('displays series of presses correctly', () => {
  const {getAllByText, queryByText, getByText} = render(<Calculator />);
  expect(queryByText('123')).toBeFalsy();
  pressSeriesOfButtonsByText(getAllByText, '123');
  expect(getByText('123')).toBeTruthy();
  pressButtonByText(getAllByText('Clr'));
  expect(queryByText('123')).toBeFalsy();
  expect(queryByText('245')).toBeFalsy();
  pressSeriesOfButtonsByText(getAllByText, '245');
  expect(getByText('245')).toBeTruthy();
});

it('adds correctly', () => {
  const {getAllByText, queryByText, getByText} = render(<Calculator />);
  expect(queryByText('12')).toBeFalsy();
  pressSeriesOfButtonsByText(getAllByText, '6+6=');
  expect(getByText('12')).toBeTruthy();
  pressButtonByText(getAllByText('Clr'));
  expect(queryByText('45')).toBeFalsy();
  pressSeriesOfButtonsByText(getAllByText, '18+27=');
  expect(getByText('45')).toBeTruthy();
  expect(queryByText('60')).toBeFalsy();
  pressSeriesOfButtonsByText(getAllByText, '+15=');
  expect(getByText('60')).toBeTruthy();
});

it('subtracts correctly', () => {
  const {getAllByText, queryByText, getByText} = render(<Calculator />);
  expect(queryByText('-6')).toBeFalsy();
  pressSeriesOfButtonsByText(getAllByText, '0-6=');
  expect(getByText('-6')).toBeTruthy();
  pressButtonByText(getAllByText('Clr'));
  expect(queryByText('45')).toBeFalsy();
  pressSeriesOfButtonsByText(getAllByText, '90-45=');
  expect(getByText('45')).toBeTruthy();
  expect(queryByText('20')).toBeFalsy();
  pressSeriesOfButtonsByText(getAllByText, '-25=');
  expect(getByText('20')).toBeTruthy();
});

it('multiplication correctly', () => {
  const {getAllByText, queryByText, getByText} = render(<Calculator />);
  expect(queryByText('121')).toBeFalsy();
  pressSeriesOfButtonsByText(getAllByText, '11*11=');
  expect(getByText('121')).toBeTruthy();
  pressButtonByText(getAllByText('Clr'));
  expect(queryByText('169')).toBeFalsy();
  pressSeriesOfButtonsByText(getAllByText, '13*13=');
  expect(getByText('169')).toBeTruthy();
  pressButtonByText(getAllByText('Clr'));
  expect(queryByText('78')).toBeFalsy();
  pressSeriesOfButtonsByText(getAllByText, '6*13=');
  expect(getByText('78')).toBeTruthy();
});

it('divide correctly', () => {
  const {getAllByText, queryByText, getByText} = render(<Calculator />);
  expect(queryByText('0.2')).toBeFalsy();
  pressSeriesOfButtonsByText(getAllByText, '1/5=');
  expect(getByText('0.2')).toBeTruthy();
  pressButtonByText(getAllByText('Clr'));
  expect(queryByText('0.05')).toBeFalsy();
  pressSeriesOfButtonsByText(getAllByText, '125/2500=');
  expect(getByText('0.05')).toBeTruthy();
  pressButtonByText(getAllByText('Clr'));
  pressSeriesOfButtonsByText(getAllByText, '=');
});

it('divide by zero handled', () => {
  const {getAllByText, queryByText} = render(<Calculator />);
  expect(queryByText('Error Divide By Zero')).toBeFalsy();
  pressSeriesOfButtonsByText(getAllByText, '5/0=');
  expect(queryByText('Error Divide By Zero')).toBeTruthy();
});

it('pressing equal with no operand', () => {
  const {getAllByText, queryByText, getByText} = render(<Calculator />);
  expect(queryByText('123')).toBeFalsy();
  pressSeriesOfButtonsByText(getAllByText, '123=');
  expect(getByText('123')).toBeTruthy();
});

it('changing operand', () => {
  const {getAllByText, queryByText, getByText} = render(<Calculator />);
  expect(queryByText('246')).toBeFalsy();
  pressSeriesOfButtonsByText(getAllByText, '123+-+123=');
  expect(getByText('246')).toBeTruthy();
});
