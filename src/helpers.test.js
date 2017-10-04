import test from 'ava';
import {getHeight} from './helpers';
import chai from 'chai';

const should = chai.should();

test('helpers.getHeight - when given percent string returns ratio of number', (t) => {
  helpers.getHeight('50%', 250).should.eql(125);
});

test('helpers.getHeight - percent string without base returns percent as number', (t) => {
  helpers.getHeight('50%').should.eql(50);
});

test('helpers.getHeight - number returns number', (t) => {
  helpers.getHeight(500).should.eql(500);
});
