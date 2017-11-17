import {fromJS} from 'immutable';
import {DEFAULT_ACTION,} from './constants';

const initialState = fromJS({
  contatos: fromJS([
    {
      id: 1,
      nome: 'Alice',
      urlFoto: '',
      favorito: 0,
    },
    {
      id: 2,
      nome: 'Alana',
      urlFoto: '',
      favorito: 0,
    },
    {
      id: 3,
      nome: 'Anita',
      urlFoto: '',
      favorito: 0,
    },
    {
      id: 4,
      nome: 'Ana Clara',
      urlFoto: '',
      favorito: 0,
    },
    {
      id: 5,
      nome: 'Anelise',
      urlFoto: '',
      favorito: 0,
    },
    {
      id: 6,
      nome: 'Aline',
      urlFoto: '',
      favorito: 0,
    },
    {
      id: 7,
      nome: 'Ana Carolina',
      urlFoto: '',
      favorito: 0,
    },
    {
      id: 8,
      nome: 'Ana Ivanovic',
      urlFoto: '',
      favorito: 0,
    },
    {
      id: 9,
      nome: 'Alessandra',
      urlFoto: '',
      favorito: 1,
    },
    {
      id: 10,
      nome: 'Alexia',
      urlFoto: '',
      favorito: 0,
    },
    {
      id: 11,
      nome: 'Ariane',
      urlFoto: '',
      favorito: 1,
    },
    {
      id: 12,
      nome: 'Arlete',
      urlFoto: '',
      favorito: 1,
    },
    {
      id: 13,
      nome: 'Bianca',
      urlFoto: '',
      favorito: 1,
    },
    {
      id: 14,
      nome: 'Bruna',
      urlFoto: '',
      favorito: 0,
    },
    {
      id: 15,
      nome: 'Cassia',
      urlFoto: '',
      favorito: 1,
    },
    {
      id: 16,
      nome: 'Claudia',
      urlFoto: '',
      favorito: 1,
    },
    {
      id: 17,
      nome: 'Carolina',
      urlFoto: '',
      favorito: 1,
    },
    {
      id: 18,
      nome: 'Carla',
      urlFoto: '',
      favorito: 0,
    },
    {
      id: 19,
      nome: 'Cintia',
      urlFoto: '',
      favorito: 0,
    },
    {
      id: 20,
      nome: 'Carine',
      urlFoto: '',
      favorito: 0,
    }]),
  paisesLoading: null,
});

function cadastroChilePageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default cadastroChilePageReducer;
