import * as redux from "react-redux";
import usePresenter from "./usePresenter";

describe("Portfolio screen usePresenter test suite ===>", () => {
  const walletMocked = {
    wallet: {
      currencies: [
        {
          currencyFrom: "BTC",
          last: 10,
        },
        {
          currencyFrom: "ETH",
          last: 20,
        },
        {
          currencyFrom: "USDP",
          last: 30,
        },
        {
          currencyFrom: "BNK",
          last: 40,
        },
      ],
    },
  };
  const spy = jest.spyOn(redux, "useSelector");
  spy.mockReturnValue(walletMocked);

  it("should take from state currencies, merge it by currencyFrom, update last prop and return formated currencyList", () => {
    const expectedResultWitLast = [
      {
        cryptoValue: "0.31244124 BTC",
        currencyFrom: "BTC",
        id: 1,
        last: 10,
        name: "Bitcoin",
        value: "5000 USD",
      },
      {
        cryptoValue: "0.327834478541236547 ETH",
        currencyFrom: "ETH",
        id: 2,
        last: 20,
        name: "Ether",
        value: "5000 USD",
      },
      {
        cryptoValue: "0.32 PAX",
        currencyFrom: "USDP",
        id: 3,
        last: 30,
        name: "Pax Dollar",
        value: "5000 USD",
      },
      {
        cryptoValue: "131231567 BNK",
        currencyFrom: "BNK",
        id: 4,
        last: 40,
        name: "Banker",
        value: "5000 USD",
      },
    ];
    expect(usePresenter().currencyList).toEqual(expectedResultWitLast);
  });
});
