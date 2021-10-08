import { RECEIVE_CURRENCIES } from './types';

const receiveCurrencies = (currencies) => ({
  type: RECEIVE_CURRENCIES,
  currencies
})

export {
  receiveCurrencies
}
