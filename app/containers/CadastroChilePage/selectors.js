import { createSelector } from 'reselect';

/**
 * Direct selector to the cadastroChilePage state domain
 */
const selectCadastroChilePageDomain = (state) => state.get('cadastroChilePage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CadastroChilePage
 */

const makeSelectCadastroChilePage = () => createSelector(
  selectCadastroChilePageDomain,
  (substate) => substate.toJS()
);

export default makeSelectCadastroChilePage;
export {
  selectCadastroChilePageDomain,
};
