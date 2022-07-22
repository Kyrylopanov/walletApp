import React from "react";
import { SafeAreaView, View } from "react-native";
import { GithubIssuesList } from "../../components/GithubIssuesList/GithubIssuesList";
import { Search } from "../../components/Search/Search";
import Total from "../../components/Total/Total";
import { WalletsList } from "../../components/WalletsList/WalletsList";
import usePresenter from "./hooks/usePresenter";
import { styles } from "./style";

export const PortfolioScreen = () => {
  const {totalAmount, currencyList} = usePresenter()

  return (
    <SafeAreaView style={styles.main}>
      <Total totalAmount={totalAmount} />
      <WalletsList currencyList={currencyList} />
    </SafeAreaView>
  );
};
