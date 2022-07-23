import {
  ACTIONS_WALLET_GET_CURRENCIES,
} from '../constst/actions';
import { Currency } from '../types/wallet';

export const getCurrency = (currency: Currency) => {
  const payload = currency
  return {
    type: ACTIONS_WALLET_GET_CURRENCIES,
    payload,
  }
};

