import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { WalletItem } from "../../../types/wallet";
import { walletApi } from "../../../servises/walletApi";
import { SCREEN_NAME_CURRENCY } from "../../../constst/screens";

type Nav = {
  navigate: (value: string, item: WalletItem) => void;
};

const usePresenter = (item: WalletItem) => {
  const navigation = useNavigation<Nav>();

  useEffect(() => {
    walletApi.getCurrencies(mapItToCurrency[item.id]);
  }, []);

  const mapItToCurrency: Record<number, string> = {
    1: "BTC",
    2: "ETH",
    3: "USDP",
    4: "BNK",
  };

  const navToCurrencyScreen = () => {
    navigation.navigate(SCREEN_NAME_CURRENCY, item);
  };

  return {
    navToCurrencyScreen,
  };
};

export default usePresenter;
