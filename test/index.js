import 'babel-polyfill';
import React from 'react';
import Typography from '../src';
import chai from 'chai';
chai.should();
describe('Typography', () => {
  it('renders a React element', () => {
    React.isValidElement(<Typography />).should.equal(true);
  });
});
