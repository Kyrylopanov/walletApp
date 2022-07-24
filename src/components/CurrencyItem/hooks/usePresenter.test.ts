import React from "react";
import usePresenter from "./usePresenter";

describe("Currency item usePresenter test suite ===>", () => {
  const initialState = 1

   React.useState = jest.fn().mockReturnValue([initialState, {}])

  const itemMocked = {
    cryptoValue: "0.31244124 BTC",
    currencyFrom: "BTC",
    id: 1,
    last: 0.00004409,
    name: "Bitcoin",
    value: "5000 USD",
  } as any;

  it("should calculate receiveAmount", () => {
    usePresenter(itemMocked)
    
    expect(usePresenter(itemMocked).receiveAmount).toEqual('22680.88')
  });
});
