import { ACTIONS_WALLET_GET_CURRENCIES } from "../constst/actions";
import { getCurrency } from "./walletActions";

describe("wallet actions test suite ===>", () => {
  const currencyMocked = {
    currencyFrom: "USDP",
    currencyFromScale: 18,
    currencyTo: "USD",
    currencyToScale: 2,
    friendlyLast: "1 USD = 1.029649597487763602 USDP",
    last: 1.0296495974877635,
    lastHP: 1.0296495974877635,
    timestamp: 1658583485413,
  };
  it("should return expected { type, payload }", () => {
    expect(getCurrency(currencyMocked)).toEqual({ type: ACTIONS_WALLET_GET_CURRENCIES, payload: currencyMocked });
  });
});
