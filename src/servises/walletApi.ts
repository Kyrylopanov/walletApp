import store from "../redux";
import { getCurrency } from "../actions/walletActions";

export const walletApi = (() => {
  const getCurrencies = async (currencyFrom: string) => {
    const baseUrl = "https://spectrocoin.com/scapi/ticker";
    let fullUrl = `${baseUrl}/${currencyFrom}/USD`;

    try {
      const apiReq = await fetch(fullUrl, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await apiReq.json();

      store.dispatch(getCurrency(data));
      return apiReq || [];
    } catch (error) {
      console.error(error);
    }
  };
  return {
    getCurrencies,
  };
})();
