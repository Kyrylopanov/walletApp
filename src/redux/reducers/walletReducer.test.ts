import { ACTIONS_WALLET_GET_CURRENCIES } from "../../constst/actions";
import { initState, walletReducer } from "./walletReducer";

describe("walletReducer test suite ===>", () => {
  it("should return initial state", () => {
    expect(walletReducer(undefined, {})).toEqual(initState);
  });

  it("should handle ACTIONS_WALLET_GET_CURRENCIES and update state", () => {
    const action = {
      type: ACTIONS_WALLET_GET_CURRENCIES,
      payload: {
        currencyFrom: "USDP",
        currencyFromScale: 18,
        currencyTo: "USD",
        currencyToScale: 2,
        friendlyLast: "1 USD = 1.029649597487763602 USDP",
        last: 1.0296495974877635,
        lastHP: 1.0296495974877635,
        timestamp: 1658583485413,
      },
    };

    expect(walletReducer(initState, action)).toEqual({
      currencies: [
        {
          currencyFrom: "USDP",
          currencyFromScale: 18,
          currencyTo: "USD",
          currencyToScale: 2,
          friendlyLast: "1 USD = 1.029649597487763602 USDP",
          last: 1.0296495974877635,
          lastHP: 1.0296495974877635,
          timestamp: 1658583485413,
        },
      ],
    });
  });
});
