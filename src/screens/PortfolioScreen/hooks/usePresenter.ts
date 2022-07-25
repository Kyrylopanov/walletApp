import { useSelector } from "react-redux";
import { GlobalStateFull } from "../../../redux";
import { Amount, WalletItem } from "../../../types/wallet";

const usePresenter = () => {
  const { wallet } = useSelector((state: GlobalStateFull) => state);
  const { currencies } = wallet;

  const getExchangeValue = (currencyFrom: string) => {
    return currencies
      .filter((currItem) => currItem.currencyFrom === currencyFrom)
      .find((item) => item.last)?.last;
  };

  const totalAmount = 7029.06;

  const amount: Amount = {
    beforeDecimals: totalAmount.toString().split(".")[0],
    afterDecimals: totalAmount.toString().split(".")[1],
  };

  const currencyList: WalletItem[] = [
    {
      name: "Bitcoin",
      cryptoValue: "0.31244124 BTC",
      value: "5000 USD",
      id: 1,
      currencyFrom: "BTC",
      last: getExchangeValue("BTC"),
    },
    {
      name: "Ether",
      cryptoValue: "0.327834478541236547 ETH",
      value: "5000 USD",
      id: 2,
      currencyFrom: "ETH",
      last: getExchangeValue("ETH"),
    },
    {
      name: "Pax Dollar",
      cryptoValue: "0.32 PAX",
      value: "5000 USD",
      id: 3,
      currencyFrom: "USDP",
      last: getExchangeValue("USDP"),
    },
    {
      name: "Banker",
      cryptoValue: "131231567 BNK",
      value: "5000 USD",
      id: 4,
      currencyFrom: "BNK",
      last: getExchangeValue("BNK"),
    },
  ];

  return {
    amount,
    currencyList,
  };
};

export default usePresenter;
