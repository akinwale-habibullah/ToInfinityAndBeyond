import { RECEIVE_MARKETS } from './types';

const receiveMarkets = (markets) => ({
  type: RECEIVE_MARKETS,
  markets
})

export {
  receiveMarkets
}
