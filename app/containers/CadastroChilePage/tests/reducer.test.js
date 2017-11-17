
import { fromJS } from 'immutable';
import cadastroChilePageReducer from '../reducer';

describe('cadastroChilePageReducer', () => {
  it('returns the initial state', () => {
    expect(cadastroChilePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
