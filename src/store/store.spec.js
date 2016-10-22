import * as ActionTypes from '../constants/actionTypes';

import MockDate from 'mockdate';
import { expect } from 'chai';
import { createStore } from 'redux';

import initialState from '../reducers/initialState';
import rootReducer from '../reducers';

describe('Store', () => {
  before(() => {
    MockDate.set(new Date());
  });
  after(() => MockDate.reset());
});
