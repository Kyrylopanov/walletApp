import { useState } from "react";
import { Currency } from "../../../types/wallet";

const usePresenter = (item: Currency | undefined) => {
  const [amountPay, onChangeAmountPay] = useState("");  

  return {
    onChangeAmountPay,
    amountPay,
    receiveAmount: item ? (Number(amountPay) / item.last).toFixed(2) : null,
  };
};

export default usePresenter;
