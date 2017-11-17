/*
 *
 * CadastroChilePage actions
 *
 */

import {DEFAULT_ACTION} from './constants';

export function defaultAction() {
  console.log('defaultAction');
  return {
    type: DEFAULT_ACTION,
  };
}
