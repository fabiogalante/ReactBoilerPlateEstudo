import React from 'react';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';
import {FormattedMessage} from 'react-intl';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectCadastroChilePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {defaultAction} from './actions';

import CadastroChile from '../../components/CadastroChile/Loadable';
import Pagamento from '../../components/Pagamento/Pagamento';

export class CadastroChilePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {handleSubmit} = this.props;


    return (
      <div>
        <Helmet>
          <title>CadastroChilePage</title>
          <meta name="description" content="Description of CadastroChilePage"/>
        </Helmet>
        <FormattedMessage {...messages.header} />
        <CadastroChile handleSubmit={handleSubmit}/>
        <Pagamento novaConstante={'Vou aparecer no h2'}/>


      </div>
    );
  }
}

CadastroChilePage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  cadastrochilepage: makeSelectCadastroChilePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: () => {
      dispatch(defaultAction());
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({key: 'cadastroChilePage', reducer});
const withSaga = injectSaga({key: 'cadastroChilePage', saga});

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CadastroChilePage);
