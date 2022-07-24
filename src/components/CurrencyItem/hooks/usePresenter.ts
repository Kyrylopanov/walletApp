import { useState } from "react";
import { WalletItem } from "../../../types/wallet";

const usePresenter = (item: WalletItem | undefined) => {
  const [amountPay, onChangeAmountPay] = useState("");

  return {
    onChangeAmountPay,
    amountPay,
    receiveAmount: item?.last ? (Number(amountPay) / item.last).toFixed(2) : null,
  };
};

export default usePresenter;
