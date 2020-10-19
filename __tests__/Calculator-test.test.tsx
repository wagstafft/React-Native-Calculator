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
