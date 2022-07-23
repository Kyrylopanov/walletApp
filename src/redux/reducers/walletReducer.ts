import { ACTIONS_WALLET_GET_CURRENCIES } from "../../constst/actions";
import { Currency } from "../../types/wallet";

export interface GlobalWalletState {
  currencies: Currency[];
}

export const initState: GlobalWalletState = {
  currencies: [],
};

export const walletReducer = (
  state: GlobalWalletState = initState,
  action: any
) => {
  const { type, payload } = action || {};

  if (type === ACTIONS_WALLET_GET_CURRENCIES) {
    return { ...state, currencies: [...state.currencies, action.payload] };
  }

  return state;
};
