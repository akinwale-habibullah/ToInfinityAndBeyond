import { RECEIVE_CURRENCIES } from '../actions/types';

const currencies = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENCIES:
      return action.currencies;
    default:
      return state;
  }
}

export default currencies;
