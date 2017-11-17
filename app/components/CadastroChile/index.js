import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

// import styled from 'styled-components';

const CadastroChile = (props) => {

  const { handleSubmit } = props;


  return (
    <div>
      <FormattedMessage {...messages.header} />
      <h1>CadastroChile Componente</h1>
      <button
        type="button"
        onClick={() => handleSubmit()}
      >
        Cadastrar
      </button>


    </div>
  );
};

CadastroChile.propTypes = {
  handleSubmit: React.PropTypes.func,
};

export default CadastroChile;
